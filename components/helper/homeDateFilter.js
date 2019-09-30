import moment from "moment";

function homeDateFilter(data, year) {
	const getYear = d => moment(d).year();
	return data.filter(o => getYear(o.Date) === year);
}

export default homeDateFilter