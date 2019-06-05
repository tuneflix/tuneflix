import React from 'react';
import axios from "axios"
import { ReactMic } from 'react-mic';
import "./Audd.scss"



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      recordedBlob: null,
      file: null,
      resReceived: false,
      auddSong: []
    }

  }
  handleFileUpload = (e) => {
    this.setState({ file: e.target.files });
    setTimeout(this.sendMusic, 2000)
  }

  sendMusic = () => {
    const formData = new FormData();
    formData.append('file', this.state.file[0]);

    axios({
      method: "POST",
      url: "https://audd.p.rapidapi.com",
      headers: {
        "X-RapidAPI-Host": "audd.p.rapidapi.com",
        "X-RapidAPI-Key": "d772e50aaemsh2fd2a2482f3c99fp1e2349jsn501b72a30639",
      },
      data: formData
    }).then(response => {

      this.setState({
        auddSong: response.data.result,
        resReceived:true

      })
    })

  }

  startRecording = () => {
    this.setState({
      record: true,
    });
    setTimeout(this.stopRecording, 8000)
  }

  stopRecording = () => {
    this.setState({
      record: false
    });
  }

  onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
    this.setState({
      recordedBlob: recordedBlob.blobURL
    })

  }

  onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    this.setState({
      recordedBlob: recordedBlob.blobURL
    })

  }

  render() {
    console.log(this.state.file);
    console.log(this.state.auddSong)
    return (
      <div className="body-audd">
        <ReactMic
          record={this.state.record}
          className="sound-wave"
          onStop={this.onStop}
          onData={this.onData}
          strokeColor="#000000"
          backgroundColor="#ffffff" />
        <div className="buttonAndAudio">
          <audio controls src={this.state.recordedBlob} />
          <button onClick={this.startRecording} type="button">Start</button>
        </div>
        <input type="file" name="myFile" onChange={this.handleFileUpload} ></input>

        {this.state.resReceived ? 
            <div style={{color: "white"}}>
            <h3>Album : {this.state.auddSong.album}</h3>
            <h3>Artist: {this.state.auddSong.artist}</h3>
            <h3>Relase Date : {this.state.auddSong.release_date}</h3>
            <h3>Title : {this.state.auddSong.title}</h3>
            </div>
          : null}
       
      </div>
    );
  }
}