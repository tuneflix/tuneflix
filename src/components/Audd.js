import React from "react";
import axios from "axios";
import { ReactMic } from "react-mic";
import "./Audd.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      recordedBlob: null,
      resReceived: false,
      noResult: false,
      auddSong: [],
      auddSongLinks: []
    };
  }

  startRecording = () => {
    this.setState({
      record: true
    });
    setTimeout(this.stopRecording, 8000);
  };

  stopRecording = () => {
    this.setState({
      record: false
    });
  };

  onData = recordedBlob => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  onStop = recordedBlob => {
    console.log("recordedBlob is: ", recordedBlob);

    const formData = new FormData();
    formData.append("file", recordedBlob.blob);

    axios({
      method: "POST",
      url: "https://audd.p.rapidapi.com",
      headers: {
        "X-RapidAPI-Host": "audd.p.rapidapi.com",
        "X-RapidAPI-Key": "d772e50aaemsh2fd2a2482f3c99fp1e2349jsn501b72a30639"
      },
      data: formData
    }).then(response => {
      let mainResult = response.data.result;
      console.log(mainResult);

      if (mainResult === null) {
        this.setState({ noResult: true });
      } else {
        this.setState({
          auddSong: mainResult,
          resReceived: true
        });
        axios
          .get(`/api/search/artist/${mainResult.artist}`)
          .then(res => {
            console.log(res.data.results[0]);

            axios
              .get(`/api/artist/${res.data.results[0].id}`)
              .then(res => {
                console.log(res);
                console.log(mainResult.title);

                let songElement = res.data.songs.find(song => {
                  return (
                    song.name.toLowerCase() == mainResult.title.toLowerCase()
                  );
                });

                this.setState({ auddSongLinks: [...songElement.stores] });

                console.log(songElement);
              })
              .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
      }
    });
  };

  render() {
    // console.log(process.env.REACT_APP_AUDD_KEY);
    let viewLinks = this.state.auddSongLinks.map((link, i) => {
      if (link.id === "applemusic-tunefind") {
        return (
          <a
            href={link.url}
            target="_blank"
            key={i}
            className="apple-music-icon"
            id={`appleMusic${i}`}
          >
            <img src="https://image.flaticon.com/icons/svg/33/33970.svg" />
          </a>
        );
      } else if (link.id === "amazon-tunefind") {
        return (
          <a href={link.url} target="_blank" key={i} id={`amazonMusic${i}`}>
            <img src="https://image.flaticon.com/icons/svg/142/142388.svg" />
          </a>
        );
      } else if (link.id === "spotify-tunefind") {
        return (
          <a href={link.url} target="_blank" key={i}>
            <img src="https://image.flaticon.com/icons/svg/8/8710.svg" />
          </a>
        );
      }
    });
    console.log(viewLinks);
    return (
      <div className="body-audd">
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="black"
          backgroundColor="#f25757"
        />

        <div className="buttonAndAudio">
          <p>Record and identify a song you're listening to right now!</p>
          <div className="button-cont">
            <button onClick={this.startRecording} type="button">
              Record
            </button>
            {this.state.record ? (
              <i className="material-icons"> fiber_manual_record</i>
            ) : null}
          </div>
        </div>
        {this.state.resReceived ? (
          <div className="auddResult">
            <h3>Title : {this.state.auddSong.title}</h3>
            <h3>Artist: {this.state.auddSong.artist}</h3>
            <h3>Album : {this.state.auddSong.album}</h3>
            <h3>Relase Date : {this.state.auddSong.release_date}</h3>
            <div>{viewLinks}</div>
          </div>
        ) : this.state.noResult ? (
          <p>No result found</p>
        ) : null}
      </div>
    );
  }
}
