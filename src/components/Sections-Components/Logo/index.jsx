import React from "react";
import './styles.css';

import logoImg from '../../../assets/images/logo/logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <div className="logo-wrapper">
                <h1 className="title">
                    Projeto B2B<br/>
                    Training
                </h1>
            </div>
            <img src={logoImg} alt="logo" />
        </div>
    )
}

export default Logo