import { Fragment, useState } from "react";
import MomentUtils from "@date-io/moment";
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider
} from "@material-ui/pickers";
import * as moment from "moment";

moment.locale("en");

function DatePickerForm({ col, handleChange, dates, handleSubmit }) {
	const { start, end } = dates;
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<form onSubmit={handleSubmit}>
				<KeyboardDatePicker
					clearable
					value={start}
					placeholder={start.format()}
					onChange={date => handleChange.start(date)}
					format="DD/MM/YYYY"
					label="start date"
					maxDate={end}
				/>

				<KeyboardDatePicker
					clearable
					placeholder={end.format()}
					value={end}
					onChange={date => handleChange.end(date)}
					format="DD/MM/YYYY"
					label="end date"
					minDate={start}
				/>
				<button type="submit" style={{ display: "none" }}>
					submit
				</button>
			</form>
		</MuiPickersUtilsProvider>
	);
}

export default DatePickerForm;
