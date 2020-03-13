import { Fragment, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Tooltip from "@material-ui/core/Tooltip";
import MomentUtils from "@date-io/moment";
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider
} from "@material-ui/pickers";
import * as moment from "moment";
import Grid from "@material-ui/core/Grid";
// import IconButton from "@material-ui/core/IconButton";
// import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { makeStyles } from "@material-ui/core/styles";
moment.locale("en");

const useStyles = makeStyles(theme => ({
	root: {
		textAlign: 'center',
		padding: theme.spacing(1)
	}
}));

function DatePickerForm({ col, handleChange, dates, handleSubmit }) {
	const classes = useStyles();
	const { start, end } = dates;
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<Grid item xs={6} className={classes.root}>
				<KeyboardDatePicker
					clearable
					value={start}
					placeholder={start.format()}
					onChange={date => handleChange.start(date)}
					format="DD/MM/YYYY"
					label="start date"
					maxDate={end}
				/>
			</Grid>
			<Grid item xs={6} className={classes.root}>
				<KeyboardDatePicker
					clearable
					placeholder={end.format()}
					value={end}
					onChange={date => handleChange.end(date)}
					format="DD/MM/YYYY"
					label="end date"
					minDate={start}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}

export default DatePickerForm;
