import React, { Component } from 'react';
import Sound from 'react-sound';
import Soundfile from './car.mp3';
import SoundBite from './Tv.js';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SoundBite />


        </header>
      </div>
    );
  }
}

export default App;
