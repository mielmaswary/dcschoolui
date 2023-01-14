import React from "react";

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
  return <div className={`mannage-panel-btn ${btncolor}`}>{props.type}</div>;
};

export default MannagePanelBtn;
