import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popper";
import PropTypes from "prop-types";
import FilterForm from "./FilterForm";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	paper: {
		border: "1px solid",
		padding: theme.spacing(2),
		backgroundColor: theme.palette.background.paper
	},
	root: {
		flexGrow: 1
	},
	btn: {
		// padding: theme.spacing(1),
		'& svg': {
			height: '0.75em',
			width: '0.75em'
		}
	}
}));

function Filter({
	id,
	anchorEl,
	columnData,
	handleSubmit,
	handleChange,
	filter
}) {
	const classes = useStyles();
	const CloseBtn = () => (
		<Grid item xs={1}>
			<Tooltip title="Close">
				<IconButton
					className={classes.btn}
					size="small"
					type="submit"
					aria-label="close"
				>
					<CloseOutlinedIcon />
				</IconButton>
			</Tooltip>
		</Grid>
	);

	// <Grid container item xs={12} spacing={3}>
	//   <FormRow />
	// </Grid>

	return (
		<Popover id={id} open={Boolean(anchorEl)} anchorEl={anchorEl}>
			<div className={classes.paper}>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={1} className={classes.root}>
						<Grid
							container
							item
							xs={12}
							direction="row"
							justify="flex-end"
							alignItems="center"
						>
							<CloseBtn />
						</Grid>
						<Grid
							container
							justify="space-between"
							alignItems="center"
							item
							xs={12}
						>
							<FilterForm
								columnData={columnData}
								handleSubmit={handleSubmit}
								handleChange={handleChange}
								filter={filter}
							/>
						</Grid>
					</Grid>
				</form>
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
