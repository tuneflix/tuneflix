import React from "react";
import { connect } from "react-redux"
import { getMovieImdb, getTvShows, getMovies, getMovieSongs } from "../../../ducks/resultsReducer"
import SongCard from '../../Shared/SongCard/SongCard'
import Header from '../../Shared/Header/Header'
import MediaInfo from "../../Shared/MediaInfo/MediaInfo"
import "./movie.scss"
import { breakStatement } from "@babel/types";


class Movie extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  componentDidMount() {

    const movID = this.props.match.params.movID
    this.props.getMovieSongs(movID);
    
    
    let lenghtofmovID = movID.length
    let year = movID.substring(lenghtofmovID - 4);
    if (isNaN(year)) {
      this.props.getMovieImdb(movID);
    } else {
      let movIDWithoutYear = movID.substring(0, lenghtofmovID - 5);
      this.props.getMovieImdb(movIDWithoutYear)

    }
  }


  render() {
    const { movResults, movIMDB, songResults, imdbLoading } = this.props.resultsReducer
    const movName = this.props.match.params.movName
    
    let filteredmovIMDB = [];
    if(movIMDB.length > 0){
      const movID = this.props.match.params.movID
      let year = movID.substring(movID.length - 4);
      if(isNaN(year) ===false ){
        let arr = movIMDB.filter( e => e.Year === year );
          if(arr[0]){filteredmovIMDB.push(arr[0])}
        
      }
      console.log(filteredmovIMDB)
      
    }

    
    console.log(songResults)
    console.log(movIMDB)
    return (
        <div className="movie-body" >
          <Header />
          {imdbLoading ? (
            <h1>Loading!!!</h1>
          ) : (
              <div className = "movie-media-info">
                  {filteredmovIMDB.length > 0 ?
                    <MediaInfo
                    mediaImage={filteredmovIMDB[0].Poster}
                    mediaTitle={filteredmovIMDB[0].Title}
                    mediaYear={filteredmovIMDB[0].Year}
                    /> 
                    :
                    <MediaInfo
                    mediaImage={"https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"}
                    mediaTitle={movName}
                    
                    /> 
                    
                  }  
                    <div className='song-cont'> 
                    <h3 className='songs-label'>Songs from <br/> {movName}</h3>
                     <SongCard songResults = {songResults}/>
                    </div>
              </div>
            )
          }
        </div>
      );
  
  }
}
function mapStateToProps (state){
  return {
          resultsReducer: state.resultsReducer
      }
    }
export default connect(mapStateToProps, {getMovies,getMovieImdb,getMovieSongs})(Movie);

