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
    this.inputBoxRef = React.createRef();
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
    // console.log("pathname: ", this.props.location.pathname);
    // console.log("style: ", this.state.style);
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
    if (userInput.length > 0) {
      this.props.getMovies(userInput);
      this.props.getTvShows(userInput);
      this.props.getTvShowImdb(userInput);
    } else {
      alert("Please Enter Movie or TvShow Name");
    }
    this.props.history.push("/results");
    console.log("props: ", this.props);
    this.setState({ userInput: "" });
    this.clearInputBox();
  };

  clearInputBox = () => {
    this.inputBoxRef.value = "";
  };

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-cont">
          <Link to="/">
            <h1 className="logo-header">TuneFlix</h1>
          </Link>
          <div className="input-cont">
            <input
              ref={el => (this.inputBoxRef = el)}
              onKeyPress={this.handleEnter}
              onChange={this.handleInput}
              placeholder="Search by Movie or TV series"
              className="Header-input"
            />
            <Link to="/results">
              <i
                onClick={this.handleClick}
                className="material-icons"
                id="material-icons-1"
              >
                search
              </i>
            </Link>
          </div>
          <Link to="/results">
            <button style={this.state.style} id="backToResultsButton">
              <i className="material-icons">arrow_left</i>
              <span>Results</span> <br />
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
