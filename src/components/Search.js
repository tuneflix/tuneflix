import React, { Component } from "react";
import "./search.scss";
import axios from "axios";
import { connect } from "react-redux";
import { getMovies, getTvShows, getTvShowImdb } from "../ducks/resultsReducer";
import { Link } from "react-router-dom";
import Audd from "./Audd";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      auddOn: false
    };
  }

  clickAudd = e => {
    this.setState({
      auddOn: !this.state.auddOn
    });
  };
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
    
    if( userInput.length > 0 ) {
      this.props.getMovies(userInput);
      this.props.getTvShows(userInput);
      this.props.history.push('/results');
   
    }else {
      alert("Please Enter Movie or TvShow Name")
      
    }
  }

  render() {
    const { movResults, tvShowResults, image } = this.props.resultsReducer;
    console.log(movResults);
    console.log(tvShowResults);
    console.log(image);
    return (
      <div id="Search">
        <div className="background">
          <div className="body">
            <h1>TuneFlix</h1>
            <div className="search-cont">
              <input
                onKeyPress={this.handleEnter}
                onChange={this.handleInput}
                className="userInput"
                placeholder="Search TuneFlix for Movie or TV Series"
              />
              {/* <Link to="/results"> */}
                {/* <button onClick={this.handleClick}> */}
                {/* </button> */}
              {/* </Link> */}
              
                <i onClick={this.handleClick} className="material-icons">
                  search
                </i>
                 <i className="material-icons" onClick ={this.clickAudd}>
                  mic
                </i>
              
            </div>
            <p>
              Discover soundtracks by searching your favorite movies and tv
              series!
            </p>
            {this.state.auddOn ? <Audd /> : null}
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
export default connect(
  mapStateToProps,
  { getMovies, getTvShows, getTvShowImdb }
)(Search);
