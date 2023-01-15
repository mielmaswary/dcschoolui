import React, { useState } from "react";
import AlertPopUpPopUp from "../components/AlertPopUp";
const MannagePanelBtn = (props) => {
  let btncolor = "";
  switch (props.type) {
    case "עריכה":
      btncolor = "orange-btn";
      break;
    case "הוספה":
      btncolor = "green-btn";
      break;
    case "מחיקה":
      btncolor = "red-btn";
      break;
    default:
      btncolor = "grey-btn";
  }

  const clickHandle = () => {
    const lessonId = props.id;
    fetch(`http://localhost:4000/lessons/${lessonId}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.setRender((prev) => prev + 1);
      });
  };
  return (
    <div className={`mannage-panel-btn ${btncolor}`} onClick={clickHandle}>
      {props.type}
    </div>
  );
};

export default MannagePanelBtn;
