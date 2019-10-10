import React, { useEffect } from "react";
import css from "./style/table.css";

const Rows = ({ data }) => {
  return data.map((o, i) => <TableRow key={o.id} id={o.id} data={o} />);
};

const TableRow = ({ data, id }) => {
  const handleHover = e => {
    console.log(e.target.parentElement);
  };
  const tds = Object.keys(data)
    .filter(s => s !== "id")
    .map(key => (
      <td key={id + key} data-col={key} data-id={id}>
        {data[key]}
      </td>
    ));
  return (
    <tr onMouseOver={handleHover} id={id}>
      {tds}
    </tr>
  );
};

const TableHead = ({ data }) => {
  const headers = data
    .filter(s => s !== "id")
    .map((val, i) => <th key={i + val}>{val}</th>);
  return (
    <thead>
      <tr>{headers}</tr>
    </thead>
  );
};

const Table = ({ data }) => {
  useEffect(() => {
    const tbody = document.querySelector("tbody");
    tbody.scrollTop = tbody.scrollHeight;
  });
  return (
    <React.Fragment>
      <table className="table highlight" id="table">
        <TableHead data={Object.keys(data[0])} />
        <tbody>
          <Rows data={data} />
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
