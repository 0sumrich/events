import React from "react";
import css from './style/row.css'
export default ({ classes, children }) => (
	<div className={`col ${classes}`}>{children}</div>
);
