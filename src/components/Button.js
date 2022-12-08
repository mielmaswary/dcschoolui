import React from "react";

const Button = (props) => {
  return (
    <button
      onMouseEnter={props.checkValidation}
      onClick={props.submitForm}
      type="submit"
    >
      {props.text}
    </button>
  );
};

export default Button;
