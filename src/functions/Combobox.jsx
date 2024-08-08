import React from "react";
import JsonAry from "../JsonData";

function Combobox() {
  return (
    <div>
      <ComboBox> </ComboBox>
    </div>
  );
}

export default Combobox;

const ComboBox = (obj) => {
  const uniqueItems = [
    "all",
    ...new Set(
      JsonAry.map((obj) => {
        return obj.item;
      })
    ),
    "none",
  ];

  return (
    <select>
      {uniqueItems.map((str) => {
        return <option>{str}</option>;
      })}
    </select>
  );
};
