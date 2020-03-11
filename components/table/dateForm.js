import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import MomentUtils from "@date-io/moment";
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider
} from "@material-ui/pickers";
import * as moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
moment.locale("en");

const useStyles = makeStyles(theme => ({
	btn: {
		padding: theme.spacing(1),
		textAlign: "center"
	}
}));

function DatePickerForm({ col, handleChange, dates, handleSubmit }) {
	const classes = useStyles();
	const { start, end } = dates;
	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<form onSubmit={handleSubmit}>
				<div>
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
				</div>
				<div className={classes.btn}>
				<Tooltip title="Close">
					<IconButton size="small" type="submit" aria-label="close">
						<CloseOutlinedIcon />
					</IconButton>
					</Tooltip>
				</div>
			</form>
		</MuiPickersUtilsProvider>
	);
}

export default DatePickerForm;
