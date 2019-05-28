import React, { useEffect } from "react";
import "./tvshow.scss";
import Header from "../../Shared/Header/Header";
import { connect } from "react-redux";
import { getTvShows } from "../../../ducks/resultsReducer";
import axios from "axios";

function TVShow(props) {
  console.log(props);

  useEffect(() => {
    axios
      .get("/api/image")
      .then(res => console.log(res))
      .catch(err => console.log(err));

    // console.log("hit");
    // props.getTvShows("breaking bad").then(res => {
    //   console.log(res);
    // });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="tvshow-wrapper">
        <div className="tvshow-info-cont-a">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,718,1000_AL_.jpg"
            alt="tv show img"
          />
          <ul>
            <li id="tv-show-name">Breaking Bad</li>
            <li id="tv-show-dates">2008-2013</li>
          </ul>
        </div>
        <div className="tvshow-info-cont-b">
          <div className="tab-cont">
            <button className="tab">Season 1</button>
            <button className="tab">Season 2</button>
            <button className="tab">Season 3</button>
            <button className="tab">Season 4</button>
            <button className="tab">Season 5</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    results: state.results
  };
};
export default connect(
  mapStateToProps,
  { getTvShows }
)(TVShow);
