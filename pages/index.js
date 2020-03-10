import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import fetch from "isomorphic-unfetch";
import TableWrapper from "../components/table/tableWrapper";
// import Years from "../components/years";
import Toolbar from "../components/toolbar";

const Home = ({ data }) => {
  
    const handleAddClick = () => {
    console.log("add click");
    const o = tableData[year][tableData[year].length - 1];
    const keys = Object.keys(o);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      o[key] = "";
    }
    tableData[year].push(o);
    setTableData(tableData[year]);
  };

  const SideNav = () => (
    <Grid item sm={2}>
      <Toolbar />
    </Grid>
  );

  const MainPanel = () => (
    <Grid item sm={10}>
      <TableWrapper data={data}/>
    </Grid>
  );

  return (
    <Grid container>
      <SideNav />
      <MainPanel />
    </Grid>
  );
};

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${process.env.API_URL}/api/events_table`);
  const json = await res.json();
  return { data: json.data };
};

export default Home;
