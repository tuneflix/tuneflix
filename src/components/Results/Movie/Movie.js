import React from "react";
import { connect } from "react-redux"
import {getImage, getTvShows, getMovies,getMovieSongs} from "../../../ducks/resultsReducer"
import SongCard from '../../Shared/SongCard/SongCard'
import Header from "../../Shared/Header/Header"


class Movie extends React.Component {
  constructor(){
    super();
    this.state ={
      
    }
  }

  componentDidMount(){
    const movID = this.props.match.params.movID
    const movName = this.props.match.params.movName
    this.props.getMovieSongs(movID);
    // this.props.getImage(movName)
    
  }
  
  
  render(){
    const{ movResults,image,songResults} = this.props.resultsReducer
    console.log(image);
    console.log(songResults)
    
   
    return (
      <div className="Error" >
          <Header />
          <SongCard />
      </div>
    );

  }
}
function mapStateToProps (state){
  return{
    resultsReducer: state.resultsReducer
  }
}
export default connect(mapStateToProps, {getMovies,getImage,getMovieSongs})(Movie);