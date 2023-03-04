import { useState } from "react";

import arrowFullRight from "../../../assets/svgs/arrow-full-right.svg";
import arrowFullLeft from "../../../assets/svgs/arrow-full-left.svg";

import "./index.css";

function MultipleCards({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function prev() {
    setCurrentIndex((currState) => {
      if (currState - 1 < 0) {
        return data.length - 1;
      }

      return currState - 1;
    });
  }

  function next() {
    setCurrentIndex((currState) => {
      if (currState + 2 > data.length) return 0;

      return currState + 1;
    });
  }
  return (
    <div className="card-container">
      <div className="card-content">
        {data[currentIndex].hasImage ? (
          <img src={data[currentIndex].imageSrc} alt="card-image" />
        ) : null}
        <div
          className="text-container"
          style={{
            marginLeft: `${data[currentIndex].hasImage ? "4.813rem" : ""}`,
          }}
        >
          <h1>{data[currentIndex].title}</h1>
          {!!data[currentIndex].subTitle ? (
            <h4>{data[currentIndex].subTitle}</h4>
          ) : null}
          {!!data[currentIndex].text ? <p>{data[currentIndex].text}</p> : null}
          {!!data[currentIndex].list ? (
            <ul>
              {data[currentIndex].list.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="buttons-container">
        <img
          className="button-image"
          src={arrowFullLeft}
          alt="left-arrow"
          onClick={prev}
        />
        <img
          className="button-image"
          src={arrowFullRight}
          alt="right-arrow"
          onClick={next}
        />
      </div>
    </div>
  );
}

export default MultipleCards;
