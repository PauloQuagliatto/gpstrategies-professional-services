import { useState } from "react";

import arrowUp from "../../../assets/svgs/seta-up.svg";
import arrowDown from "../../../assets/svgs/seta-down.svg";
import arrowUpWhite from "../../../assets/svgs/seta-up-white.svg";
import arrowDownWhite from "../../../assets/svgs/seta-down-white.svg";
import joinha from "../../../assets/svgs/joinha.svg";

import "./styles.css";

const ButtonsWithInfo = ({ data, isBgWhite }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [chosenInfo, setChosenInfo] = useState(0);

  const chooseItem = (item) => {
    setSelectedIndex(item);
    setChosenInfo(0);
  };

  const prev = () => {
    setChosenInfo((currState) => {
      if (currState - 1 < 0) {
        return data[selectedIndex].multipleChannel.length - 1;
      }
      return currState - 1;
    });
  };

  const next = () => {
    setChosenInfo((currState) => {
      console.log(currState + 2 > data[selectedIndex].multipleChannel.length);
      if (currState + 2 > data[selectedIndex].multipleChannel.length) return 0;

      return currState + 1;
    });
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
            {item.buttonText}
          </button>
        ))}
      </div>
      {data[selectedIndex].hasMultipleInfo ? (
        <div className="content">
          <div className="image-container">
            <img
              src={data[selectedIndex].multipleChannel[chosenInfo].imageSrc}
            />
          </div>
          <div className="text-container">
            <div className="title-area">
              {
                <h1 style={{ color: isBgWhite ? "#660099" : "white" }}>
                  {data[selectedIndex].multipleChannel[chosenInfo].title}
                </h1>
              }
            </div>
            <div className="text-area">
              {
                <p style={{ color: isBgWhite ? "#660099" : "white" }}>
                  {data[selectedIndex].multipleChannel[chosenInfo].text}
                </p>
              }
            </div>
          </div>
          <div className="controls">
            <button className="prev" onClick={prev}>
              <img
                src={isBgWhite ? arrowUp : arrowUpWhite}
                alt="voltar"
                draggable="false"
              />
            </button>
            <p style={{ color: isBgWhite ? "#660099" : "white" }}>
              {chosenInfo + 1} / {data[selectedIndex].multipleChannel.length}
            </p>
            <button className="next" onClick={next}>
              <img
                src={isBgWhite ? arrowDown : arrowDownWhite}
                alt="avançar"
                draggable="false"
              />
            </button>
          </div>
        </div>
      ) : data[selectedIndex].hasCard ? (
        <div className="content">
          <div class="image-container">
            <img src={data[selectedIndex].imageSrc} />
          </div>
          <div class="text-container">
            <div className="buttons-with-info-and-card-container">
              <h1
                class="title"
                style={{ color: isBgWhite ? "#660099" : "white" }}
              >
                {data[selectedIndex].title}
              </h1>
              {!!data[selectedIndex].text && (
                <div className="text-area">
                  {
                    <p style={{ color: isBgWhite ? "#660099" : "white" }}>
                      {data[selectedIndex].text}
                    </p>
                  }
                </div>
              )}
              {!!data[selectedIndex].list && (
                <ul>
                  {data[selectedIndex].list.map((listItem, index) => (
                    <li
                      key={index}
                      style={{ color: isBgWhite ? "#660099" : "white" }}
                    >
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
              <div
                className={`card glow ${
                  data[selectedIndex].hasJoinha ? "" : "no-joinha"
                }`}
              >
                {data[selectedIndex].hasJoinha && (
                  <img src={joinha} alt="joinha-svg" />
                )}
                <div
                  className={`card-text ${
                    data[selectedIndex].hasJoinha ? "" : "no-joinha"
                  }`}
                >
                  <h1 style={{ color: "#660099" }}>Benefícios</h1>
                  <p style={{ color: "#660099" }}>
                    {data[selectedIndex].cardInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="content">
          <div class="image-container">
            <img src={data[selectedIndex].imageSrc} />
          </div>
          <div class="text-container">
            <div className="title-area">
              {
                <h1 style={{ color: isBgWhite ? "#660099" : "white" }}>
                  {data[selectedIndex].title}
                </h1>
              }
            </div>
            <div className="text-area">
              {
                <p style={{ color: isBgWhite ? "#660099" : "white" }}>
                  {data[selectedIndex].text}
                </p>
              }
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonsWithInfo;
