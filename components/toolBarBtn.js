import React from "react";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const useStyles = makeStyles({
	toolbar: {
		"&:hover": {
			background: "red"
		}
	}
});

export default ({ icon, text, click }) => {
	const classes = useStyles();
	return (
		<ListItem button onClick={click}>
			<ListItemIcon>
				<Icon>{icon}</Icon>
			</ListItemIcon>
			<ListItemText>{text}</ListItemText>
		</ListItem>
	);
};
