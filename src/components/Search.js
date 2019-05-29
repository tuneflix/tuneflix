import React, {Component} from "react";
import "./search.scss";
import axios from 'axios';
import {connect} from "react-redux"
import {getMovies} from "../ducks/resultsReducer"

class Search extends Component {

  constructor() {
    super();
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

//app.get("/api/movie/:userInput", rc.getMovie);
  handleClick = () => {
    const {userInput} = this.state;
    this.props.getMovies(userInput);
    // axios.get(`/api/movie/:${this.state.userInput}`).then(res => {
    //   this.setState({movResults: res.data});
    //   console.log('handleClick results: ', this.state.movResults);
    // })
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
function mapStateToProps(state){
  return {
    searchResults: state.movResults
  }
}
export default connect(mapStateToProps, {getMovies})(Search);