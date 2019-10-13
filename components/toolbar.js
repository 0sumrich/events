import React, { Fragment } from "react";
import css from "./style/toolbar.css";

const Icon = ({ children }) => (
	<i className="small material-icons">{children}</i>
);

const ToolBarBtn = ({ icon, text }) => (
	<Fragment>
		<Icon>{icon}</Icon>
		<span className="toolbar-text">{text}</span>
	</Fragment>
);

const AddBtn = () => <ToolBarBtn icon="add_circle" text="Add event" />;
const SaveBtn = () => <ToolBarBtn icon="done" text="Save changes" />;
const Reports = () => <ToolBarBtn icon="folder_open" text="View reports" />;
const Divider = () => <li className="divider"></li>;

const btnArray = [<AddBtn />, <SaveBtn />, <Reports />];

export default () => (
	<ul className="toolbar">
		{btnArray.map((btn, i) => (
			<div key={`div + ${i}`}>
				<li key={`btn ${i}`} className="valign-wrapper">
					{btn}
				</li>
				<Divider key={`divider ${i}`} />
			</div>
		))}
	</ul>
);
