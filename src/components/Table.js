import React, { Fragment } from "react";
import MannagePanelBtn from "./MannagePanelBtn";

const Table = (props) => {
  const { tableData } = props;
  const columnsHeadlinesElements = tableData.columnsHeadlines.map(
    (column, index) => {
      return (
        <div key={index} className="cell">
          {column}
        </div>
      );
    }
  );
  const rowsElement = tableData.rows.map((row, index) => {
    return (
      <div key={index} className="row">
        {row.map((cell, index) => (
          <div key={index} className="cell">
            {cell}
          </div>
        ))}
        <MannagePanelBtn type={"עריכה"} />
        <MannagePanelBtn type={"מחיקה"} />
      </div>
    );
  });
  return (
    <div className="table">
      <div className="row">{columnsHeadlinesElements}</div>
      {rowsElement}
    </div>
  );
};

export default Table;
