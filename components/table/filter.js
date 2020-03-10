import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popper";
import PropTypes from "prop-types";
import FilterForm from "./FilterForm";

const useStyles = makeStyles(theme => ({
	paper: {
		border: "1px solid",
		padding: theme.spacing(1),
		backgroundColor: theme.palette.background.paper
	}
}));

function Filter({ id, anchorEl, columnData, handleSubmit, handleChange, filter }) {
	const classes = useStyles();
	return (
		<Popover id={id} open={Boolean(anchorEl)} anchorEl={anchorEl}>
			<div className={classes.paper}>
				<FilterForm
					columnData={columnData}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
					filter={filter}
				/>
			</div>
		</Popover>
	);
}

Filter.propTypes = {
	id: PropTypes.string,
	anchorEl: PropTypes.object,
	columnData: PropTypes.object,
	handleSubmit: PropTypes.func,
	handleChange: PropTypes.object,
	filter: PropTypes.object
};

export default Filter;
