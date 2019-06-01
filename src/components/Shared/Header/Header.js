import React, { Component } from "react";
import "./header.scss";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";
import {
  getMovies,
  getTvShows,
  getTvShowImdb
} from "../../../ducks/resultsReducer";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      movResults: [],
      hide: false,
      hideResultButton: false,
      style: {}
    };
  }

  componentDidMount() {
    if (this.props.location.pathname === "/results") {
      this.setState({ style: { display: "none" } });
    } else {
      this.setState({ style: {} });
    }
    console.log("pathname: ", this.props.location.pathname);
    console.log("style: ", this.state.style);
  }

  handleEnter = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  handleInput = e => {
    this.setState({ userInput: e.target.value });
  };

  handleClick = () => {
    const { userInput } = this.state;
    this.props.getMovies(userInput);
    this.props.getTvShows(userInput);
    this.props.getTvShowImdb(userInput);
    this.props.history.push("/results");
    console.log("props: ", this.props);
  };

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-cont">
          <Link to="/">
            <h1>TuneFlix</h1>
          </Link>
          <div className="input-cont">
            <input
              onKeyPress={this.handleEnter}
              onChange={this.handleInput}
              placeholder="Search by movie, tv show, or artist"
            />
            <Link to="/results">
              <i onClick={this.handleClick} className="material-icons">
                search
              </i>
            </Link>
          </div>
          <Link to="/results">
            <button style={this.state.style} id="backToResultsButton">
              <i className="material-icons">arrow_left</i>
              Results <br />
            </button>
          </Link>
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
export default connect(
  mapStateToProps,
  { getMovies, getTvShows, getTvShowImdb }
)(withRouter(Header));
