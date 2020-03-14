import { useState } from "react";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Typography from "@material-ui/core/Typography";
import VirtualizedTable from "./virtualizedTable";
import Filter from "./Filter";
import * as moment from "moment";

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

function filterer(arr, filters) {
  const { dates } = filters;
  const datesFilter = date => {
    let { start, end } = dates;
    if (start.isValid() && end.isValid()) {
      return date.isSameOrAfter(start) && date.isSameOrBefore(end);
    } else {
      return true;
    }
  };
  const res = arr.filter(o => datesFilter(moment(o.Date)));
  //you can't return an empty array or it will crash
  // instead return an 1 length array with undefined
  if (res.length < 1) {
    const o = arr[0];
    const keys = Object.keys(o);
    keys.forEach(key => {
      o[key] = undefined;
    });
    return [o];
  }
  return res;
}

function TableWrapper({ data }) {
  const dates = data.map(o => moment(o.Date));
  const [dateStart, setDateStart] = useState(moment.min(dates));
  const [dateEnd, setDateEnd] = useState(moment.max(dates));
  // const [rows, setRows] = useState(data);
  const [anchorEl, setAnchorEl] = useState(null);
  const [columnData, setColumnData] = useState(null);
  const rows = filterer(data, {
    dates: { start: dateStart, end: dateEnd }
  });

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
        handleSubmit={e => {
          e.preventDefault();
          setAnchorEl(null);
        }}
        handleChange={{
          dates: {
            start: date => {
              if (date) setDateStart(date);
            },
            end: date => {
              if (date) setDateEnd(date);
            }
          }
        }}
        filter={{
          dates: {
            start: dateStart,
            end: dateEnd
          },
          libraries: e => console.log(e)
        }}
      />
    </Paper>
  );
}

export default TableWrapper;
