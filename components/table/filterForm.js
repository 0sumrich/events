import { makeStyles } from "@material-ui/core/styles";
import DatePickerForm from "./DateForm";

function FilterForm({ columnData, handleSubmit }) {
	const col = columnData.columnData;
	const dataKey = columnData.dataKey;
	
	if (dataKey === "Date") {
		return <DatePickerForm col={col.data}/>;
	}
	return dataKey;
}

export default FilterForm;
