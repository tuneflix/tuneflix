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
      auddSong: []
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
        "X-RapidAPI-Key": process.env.REACT_APP_AUDD_KEY
      },
      data: formData
    }).then(response => {
      console.log(response.data.result);

      response.data.result === null
        ? this.setState({
            noResult: true
          })
        : this.setState({
            auddSong: response.data.result,
            resReceived: true
          });

      axios
        .get(`/api/search/artist/${response.data.result.artist}`)
        .then(res => {
          console.log(res.data.results[0]);

          axios
            .get(`/api/artist/${res.data.results[0].id}`)
            .then(res => {
              console.log(res);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    });
  };

  render() {
    console.log(process.env.REACT_APP_AUDD_KEY);
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
          <button onClick={this.startRecording} type="button">
            Record
          </button>
        </div>
        {this.state.resReceived ? (
          <div className="auddResult">
            <h3>Title : {this.state.auddSong.title}</h3>
            <h3>Artist: {this.state.auddSong.artist}</h3>
            <h3>Album : {this.state.auddSong.album}</h3>
            <h3>Relase Date : {this.state.auddSong.release_date}</h3>
          </div>
        ) : this.state.noResult ? (
          <p>No result found</p>
        ) : null}
      </div>
    );
  }
}
