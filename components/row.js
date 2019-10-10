import React from "react";

export default ({ classes, children }) => (
	<div className={classes ? `row ${classes}` : "row"}>{children}</div>
);
