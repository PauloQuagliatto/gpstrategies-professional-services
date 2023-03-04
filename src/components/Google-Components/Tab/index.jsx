import React, { useEffect, useState } from "react";
import './index.css'

const Tab = ({data}) => {


  const [itemTabActive, setItemTabActive] = useState({index: 0, text: ''});


  const handleActiveTab = (text, index) => {
    setItemTabActive({index, text});
  }

  useEffect(() => {
    setItemTabActive({index: 0, text: data[0].text});
  },[])

  return (
    <div className="tab-content">
      <div className="tab-buttons">
        {data.map((item, index) => (
            <button className={`${itemTabActive.index == index ? 'active' : ''}`}  onClick={() => handleActiveTab(item.text, index)}>{item.buttonText}</button>
        ))}
      </div>
      <div className="tab-text">
        <p>{itemTabActive.text}</p>
      </div>
    </div>
  );
}

export default Tab;