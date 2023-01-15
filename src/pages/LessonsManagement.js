import React, { Fragment, useState, useEffect } from "react";
import AlertPopUp from "../components/AlertPopUp";
import Header from "../components/Header";
import ManagementPanel from "../components/ManagementPanel";
import Table from "../components/Table";
import getObjectWithSelectedProps from "../utils/getObjectWithSelectedProps";
const LessonsManagement = () => {
  const [lessonsData, setLessonsData] = useState([]);
  const [render, setRender] = useState(0);
  const [showAlert, setShowAlert] = useState(true);
  useEffect(() => {
    fetch("http://localhost:4000/lessons/all")
      .then((response) => response.json())
      .then((data) => {
        setLessonsData(data);
      });
  }, [render]);
  const selectedProps = ["_id", "id", "title", "video_url"];
  const subObjects = lessonsData.map((obj) => {
    return getObjectWithSelectedProps(obj, selectedProps);
  });
  const subObjectsValues = subObjects.map((obj) => {
    return Object.values(obj);
  });
  const tableData = {
    columnsHeadlines: selectedProps,
    rows: subObjectsValues,
  };
  const buttons = [];
  return (
    <Fragment>
      <Header />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="main-container">
        <Table tableData={tableData} setRender={setRender} />
        <ManagementPanel buttons={buttons} />
      </div>
      {showAlert && (
        <AlertPopUp msg={"האם אתה בטוח שאתה רוצה למחוק את השאלה?"} />
      )}
    </Fragment>
  );
};

export default LessonsManagement;
