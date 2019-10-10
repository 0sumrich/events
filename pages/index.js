import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Table from "../components/table";
import Years from "../components/years";
import Row from "../components/row";
import Col from "../components/col";

const Home = ({ data }) => {
  const [year, setYear] = useState(2019);
  const clickYearHandle = e => {
    e.preventDefault();
    setYear(+e.target.innerHTML);
  };

  const SideNav = () => (
    <Col classes="s3">
      <p>hi</p>
    </Col>
  );

  const MainPanel = () => (
    <Col classes="s9">
      <Years
        years={Object.keys(data)}
        active={year}
        handleClick={clickYearHandle}
      />
      <Table data={data[year]} />
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
