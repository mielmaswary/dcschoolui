import { property } from "lodash";
import React from "react";
import { PROPERTIES } from "react-html5video/dist";

const AlertPopUp = (props) => {
  return (
    <div className="alert-popup-container">
      <div className="pop-up">
        <div>{props.msg}</div>
        <div>
          <button className="green-btn">כן- למחוק</button>
          <button className="red-btn">לא- בטל מחיקה</button>
        </div>
      </div>
    </div>
  );
};

export default AlertPopUp;
