class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      volume: 85,
      bank: false,
      drumPad: [
        { id: 'Q', src1: 'audio/bd_kick/bd_909dwsd.wav' },
        { id: 'W', src1: 'audio/bd_kick/bd_chicago.wav' },
        { id: 'E', src1: 'audio/clap/clp_analogue.wav' },
        { id: 'A', src1: 'audio/hats/hat_626.wav' },
        { id: 'S', src1: 'audio/percussion/prc_808rimmer.wav' },
        { id: 'D', src1: 'audio/ride_cymbal/cym_crashtest.wav' },
        { id: 'Z', src1: 'audio/shaker_tambourine/shaker_bot.wav' },
        { id: 'X', src1: 'audio/snare/snr_analogging.wav' },
        { id: 'C', src1: 'audio/toms/tom_909fatty.wav' }
      ]
    }
  }

  playDrum = (id) => {
    if (this.state.power) {
      document.getElementById(id).volume = this.state.volume / 100;
      document.getElementById(id).play();
      this.setState({display: this.state.drumPad.filter(element => element.id == id)[0].src1});
    }
  }ƒ

  handleKeyDown = (event) => {
    // Parse key down
    if (RegExp(/Key[QWEASDZXC]/).test(event.code)) {
      this.playDrum(event.code.charAt(event.code.length - 1))
    }
  }

  powerToggle = () => this.setState({ power: !this.state.power });
  volumeChange = (event) => this.setState({ volume: event.target.value });
  componentDidMount = () => document.addEventListener("keydown", this.handleKeyDown, false);

  render() {
    return (
      <div className="App container-fluid">
        <div id="drum-machine" className="card d-flex flex-sm-row p-3 shadow">
          <Pad play={this.playDrum.bind(this)} drumpad={this.state.drumPad} />
          <Controls power={this.state.power} powertoggle={this.powerToggle.bind(this)} volume={this.state.volume} volumechange={this.volumeChange.bind(this)} display={this.state.display} />
        </div>
      </div>
    );
  }
}

class Pad extends React.Component {
  handleClick = (id) => this.props.play(id);

  render() {
    // Building Pad
    let buildPad = this.props.drumpad.map(item => {
      return (
        <button key={item.id} className="drum-pad btn btn-light btn-lg bg-secondary text-white" onClick={this.handleClick.bind(this, item.id)}>
          <audio id={item.id} src={item.src1}></audio>{item.id}
        </button>)
    });

    return (
      <div className="pad m-3">
        {buildPad}
      </div>
    );
  }
}

class Controls extends React.Component {
  handlePowerChange = () => this.props.powertoggle();
  handleVolumeChange = (event) => this.props.volumechange(event);

  render() {
    return (
      <div className="controls d-flex flex-column justify-content-around align-items-center m-3">
        <div className="custom-control custom-switch">
          <input id="power" type="checkbox" className="custom-control-input" checked={this.props.power} onChange={this.handlePowerChange.bind(this)}></input>
          <label htmlFor="power" className="custom-control-label">Power</label>
        </div>
        <div className="form-group">
          <input id="display" type="text" readOnly className="form-control-plaintext bg-secondary text-white" value={this.props.display}></input>
        </div>
        <div className="form-group">
          <input type="range" className="form-control-range" id="volume" min="0" max="100" value={this.props.volume} onChange={this.handleVolumeChange.bind(this)}></input>
        </div>
        <div className="custom-control custom-switch">
          <input id="bank" type="checkbox" className="custom-control-input"></input>
          <label htmlFor="bank" className="custom-control-label" active={"true"}>Bank</label>
        </div>
      </div>
    );
  }
}

// Render Application in html page
ReactDOM.render(<App />, document.querySelector("#root"));
