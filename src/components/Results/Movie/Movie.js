import React from "react";
import { connect } from "react-redux"
import {getImage, getMovies,getMovieSongs} from "../../../ducks/resultsReducer"


class Movie extends React.Component {
  constructor(){
    super();
    this.state ={
      
    }
  }

  componentDidMount(){
    
  }
  
  
  render(){
    const{ movResults, tvShowResults,image,getMovieSongs} = this.props.resultsReducer
    console.log(getMovieSongs)
    // console.log(image)
    return (
      <div className="Error" style ={{marginTop: "40vh", marginLeft: "20vw"}}>
          Coming Soon
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