import React from 'react';
import './index.css';

function TitleGoogle({ children, title, titleConfig = '', paragraphConfig = '', spanClass = '' }) {
    return (
        <div>
            <h1 className={'title'} style={titleConfig}>
                {title}
            </h1>
            <p className={'paragraph' + ' ' + spanClass} style={paragraphConfig}>
                {children}
            </p>
        </div>
    );
}

export default TitleGoogle;