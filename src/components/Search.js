import React from "react";
import "./search.scss";

function Search() {
  return (
    <div className="background">
      <div className="header">
      </div>
      <div className="body">
        <h1>TuneFlix</h1>
        <input className='userInput' onfocus="this.placeholder = ''" placeholder="Search TuneFlix for Movie or TV Series"/>
      </div>
    </div>
  );
}

export default Search;
