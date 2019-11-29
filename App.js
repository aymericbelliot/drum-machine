class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: "",
      volume: "85%",
      bank: false
    }
  }

  clickAction(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="App container-fluid">
        <div id="drum-machine" className="card d-flex flex-sm-row p-3 shadow">
          <Pad click={this.clickAction.bind(this)} />
          <Controls />
        </div>
      </div>
    );
  }
}

class Pad extends React.Component {
  handleClick(id) {
    this.props.click(id);
  }

  render() {
    // Define drumpad
    const drumPad = [
      { id: 'Q', src1: 'audio/bd_kick/bd_909dwsd.wav' },
      { id: 'W', src1: 'audio/bd_kick/bd_chicago.wav' },
      { id: 'E', src1: 'audio/clap/clp_analogue.wav' },
      { id: 'A', src1: 'audio/hats/hat_626.wav' },
      { id: 'S', src1: 'audio/percussion/prc_808rimmer.wav' },
      { id: 'D', src1: 'audio/ride_cymbal/cym_crashtest.wav' },
      { id: 'Z', src1: 'audio/shaker_tambourine/shaker_bot.wav' },
      { id: 'X', src1: 'audio/snare/snr_analogging.wav' },
      { id: 'C', src1: 'audio/toms/tom_909fatty.wav' }
    ];

    // Building Pad from drum const
    let pad = drumPad.map(item => {
      return (
        <button key={item.id} className="drum-pad btn btn-light btn-lg bg-secondary text-white" onClick={this.handleClick.bind(this, item.id)}>
          <audio id={item.id} src={item.src1}></audio>{item.id}
        </button>)
    });

    return (
      <div className="pad m-3">
        {pad}
      </div>
    );
  }
}

class Controls extends React.Component {
  render() {
    return (
      <div className="controls d-flex flex-column justify-content-around align-items-center m-3">
        <div className="custom-control custom-switch">
          <input id="power" type="checkbox" className="custom-control-input"></input>
          <label htmlFor="power" className="custom-control-label">Power</label>
        </div>
        <div className="form-group">
          <input id="display" type="text" readOnly className="form-control-plaintext bg-secondary text-white" value=""></input>
        </div>
        <div className="form-group">
          <input type="range" className="form-control-range" id="volume"></input>
        </div>
        <div className="custom-control custom-switch">
          <input id="bank" type="checkbox" className="custom-control-input"></input>
          <label htmlFor="bank" className="custom-control-label">Bank</label>
        </div>
      </div>
    );
  }
}

// Render Application in html page
ReactDOM.render(<App />, document.querySelector("#root"));
