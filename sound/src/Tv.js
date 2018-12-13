import React, { Component } from 'react';
import Soundfile from './car.mp3';
import Sound from 'react-sound';

export default class SoundBite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {playStatus: Sound.status.PAUSED};
    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    if (this.state.playStatus !== "PLAYING") {
      this.setState({
        playStatus: Sound.status.PLAYING
      });
    } else {
      this.setState({
        playStatus: Sound.status.STOPPED
      });
    }
  }

  render() {
    return (
      <button onClick = {this.onClick}> Vroom vroom
        <Sound
          url = {Soundfile}
          playStatus = {this.state.playStatus}
          onLoading={this.handleSongLoading}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      </button>
    );
  }
}
