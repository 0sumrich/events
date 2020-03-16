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
  const res = libarr.filter(o => datesFilter(moment(o.Date)));
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
  const [libraries, setLibraries] = useState([]);
  // const [rows, setRows] = useState(data);
  const [anchorEl, setAnchorEl] = useState(null);
  const [columnData, setColumnData] = useState(null);
  // const rows = filterer(data, {
  //   dates: { start: dateStart, end: dateEnd },
  //   libraries: libraries
  // });
  const [rows, setRows] = useState(data);

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
              if (date && date.isValid()) {
                const newRows = rows.filter(o =>
                  moment(o.Date).isSameOrAfter(date)
                );
                setRows(newRows);
                setAnchorEl(null);
              } else {
                const newRows = data.filter(o =>
                  moment(o.Date).isBetween(
                    moment.min(dates, moment.max(rows.map(o => o.Date)))
                  )
                );
                setRows(newRows);
                setAnchorEl(null);
              }
            },
            end: date => {
              if (date && date.isValid()) {
                const newRows = rows.filter(o =>
                  moment(o.Date).isSameOrBefore(date)
                );
                setRows(newRows);
                setAnchorEl(null);
              }
            }
          },
          libraries: (event, values) => {
            console.log(values);
          }
        }}
        filter={{
          dates: {
            start: dateStart,
            end: dateEnd
          }
        }}
      />
    </Paper>
  );
}

export default TableWrapper;
