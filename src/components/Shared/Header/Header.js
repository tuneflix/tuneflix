import React from "react";
import "./header.scss";

function Header(props) {
  return (
    <div className="header-wrapper">
      <div className="header-cont">
        <h1>TuneFlix</h1>
        <div className="input-cont">
          <input placeholder="Search by movie, tv show, or artist" />
          <i className="material-icons">search</i>
        </div>
        <button>
          <i className="material-icons">arrow_left</i>
          Results <br />
        </button>
        {/* <button>Back to Results</button> */}
      </div>
    </div>
  );
}

export default Header;
