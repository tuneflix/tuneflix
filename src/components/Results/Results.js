import React from "react";
import "./results.scss";

function Results() {
  return (
    <div className="background">
      <div className="header">
    </div>
        <div className="results">
            <div className="movResults">  
                <h3>MOVIE RESULTS</h3>
                <ul>
                    <li><a>Matrix</a></li>
                    <li>Released: 1999</li>
                </ul>
                <ul>
                    <li><a>Matrix Revolution</a></li>
                    <li>Released: 2003</li>
                </ul>
                <ul>
                    <li><a>Matrix Reloaded</a></li>
                    <li>Released: 2003</li>
                </ul>
            </div>
            <div className="tvResults">  
                <h3>TV SERIES RESULTS</h3>
                <ul>
                    <li><a>Matrix Prequel</a></li>
                    <li>Aired: 2013-2013</li>
                </ul>
                <ul>
                    <li><a>Matrix Whatever</a></li>
                    <li>Aired: 2011-2014</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Results;