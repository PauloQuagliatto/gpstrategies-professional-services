import React from 'react'
import { useState } from "react";
import './styles.css';


const TabViewWithImage = ({ data, direction = 'row' }) => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="tab-view-with-image" style={{ flexDirection: direction }}>
            <div className="tab-icons">
                {data.length > 0 && data.map((item, index) => (
                    <div className={`icon ${index === indexItem ? 'active' : ''}`} key={index} onClick={_ => chooseItem(index)}>
                        <img src={item.icon} alt="" />
                    </div>
                ))}
            </div>
            <div className="content">
                <div className="title">
                    <h4>{data[indexItem].title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: data[indexItem].text }} >

                    </p>
                </div>
                <div className="text-area">
                    <img src={data[indexItem].icon} alt="" />
                    <div className="text">
                        <h5>{data[indexItem].subTitle}</h5>
                        <p dangerouslySetInnerHTML={{ __html: data[indexItem].subText }}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabViewWithImage