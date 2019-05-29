import React, {Component} from "react";
import "./search.scss";
import axios from 'axios';
import {connect} from "react-redux"
import {getMovies,getTvShows,getImage} from "../ducks/resultsReducer"

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userInput: '',
        movResults: []
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
  return (
    <div className="background">
      <div className="header">
      </div>
      <div className="body">
        <h1>TuneFlix</h1>
        <input onKeyPress={this.handleEnter} onChange={this.handleInput} className='userInput'  placeholder="Search TuneFlix for Movie or TV Series"/>
        <button onClick={this.handleClick}>Search</button>
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
export default connect(mapStateToProps, {getMovies,getTvShows,getImage})(Search);