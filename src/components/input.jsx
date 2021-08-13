import React from "react";
import Option from "./option";
import { debounce } from "../services/debounce";

const Input = ({ setBackGround, setCategory, api }) => {
  const handleOption = (e) => {
    const value = e.target.value;
    setBackGround(value);
  };

  const handleChange = debounce((e) => {
    let sign = e.target.value;
    setCategory(sign);
  }, 500);

  return (
    <div className="input">
      <div className="input-container">
        <div className="item item1"> צבע רקע - שם קטגוריה</div>
        <div className="item item2">
          <select onClick={(e) => handleOption(e)} name="cars" id="cars">
            {api.map((color, idx) => {
              return <Option key={idx} color={color} />;
            })}
          </select>
        </div>
        <div className="item item3">שם קטגוריה</div>
        <div className="item item4">
          <input onChange={(e) => handleChange(e)} type="text" />
        </div>
      </div>
    </div>
  );
};

export default Input;
