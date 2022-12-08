import React from "react";
import Purchase from "./Purchase";

const Admin = (props) => {
  return (
    <div>
      <Purchase questions={props.questions} />
    </div>
  );
};

export default Admin;
