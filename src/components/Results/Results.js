import React, { Component } from "react";
import "./results.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { movResults, tvShowResults, image } = this.props.resultsReducer;

    let movNames = movResults.map((movie, index) => (
      <Link to={`/results/movie/${movie.name}`}>
        <li key={index}>{movie.name}</li>
      </Link>
    ));
    let tvNames = tvShowResults.map((tv, index) => (
      <Link to={`/results/tvshow/${tv.name}/${tv.id}`}>
        <li key={index}>{tv.name}</li>
      </Link>
    ));

    return (
      <div className="background">
        <div className="header" />
        <div className="results">
          <div className="movResults">
            <h3>MOVIE RESULTS</h3>
            <ul>{movNames}</ul>
          </div>
          <div className="tvResults">
            <h3>TV SERIES RESULTS</h3>
            <ul>{tvNames}</ul>
          </div>
        </div>
      </div>
    );
  }
}

// export default Results;
function mapStateToProps(state) {
  return {
    resultsReducer: state.resultsReducer
  };
}
export default connect(mapStateToProps)(Results);
