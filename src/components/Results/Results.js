import React, { Component } from "react";
import "./results.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
  const{ movResults, tvShowResults,image} = this.props.resultsReducer;
  // console.log(movResults);
  // console.log(tvShowResults);
  
  let movNames = movResults.map((movie, index) => <Link to={`/results/movie/${movie.id}`}><li key={index}>{movie.name}</li></Link> );
  let tvNames = tvShowResults.map((tv, index) => <Link to={`/results/tvshow/${tv.id}`}><li key={index}>{tv.name}</li></Link> )

  //movies - handle if no results
  let displayMovNames = movNames;
  if (movNames.length === 0) {
    displayMovNames = `Sorry - there were no results.`
  }

  //movies - handle if no results
  let displayTvNames = tvNames;
  if (tvNames.length === 0) {
    displayTvNames = `Sorry - there were no results.`
  }

  return (
    <div className="background">
      <div className="header" />
      <Header />
      <div className="results">
          <div className="movResults">
            <h3>MOVIE RESULTS</h3>
                <ul>
                  {displayMovNames}
                </ul>
        </div>
        <div className="tvResults">  
          <h3>TV SERIES RESULTS</h3>
                <ul>
                  {displayTvNames}
                </ul>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    resultsReducer: state.resultsReducer
  };
}
export default connect(mapStateToProps)(Results);
