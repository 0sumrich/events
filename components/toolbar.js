import React, { Fragment } from "react";
import css from "./style/toolbar.css";

const Icon = ({ children }) => (
	<i className="small material-icons">{children}</i>
);

const ToolBarBtn = ({ icon, text, click }) => (
	<li className="valign-wrapper" onClick={click}>
		<Icon>{icon}</Icon>
		<span className="toolbar-text">{text}</span>
	</li>
);

export default ({ handleAddClick }) => {
	const AddBtn = () => (
		<ToolBarBtn icon="add_circle" text="Add event" click={handleAddClick} />
	);
	const SaveBtn = () => <ToolBarBtn icon="done" text="Save changes" />;
	const Reports = () => <ToolBarBtn icon="folder_open" text="View reports" />;
	const Divider = () => <li className="divider"></li>;

	const btnArray = [<AddBtn />, <SaveBtn />, <Reports />];
	return (
		<ul className="toolbar">
			{btnArray.map((btn, i) => (
				<div key={`div + ${i}`}>
					{btn}
					<Divider key={`divider ${i}`} />
				</div>
			))}
		</ul>
	);
};
