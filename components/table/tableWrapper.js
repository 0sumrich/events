import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import VirtualizedTable from "./virtualizedTable";
import Filter from "./Filter";

const columnWidth = s => {
  if (s === "Adults" || s == "Children") {
    return 100;
  } else if (s === "Date" || s === "Delivered By" || s === "Charge") {
    return 150;
  } else {
    return 200;
  }
};

const getColumns = data =>
  Object.keys(data[0])
    .filter(s => s !== "id")
    .map(s => {
      const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
      return {
        width: columnWidth(s),
        label: capitalize(s),
        dataKey: s,
        columnData: { data: [...new Set(data.map(o => o[s]))] }
      };
    });

//   const handleClick = event => {
//   setAnchorEl(anchorEl ? null : event.currentTarget);
// };

function TableWrapper({ data }) {
  const [rows, setRows] = useState(data);
  const [anchorEl, setAnchorEl] = useState(null);
  const [columnData, setColumnData] = useState(null);

  const handleHeaderClick = e => {
    const target =
      e.event.currentTarget == anchorEl ? null : e.event.currentTarget;
    const targetCol = e == columnData ? null : e;
    setAnchorEl(target);
    setColumnData(targetCol);
  };

  return (
    <Paper style={{ height: "100vh", width: "100%" }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={getColumns(rows)}
        onRowClick={({ rowData, index }) => {
          console.log(rowData);
          console.log(`index: ${index}`);
          setAnchorEl(null);
        }}
        onHeaderClick={handleHeaderClick}
        scrollToIndex={data.length - 1}
      />
      <Filter
        id={anchorEl ? `filter-${columnData.dataKey}` : undefined}
        anchorEl={anchorEl}
        columnData={columnData}
        rows={rows}
        handleSubmit={() => console.log('hanndle form submit')}
      />
    </Paper>
  );
}

export default TableWrapper;
