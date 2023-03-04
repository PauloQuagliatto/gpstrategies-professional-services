import { useState } from 'react'
import './styles.css'
import './modal.css'


import Modal from "react-modal";

import image1 from '../../../assets/images/google/workspace/showDownSlider/1-flexibilidade.png'
import { width } from '@mui/system';
Modal.setAppElement('#root')

const ShowDownSliderGoogle = ({ data }) => {
    const [modal, setModal] = useState(false)
    const [activeModal, setActiveModal] = useState(null);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false)

    const object = []

    data.forEach((item, index) => object.push({ id: index, display: item.modal ? true : item.display, modal: item.modal }))

    const [showDown, setShowDown] = useState(object)

    const handleClick = index => {
        setActiveModal(index);
        openModal()
        setShowDown(showDown.map(item =>
            item.id === index ? { ...item, display: item.modal ? true : !item.display } : { ...item }
        ))
    }

    return (
        <>
            <div className="show-down-slider">
                <div className="show-down-wrapper">
                    {data.map((item, index) => (
                        <>
                            <div className={`slider ${showDown[index].display ? 'show' : ''}`}
                                value={index + 1}
                                key={index}>
                                <img src={item.image} alt={item.title} onClick={_ => handleClick(index)}
                                    draggable="false" />
                                <div className="content-wrapper">
                                    <div className="content">
                                        {item.texts.map((paragraph, i) => {
                                            return <p key={i}>{paragraph}</p>
                                        })}
                                    </div>
                                </div>
                            </div>
                            {item.modal ? (
                                <Modal
                                    isOpen={modal && activeModal === index}
                                    onRequestClose={closeModal}
                                    overlayClassName="modal-overlay"
                                    className={`modal-content ${item.modal.isBigModal ? 'modal-lg' : ''}`}>
                                    <div className='modal-showDown' style={{...item.modal.config}}>
                                        <img src={item.modal.image} alt="" style={{width: item.modal.imgSize}}/>
                                        <div>
                                            <h2 style={{textAlign: item.modal.titleAlign}}>{item.modal.title}</h2>
                                            {item.modal.p.map((modalItem, modalIndex) => {
                                                return (
                                                    <p key={modalIndex}  dangerouslySetInnerHTML={{ __html: modalItem}} style={{marginBottom: item.modal.paragraphMargin}}></p>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <button className="close" onClick={closeModal}>Fechar</button>
                                </Modal>
                            ) : null}
                        </>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShowDownSliderGoogle