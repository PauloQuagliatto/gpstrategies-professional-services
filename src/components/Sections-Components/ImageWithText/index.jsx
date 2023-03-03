import React from "react";
import './styles.css';

const ImageWithText = ({ children, imgSource, align, reverse = false, style = { maxWidth: '25rem' } }) => {
    return (
        <div className={`image-with-text ${align} ${reverse ? 'reverse' : ''}`}>
            <img src={ imgSource } style={ style } alt="" />
            <div className="text-area">
                { children }
            </div>
        </div>
    )
}

export default ImageWithText