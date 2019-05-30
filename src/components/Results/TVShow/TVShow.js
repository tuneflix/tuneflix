import React, { useState, useEffect } from "react";
import "./tvshow.scss";
import Header from "../../Shared/Header/Header";
import { connect } from "react-redux";
import {
  getTvShows,
  getTvShowInfo,
  getTvShowSeason,
  getTvShowEpisodeSongs,
  getImage
} from "../../../ducks/resultsReducer";
import MediaInfo from "../../Shared/MediaInfo/MediaInfo";
import axios from "axios";
import SongCard from "../../Shared/SongCard/SongCard";

function TVShow(props) {
  const [currSeason, setCurrSeason] = useState(1);
  const [displayEpiSongs, setDisplayEpiSongs] = useState(false);
  const { tvShowName, tvShowID } = props.match.params;
  const { tvShowSeasons, tvShowEpisodes, songResults } = props.results;

  useEffect(() => {
    props.getImage(tvShowName);
    props.getTvShowInfo(tvShowID);
    props.getTvShowSeason(tvShowID, currSeason);
    console.log(props);
  }, []);

  let seasonTabs = tvShowSeasons.map((season, i) => {
    return (
      <button
        className="tab"
        key={i}
        onClick={() => {
          setCurrSeason(season.season_number);
          props.getTvShowSeason(tvShowID, season.season_number);
          setDisplayEpiSongs(false);
        }}
      >
        Season {season.season_number}
      </button>
    );
  });

  console.log(tvShowEpisodes, songResults);
  let episodes = tvShowEpisodes.map((episode, i) => {
    return (
      <li
        className="episode"
        key={i}
        onClick={() => {
          props.getTvShowEpisodeSongs(
            episode.show_id,
            episode.season_number,
            episode.id
          );
          setDisplayEpiSongs(!displayEpiSongs);
        }}
      >
        {episode.name}
      </li>
    );
  });

  // let songCards = songResults.map((song, i) => {
  //   return <p key={i}>{song.name}</p>;
  // });

  return (
    <div className="wrapper">
      {console.log(props.results)}
      <Header />
      {props.results.imdbLoading ? (
        <h1>Loading!!!</h1>
      ) : (
        <div className="tvshow-wrapper">
          <MediaInfo
            mediaImage={props.results.image[0].Poster}
            mediaTitle={props.results.image[0].Title}
            mediaYear={props.results.image[0].Year}
          />
          <div className="tvshow-info-cont">
            <div className="tab-cont">{seasonTabs}</div>
            {displayEpiSongs ? (
              <SongCard songResults={songResults} />
            ) : (
              <ul>{episodes}</ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    results: state.resultsReducer
  };
};
export default connect(
  mapStateToProps,
  {
    getTvShows,
    getTvShowInfo,
    getTvShowSeason,
    getTvShowEpisodeSongs,
    getImage
  }
)(TVShow);
