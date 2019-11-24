export default theme => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  header: {
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  }
});