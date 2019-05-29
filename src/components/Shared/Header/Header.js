import React, {Component} from "react";
import "./header.scss";
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';
import {getMovies,getTvShows,getImage} from '../../../ducks/resultsReducer';

  class Header extends Component {

    constructor(props) {
      super(props);
      this.state = {
          userInput: '',
          movResults: [],
          hide: false
      }
    }
  
  handleEnter = e => {
      if(e.key === 'Enter') {
          this.handleClick();
      }
  }
  
  handleInput = e => {
    this.setState({userInput: e.target.value})
  }
  
  handleClick = () => {
      const {userInput} = this.state;
      this.props.getMovies(userInput);
      this.props.getTvShows(userInput);
      this.props.getImage(userInput);
  }
  
  render() {

    // if (this.props.location.pathname === '/results') {
    //   // let hideResultsButton = document.getElementById('backToResultsButton');
    //   // hideResultsButton.style.display = 'none'
    //   var hide = document.getElementById('backToResultsButton');
    //   hide.style.display = 'none';
    // }


  return (
    <div className="header-wrapper">
      <div className="header-cont">
        <h1>TuneFlix</h1>
        <div className="input-cont">
          <input onKeyPress={this.handleEnter} onChange={this.handleInput}placeholder="Search by movie, tv show, or artist" />
          <Link to='/results'><i onClick={this.handleClick} className="material-icons">search</i></Link>
        </div>
        <button id='backToResultsButton'>
          <i className="material-icons">arrow_left</i>
          Results <br />
        </button>
        {/* <button>Back to Results</button> */}
      </div>
    </div>
  );
}
}

function mapStateToProps (state){
  return{
    resultsReducer: state.resultsReducer
  }
}
export default connect(mapStateToProps, {getMovies,getTvShows,getImage})(withRouter(Header));
