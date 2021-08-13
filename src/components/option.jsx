import React from "react";

const Option = ({ color }) => {
  return <option value={color.color}>{color.translate}</option>;
};

export default Option;
