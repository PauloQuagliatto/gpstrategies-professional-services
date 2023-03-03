import React, { useRef } from "react";
import Slider from "react-slick";
import './styles.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import arrowPrev from '../../../assets/images/carrousel/purple-left.png'
import arrowNext from '../../../assets/images/carrousel/purple-left.png'

const data = [
    {
        title: 'Produto 01',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem ipsam corporis consectetur minima facilis sequi totam numquam culpa nihil mollitia tempora architecto cumque hic deleniti, vel voluptatum sint dignissimos?'
    },
    {
        title: 'Produto 02',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem ipsam corporis consectetur minima facilis sequi totam numquam culpa nihil mollitia tempora architecto cumque hic deleniti, vel voluptatum sint dignissimos?'
    },
    {
        title: 'Produto 03',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem ipsam corporis consectetur minima facilis sequi totam numquam culpa nihil mollitia tempora architecto cumque hic deleniti, vel voluptatum sint dignissimos?'
    },
    {
        title: 'Produto 04',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem ipsam corporis consectetur minima facilis sequi totam numquam culpa nihil mollitia tempora architecto cumque hic deleniti, vel voluptatum sint dignissimos?'
    },
    {
        title: 'Produto 05',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem ipsam corporis consectetur minima facilis sequi totam numquam culpa nihil mollitia tempora architecto cumque hic deleniti, vel voluptatum sint dignissimos?'
    },
    {
        title: 'Produto 06',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae rem ipsam corporis consectetur minima facilis sequi totam numquam culpa nihil mollitia tempora architecto cumque hic deleniti, vel voluptatum sint dignissimos?'
    },
]

const Carrousel = () => {
    const slider = useRef(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    const prev = () => {
        slider.current.slickPrev()
    }

    const next = () => {
        slider.current.slickNext()
    }



    return (
        <div className="carrousel">
            <Slider {...settings} ref={slider}>
                { data.map((item, index) => {
                    return (
                        <div className="item" value={ index + 1 } key={index}>
                            <h3>{ item.title }</h3>
                            <p>{ item.text }</p>
                        </div>
                    )
                }) }
            </Slider>
            <div className="controls">
                <button className="prev" onClick={prev}><img src={arrowPrev} alt="voltar" draggable="false" /></button>
                <button className="next" onClick={next}><img src={arrowNext} alt="avançar" draggable="false" /></button>
            </div>
        </div>
    )
}

export default Carrousel