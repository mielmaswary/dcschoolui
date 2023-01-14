import React, { Fragment, useState, useEffect } from "react";
import ManagementPanel from "../components/ManagementPanel";
import Table from "../components/Table";
import getObjectWithSelectedProps from "../utils/getObjectWithSelectedProps";
const LessonsManagement = () => {
  const [lessonsData, setLessonsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/lessons/all")
      .then((response) => response.json())
      .then((data) => {
        setLessonsData(data);
      });
  }, []);
  const selectedProps = ["id", "title", "video_url"];
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
    <div className="main-container">
      <Table tableData={tableData} />
      <ManagementPanel buttons={buttons} />
    </div>
  );
};

export default LessonsManagement;
