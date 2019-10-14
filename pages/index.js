import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Table from "../components/table";
import Years from "../components/years";
import Row from "../components/row";
import Col from "../components/col";
import Toolbar from "../components/toolbar";

const Home = ({ data }) => {
  const [tableData, setTableData] = useState(data);
  const [year, setYear] = useState(2019);
  const clickYearHandle = e => {
    e.preventDefault();
    setYear(+e.target.innerHTML);
  };

  const handleAddClick = () => {
    console.log('add click')
    // const o = tableData[year][tableData[year].length - 1];
    // const keys = Object.keys(o);
    // for (let i = 0; i < keys.length; i++) {
    //   o[key] = "";
    // }
    // const newData = tableData[year].push(o);
    // setTableData(newData);
  };

  const SideNav = () => (
    <Col classes="s3">
      <Toolbar handleAddClick={handleAddClick}/>
    </Col>
  );

  const MainPanel = () => (
    <Col classes="s9">
      <Years
        years={Object.keys(data)}
        active={year}
        handleClick={clickYearHandle}
      />
      <Table data={tableData[year]} />
    </Col>
  );

  return (
    <Row>
      <SideNav />
      <MainPanel />
    </Row>
  );
};

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${process.env.API_URL}/api/events_table`);
  const json = await res.json();
  return { data: json.data };
};

export default Home;
