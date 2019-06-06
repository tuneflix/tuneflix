import "./SongCard.scss";
import React from "react";

function SongCard(props) {
  console.log(props.songResults);
  let songCards = props.songResults.map((song, i) => {
    return (
      <div key={i} className="card" id={`song-card${i}`}>
        <h2>{song.name.length < 68 ? `${song.name}` : `${song.name.substring(0,65)}...` }</h2> <br />
        <h4>{song.artist.name}</h4>
        <div className="icon-cont">
          {song.stores.map((e, i) => {
            if (e.id === "applemusic-tunefind") {
              return (
                <a href={e.url} target="_blank" key={i} className= "apple-music-icon" id ={`appleMusic${i}`}>
                  <img src="https://image.flaticon.com/icons/svg/33/33970.svg" />
                </a>
              );
            }
            else if (e.id === "amazon-tunefind") {
              return (
                <a href={e.url} target="_blank" key={i} id ={`amazonMusic${i}`}>
                  <img src="https://image.flaticon.com/icons/svg/142/142388.svg" />
                </a>
              );
            } else if (e.id === "spotify-tunefind") {
              return (
                <a href={e.url} target="_blank" key={i}>
                  <img src="https://image.flaticon.com/icons/svg/8/8710.svg" />
                </a>
              );
            }
          })}
        </div>
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
