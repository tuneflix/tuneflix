import "./SongCard.scss";
import React from "react";

function SongCard(props) {
  console.log(props.songResults);
  let songCards = props.songResults.map((song, i) => {
    return (
      <div className="card">
        <h2>
          {/* <i className="material-icons">music_note</i> */}
          {song.name}
        </h2>{" "}
        <br />
        <h4>{song.artist.name}</h4>
      </div>
    );
  });

  return (
    <div id="SongCardBody">
      <div className="cards">{songCards}</div>
    </div>
  );
}

export default SongCard;
