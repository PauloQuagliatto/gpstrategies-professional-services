import React, { useState } from "react";
import './styles.css';

import Modal from "react-modal";

Modal.setAppElement('#root')

const SaibaMais = () => {
    const [modal, setModal] = useState(false)

    const openModal = () => setModal(true)
    const closeModal = () => setModal(false)
    
    return (
        <div className="saiba-mais">
            <h3><span>isus proin</span></h3>
            <h3>Lorem ipsum</h3>

            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam culpa quae facere, qui, quas quidem, 
                vel repellendus aperiam obcaecati facilis amet sed ratione omnis sequi dolor nisi. Libero, culpa 
                repellat.
            </p>
            <p>
                <b>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam culpa quae facere, qui, quas quidem, 
                    vel repellendus aperiam obcaecati facilis amet sed ratione omnis sequi dolor nisi. Libero, culpa 
                    repellat.
                </b>
            </p>

            <button type="button" onClick={openModal}><span>Saiba Mais</span></button>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                overlayClassName="modal-overlay"
                className="modal-content"
                >
                <h2>Title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio quasi libero obcaecati 
                    quidem omnis sequi architecto asperiores soluta officia? Harum cumque quisquam laboriosam dicta, 
                    vitae rerum dolore exercitationem sit?
                </p>
                <button className="close" onClick={closeModal}>Fechar</button>
            </Modal>
        </div>
    )
}

export default SaibaMais