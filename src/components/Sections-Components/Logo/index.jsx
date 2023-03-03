import React from "react";
import './styles.css';

import logoImg from '../../../assets/images/logo/logo.svg'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logoImg} alt="logo" />
        </div>
    )
}

export default Logo