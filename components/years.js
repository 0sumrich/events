import React from "react";
import moment from "moment";
import css from "./style/breadcrumbs.css";

const Years = ({ years, active, handleClick }) => (
  <nav id="breadcrumbs" className="blue darken-4">
    <div className="nav-wrapper">
      <div className="col s12">
        {years.map(year => (
          <a
            key={year}
            href="#!"
            className={`breadcrumb ${active === +year ? "active" : ""}`}
            onClick={handleClick}
          >
            {year}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

export default Years;
