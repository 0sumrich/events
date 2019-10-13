import React from "react";
import css from "./style/toolbar.css";

const Icon = ({ children }) => (
	<i className="small material-icons">{children}</i>
);
const AddBtn = () => <Icon>add_circle</Icon>;
const SaveBtn = () => <Icon>done</Icon>;
const FolderOpen = () => <Icon>folder_open</Icon>;
const Divider = () => <li className="divider"></li>;

const btnArray = [<AddBtn />, <SaveBtn />, <FolderOpen />];

export default () => (
	<ul>
		{btnArray.map((btn, i) => (
			<div>
				<li key={`btn ${i}`} className="center-align">
					{btn}
				</li>
				<Divider key={`div ${i}`} />
			</div>
		))}
	</ul>
);
