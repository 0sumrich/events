import React, { Fragment } from "react";
import ToolBarBtn from "./ToolBarBtn";
import { List } from "@material-ui/core";

export default ({ handleAddClick }) => {
	const AddBtn = () => (
		<ToolBarBtn icon="add_circle" text="Add event" click={handleAddClick} />
	);
	const SaveBtn = () => <ToolBarBtn icon="done" text="Save changes" />;
	const Reports = () => <ToolBarBtn icon="folder_open" text="View reports" />;
	const Divider = () => <li className="divider"></li>;

	return (
		<List>
			<AddBtn />
			<SaveBtn />
			<Reports />
		</List>
	);
};
