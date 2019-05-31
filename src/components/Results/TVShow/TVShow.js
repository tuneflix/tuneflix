import React, { useState, useEffect } from "react";
import "./tvshow.scss";
import Header from "../../Shared/Header/Header";
import { connect } from "react-redux";
import {
  getTvShows,
  getTvShowInfo,
  getTvShowSeason,
  getTvShowEpisodeSongs,
  getTvShowImdb
} from "../../../ducks/resultsReducer";
import MediaInfo from "../../Shared/MediaInfo/MediaInfo";
import SongCard from "../../Shared/SongCard/SongCard";
import "../../../app.scss";

function TVShow(props) {
  const [currSeason, setCurrSeason] = useState(1);
  const [currEpisode, setCurrEpisode] = useState("");
  const [displayEpiSongs, setDisplayEpiSongs] = useState(false);
  const { tvShowName, tvShowID } = props.match.params;
  const { tvShowSeasons, tvShowEpisodes, songResults } = props.results;

  useEffect(() => {
    props.getTvShowImdb(tvShowID);
    props.getTvShowInfo(tvShowID);
    props.getTvShowSeason(tvShowID, currSeason);
    console.log(props.results.image);
  }, []);

  let seasonTabs = tvShowSeasons.map((season, i) => {
    return (
      <button
        className="tab"
        style={{
          background:
            season.season_number === currSeason ? "#0d0d0d" : "#f25757"
        }}
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
          setCurrEpisode(`Episode ${episode.episode_number}: ${episode.name}`);
        }}
      >
        {episode.episode_number}. {episode.name}
      </li>
    );
  });

  return (
    <div className="wrapper">
      <Header />
      {props.results.imdbLoading ? (
        <h1>Loading!!!</h1>
      ) : (
        <div className="tvshow-wrapper">
          <MediaInfo
            mediaImage={props.results.tvShowIMDB[0].Poster}
            mediaTitle={props.results.tvShowIMDB[0].Title}
            mediaYear={props.results.tvShowIMDB[0].Year}
          />
          <div className="tvshow-info-cont">
            <div className="tab-cont">{seasonTabs}</div>
            {displayEpiSongs ? (
              <>
                <h3 className="info-in-view">Songs in {currEpisode}</h3>
                <SongCard songResults={songResults} />
              </>
            ) : tvShowEpisodes.length > 0 ? (
              <>
                <h3 className="info-in-view">Episodes</h3>
                <ul>{episodes}</ul>
              </>
            ) : (
              <h3 className="info-in-view">
                No episodes to show bc TuneFind API suuuuucks
              </h3>
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
    getTvShowImdb
  }
)(TVShow);
