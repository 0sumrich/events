import DatePickerForm from "./DateForm";

function FilterForm({ columnData, handleSubmit, handleChange, filter }) {
	const col = columnData.columnData;
	const dataKey = columnData.dataKey;

	if (dataKey === "Date") {
		return (
				<DatePickerForm
					col={col.data}
					handleChange={handleChange.dates}
					dates={filter.dates}
					handleSubmit={handleSubmit}
				/>
		);
	}
	return dataKey;
}

export default FilterForm;
