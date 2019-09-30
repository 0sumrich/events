import React, { useState } from "react";
import fetch from "isomorphic-unfetch";
import Table from "../components/table";
import Years from "../components/years";
import homeDateFilter from "../components/helper/homeDateFilter";

function Home({ data }) {
	const [year, setYear] = useState(2019);
	const clickYearHandle = e => {
		e.preventDefault();
		setYear(+e.target.innerHTML);
	};

	return (
		<React.Fragment>
			<Years
				years={Object.keys(data)}
				active={year}
				handleClick={clickYearHandle}
			/>
			<Table data={data[year]} />;
		</React.Fragment>
	);
}

Home.getInitialProps = async ({ req }) => {
	const res = await fetch(`${process.env.API_URL}/api/events_table`);
	const json = await res.json();
	return { data: json };
};

export default Home;
