import React from "react";

const Table = (props) => {
  const [headers, rows] = props.tableData;
  const tableRowsEl = rows.map((row) => <div>{row}</div>);
  return <div></div>;
};

export default Table;
