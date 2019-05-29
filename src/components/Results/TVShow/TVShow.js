import React, { useState, useEffect } from "react";
import "./tvshow.scss";
import Header from "../../Shared/Header/Header";
import { connect } from "react-redux";
import {
  getTvShows,
  getTvShowInfo,
  getTvShowSeason,
  getTvShowEpisode,
  getImage
} from "../../../ducks/resultsReducer";
import MediaInfo from "../../Shared/MediaInfo/MediaInfo";
import axios from "axios";

function TVShow(props) {
  const [currSeason, setCurrSeason] = useState(2);
  const [displayEpiSongs, setDisplayEpiSongs] = useState(false);
  const { tvShowName, tvShowID } = props.match.params;
  const { tvShowSeasons, tvShowEpisodes } = props.results;

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

  console.log(tvShowEpisodes);
  let episodes = tvShowEpisodes.map((episode, i) => {
    return (
      <li
        key={i}
        onClick={() => {
          setDisplayEpiSongs(!displayEpiSongs);
        }}
      >
        {episode.episode_number}. {episode.name}
      </li>
    );
  });

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
            {displayEpiSongs ? <p>song cards</p> : <ul>{episodes}</ul>}
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
  { getTvShows, getTvShowInfo, getTvShowSeason, getTvShowEpisode, getImage }
)(TVShow);
