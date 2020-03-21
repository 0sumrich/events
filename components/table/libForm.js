import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Grid from "@material-ui/core/Grid";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const LibForm = ({ col, handleChange, dates, handleSubmit }) => {
	// debugger;
	return (
		<Autocomplete
			multiple
			id="library-checkboxes"
			options={col.sort()}
			disableCloseOnSelect
			getOptionLabel={option => option}
			renderOption={(option, { selected }) => (
				<React.Fragment>
					<Checkbox
						icon={icon}
						checkedIcon={checkedIcon}
						style={{ marginRight: 8 }}
						checked={selected}
					/>
					{option}
				</React.Fragment>
			)}
			style={{ width: 500 }}
			onChange={handleChange}
			renderInput={params => (
				<TextField
					{...params}
					variant="outlined"
					label="Library"
					placeholder="Filter by library"
				/>
			)}
		/>
	);
};

export default LibForm;
