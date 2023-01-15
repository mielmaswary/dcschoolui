import React, { Fragment, useState } from "react";
import MannagePanelBtn from "./MannagePanelBtn";

const Table = (props) => {
  const { tableData } = props;
  const columnsHeadlinesElements = tableData.columnsHeadlines.map(
    (column, index) => {
      if (column !== "_id") {
        return (
          <div key={index} className="cell">
            {column}
          </div>
        );
      }
    }
  );
  const rowsElement = tableData.rows.map((row, index) => {
    return (
      <div key={index} className="row">
        {row.map((cell, index) => {
          if (index > 0) {
            return (
              <div key={index} className="cell">
                {cell}
              </div>
            );
          }
        })}
        {/* <MannagePanelBtn
          type={"עריכה"}
          id={row[0]}
          setRender={props.setRender}
        /> */}
        <MannagePanelBtn
          type={"מחיקה"}
          id={row[0]}
          setRender={props.setRender}
        />
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
