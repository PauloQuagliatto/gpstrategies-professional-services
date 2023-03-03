import { useState } from "react";

import "./styles.css";

import { data } from "../../../data/ButtonWithImageAndText";

const ButtonsWithInfo = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [chosenInfo, setChosenInfo] = useState(0);

  const chooseItem = (item) => {
    setSelectedIndex(item);
    setChosenInfo(0);
  };

  return (
    <div className="tab-view-with-image">
      <div className="tab-icons">
        {data.map((item, index) => (
          <button
            className={`icon ${selectedIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => chooseItem(index)}
          >
            {selectedIndex === index}
            {item.buttonText}
          </button>
        ))}
      </div>
      {data[selectedIndex].hasMultipleInfo ? (
        <div className="content-info">
          <div className="title-area">
            {<h1>{data[selectedIndex].multipleChannel[chosenInfo].title}</h1>}
          </div>
          <div className="text-area">{<p>{data[selectedIndex].text}</p>}</div>
        </div>
      ) : (
        <div className="content">
          <div className="title-area">{<h1>{data[selectedIndex].title}</h1>}</div>
          <div className="text-area">{<p>{data[selectedIndex].text}</p>}</div>
        </div>
      )}
    </div>
  );
};

export default ButtonsWithInfo;
