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
  }, []);

  let seasonTabs = tvShowSeasons.map((season, i) => {
    return (
      <button
        id={`tab${i}`}
        className="tab"
        style={{
          background:
            season.season_number === currSeason ? "#f25757" : "#658c8c"
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
        id={`episode${i}`}
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

  console.log(seasonTabs, episodes);

  return (
    <div className="wrapper">
      <Header />
      {props.results.imdbLoading ? (
        <h1 className="loading">Loading!!!</h1>
      ) : (
        <div className="tvshow-wrapper">
          {props.results.tvShowIMDB.length > 0 ? (
            <MediaInfo
              mediaImage={props.results.tvShowIMDB[0].Poster}
              mediaTitle={props.results.tvShowIMDB[0].Title}
              mediaYear={props.results.tvShowIMDB[0].Year}
            />
          ) : (
            <MediaInfo
              mediaImage={
                "https://upload.wikimedia.org/wikipedia/en/d/d1/Image_not_available.png"
              }
              mediaTitle={tvShowName}
              // mediaYear={props.results.tvShowIMDB[0].Year}
            />
          )}
          <div className="tvshow-info-cont">
            <div className="tab-cont">{seasonTabs}</div>
            {displayEpiSongs ? (
              <div className="song-cards-cont">
                <h3 className="info-in-view">Songs in {currEpisode}</h3>
                <SongCard songResults={songResults} />
              </div>
            ) : tvShowEpisodes.length > 0 ? (
              <div className="song-cards-cont">
                <h3 className="info-in-view">
                  Episodes in Season {currSeason}
                </h3>
                <ul>{episodes}</ul>
              </div>
            ) : (
              <h3 className="info-in-view">
                Due to limited trial data - no episodes available at this time,
                please try the latest season...
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
