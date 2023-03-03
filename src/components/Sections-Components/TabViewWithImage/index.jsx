import React, { useState } from "react";
import './styles.css';

import { data } from "../../../data/TabviewWithImage";


const TabViewWithImage = () => {
    const [indexItem, setIndexItem] = useState(0)

    const chooseItem = item => {
        setIndexItem(item)
    }

    return (
        <div className="tab-view-with-image">
            <div className="tab-icons">
                { data.map((item, index) => (
                    <div className={ `icon ${ index === indexItem ? 'active' : '' }` } key={index} onClick={_ => chooseItem(index)}>
                        {item.icon}
                    </div>
                )) }
            </div>
            <div className="content">
                {data[indexItem].icon}
                <div className="text-area">
                    { data[indexItem].description.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))  }
                </div>
            </div>
        </div>
    )
}

export default TabViewWithImage