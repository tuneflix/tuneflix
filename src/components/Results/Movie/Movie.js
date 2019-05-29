import React from "react";
import { connect } from "react-redux"
import {getImage, getTvShows, getMovies} from "../../../ducks/resultsReducer"
import axios from 'axios'
import unirest from 'unirest';
import SongCard from '../../Shared/SongCard/SongCard'
import Header from '../../Shared/Header/Header'

class Error extends React.Component {
  constructor(){
    super();
    this.state ={
      userInput: "avengers"
    }
  }
  
  
  render(){
    
    return (
      <div className="Error" style ={{marginTop: "40vh", marginLeft: "20vw"}}>
          <Header />
          <SongCard />
      </div>
    );

  }
}
const mapStateToProps = state => {
  return {
    results: state.results
  }
}
  
export default connect(mapStateToProps, {getImage, getTvShows, getMovies})(Error);