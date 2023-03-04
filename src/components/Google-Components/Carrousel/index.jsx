import React, { useRef } from "react";
import Slider from "react-slick";

import './index.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import arrowPrevDefault from '../../../assets/images/google/workspace/carrousel-1/arrow-right.png'
import arrowNextDefault from '../../../assets/images/google/workspace/carrousel-1/arrow-left.png'


const CarrouselGoogle = ({ 
                            data, 
                            arrowPrev = '', 
                            arrowNext = '', 
                            slideShow = 1, 
                            carrouselType = '', 
                            vertical = false,
                            infinite = true
                        }) => {
    const slider = useRef(null)

    const settings = {
        dots: true,
        arrows: false,
        infinite: infinite,
        speed: 500,
        slidesToShow: slideShow,
        vertical: vertical,
        slidesToScroll: slideShow,
        // dotsClass: styles['slick-dots'],
        appendDots: dots => (
            <div>
                <ul className='dots'>{dots}</ul>
            </div>
        ),
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
        <div className={`carrousel ${ carrouselType }`}>
            <Slider {...settings} ref={slider}>
                {data.map((item, index) => {
                    return (
                        <>
                            <div className='item' value={index + 1} key={index}>
                                <div className='item-content'>
                                    {item.imgCarrousel ? (<img src={item.imgCarrousel} alt="" />) : null}

                                    {(item.title || item.text) && (
                                        <div className='item-text'>
                                            {item.title && <h3>{item.title}</h3>}
                                            {item.text && <p>{ item.text }</p> }
                                        </div>
                                    )}
                                </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
            <div className='controls'>
                <button className='prev' onClick={prev}>
                    <img src={arrowPrev ? arrowPrev : arrowPrevDefault} alt="voltar" draggable="false" />
                </button>
                <button className='next' onClick={next}>
                    <img src={arrowNext ? arrowNext : arrowNextDefault} alt="avançar" draggable="false" />
                </button>
            </div>
        </div>
    )
}

export default CarrouselGoogle