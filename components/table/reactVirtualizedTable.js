import Paper from "@material-ui/core/Paper";
import VirtualizedTable from './virtualizedTable';

const columnWidth = s => {
  if (s === "Adults" || s == "Children") {
    return 100;
  } else if (s === "Date" || s === "Delivered By" || s === "Charge") {
    return 150;
  } else {
    return 200;
  }
};

export default function ReactVirtualizedTable({ data }) {
  const rows = data;
  const columns = Object.keys(data[0])
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
  return (
    <Paper style={{ height: "100vh", width: "100%" }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={columns}
        onRowClick={({rowData, index}) => {
          console.log(rowData);
          console.log(`index: ${index}`)
        }}
        onHeaderClick={e => console.log(e)}
        scrollToIndex={data.length - 1}
      />
    </Paper>
  );
}