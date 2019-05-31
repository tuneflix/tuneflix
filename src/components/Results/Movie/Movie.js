import React from "react";
import { connect } from "react-redux"
import { getImage, getTvShows, getMovies, getMovieSongs } from "../../../ducks/resultsReducer"
import SongCard from '../../Shared/SongCard/SongCard'
import Header from '../../Shared/Header/Header'
import MediaInfo from "../../Shared/MediaInfo/MediaInfo"
import "./movie.scss"


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
      this.props.getImage(movID);
    } else {
      let movIDWithoutYear = movID.substring(0, lenghtofmovID - 5);
      this.props.getImage(movIDWithoutYear)

    }
  }


  render() {
    const { movResults, image, songResults, imdbLoading } = this.props.resultsReducer
    const movName = this.props.match.params.movName
    
    // if(image.length > 0){
    //   const movID = this.props.match.params.movID
    //   let year = movID.substring(movID.length - 4);
    //   let index = image.findIndex(e => year == e.Year) 
    // }

    
    console.log(songResults)
    console.log(image)
    return (
        <div className="movie-body" >
          <Header />
          {imdbLoading ? (
            <h1>Loading!!!</h1>
          ) : (
              <div className = "movie-media-info">
                  {image.length > 0 ?
                    <MediaInfo
                    mediaImage={image[0].Poster}
                    mediaTitle={image[0].Title}
                    mediaYear={image[0].Year}
                    /> 
                    :
                    <MediaInfo
                    mediaImage={"https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"}
                    mediaTitle={movName}
                    
                    /> 
                    
                  }
                     <SongCard songResults = {songResults}/>
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
export default connect(mapStateToProps, {getMovies,getImage,getMovieSongs})(Movie);

// module.exports ={
//   getMovieSongs,
//   getImage
// }
