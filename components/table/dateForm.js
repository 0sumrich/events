import { useState } from "react";
import MomentUtils from "@date-io/moment";
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider
} from "@material-ui/pickers";
import * as moment from "moment";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

moment.locale("en");

const useStyles = makeStyles(theme => ({
	root: {
		textAlign: "center",
		padding: theme.spacing(1)
	}
}));

function DatePickerForm({ col, handleChange, handleSubmit }) {
	const classes = useStyles();
	// const { start, end } = dates;
	const dates = col.map(x => moment(x));
	const min = moment.min(dates)
	const max = moment.max(dates)
	const [startDate, setStartDate] = useState(min);
	const [endDate, setEndDate] = useState(max);
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Grid item xs={6} className={classes.root}>
				<KeyboardDatePicker
					clearable
					value={startDate}
					placeholder={min.format()}
					onChange={date => {
						handleChange.start(date);
						setStartDate(date);
					}}
					format="DD/MM/YYYY"
					label="start date"
					maxDate={endDate}
				/>
			</Grid>
			<Grid item xs={6} className={classes.root}>
				<KeyboardDatePicker
					clearable
					placeholder={max.format()}
					value={endDate}
					onChange={date => {
						handleChange.end(date);
						setEndDate(date);
					}}
					format="DD/MM/YYYY"
					label="end date"
					minDate={startDate}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}

export default DatePickerForm;
