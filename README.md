# Sound... in *React*

#### Yeah that's right I figured it out it only took like 3 hours

It's all in *Tv.js*
Why is it called *Tv.js* don't worry about it

### Gotta import those files
```
Import Soundfile from './car.mp3';
Import Sound from 'react-sound';

```

Then that damn sound component looks something a lil like this
```
<Sound
  url = {Soundfile}
  playStatus = {this.state.playStatus}
  onLoading={this.handleSongLoading}
  onPlaying={this.handleSongPlaying}
  onFinishedPlaying={this.handleSongFinishedPlaying}
/>
```

Up at the top you gotta set that state (still don't really know what a state is)
```
this.state = {playStatus: Sound.status.PAUSED};
```

Then down on the button you have an onClick function and in the function run one of them if statements to see if the sound is playing or not

Set the state to playing and that sweet music should be flowin
