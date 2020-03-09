import { Fragment, useState } from "react";
import MomentUtils from "@date-io/moment";
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider
} from "@material-ui/pickers";
import * as moment from 'moment';

moment.locale("en")

// function KeyboardDatePickerExample(props) {
//   const [selectedDate, handleDateChange] = useState(new Date());

//   return (
//     <Fragment>
//       <KeyboardDatePicker
//         clearable
//         value={selectedDate}
//         placeholder="10/10/2018"
//         onChange={date => handleDateChange(date)}
//         minDate={new Date()}
//         format="MM/dd/yyyy"
//       />

//       <KeyboardDatePicker
//         placeholder="2018/10/10"
//         value={selectedDate}
//         onChange={date => handleDateChange(date)}
//         format="yyyy/MM/dd"
//       />
//     </Fragment>
//   );
// }

// export default KeyboardDatePickerExample;

function DatePickerForm({col}) {
	const dates = col.map(o => moment(o))

	const [selectedDate, handleDateChange] = useState(moment.min(dates));

	return (
		<MuiPickersUtilsProvider utils={MomentUtils}>
			<KeyboardDatePicker
				clearable
				value={selectedDate}
				placeholder={moment.min(dates)}
				onChange={date => handleDateChange(date)}
				minDate={moment.min(dates)}
				format="MM/dd/yyyy"
			/>

			<KeyboardDatePicker
				placeholder={moment()}
				value={selectedDate}
				onChange={date => handleDateChange(date)}
				format="MM/dd/yyyy"
			/>
		</MuiPickersUtilsProvider>
	);
}

export default DatePickerForm;
