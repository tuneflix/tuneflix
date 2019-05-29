import React from "react";
import "./media-info.scss";

function MediaInfo(props) {
  return (
    <div className="media-info-cont">
      <img
        // src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg"
        src={props.mediaImage}
        alt="media img"
      />
      <ul>
        <li id="media-name">{props.mediaTitle}</li>
        <li id="media-dates">{props.mediaYear}</li>
      </ul>
    </div>
  );
}

export default MediaInfo;
