class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <DrumBox />
      </div>
    );
  }
}

class DrumBox extends React.Component {
  render() {
    return (
      <div id="drum-machine" className="card d-flex flex-sm-row p-3 shadow">
        <div className="pad m-3">
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">Q</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">W</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">E</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">A</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">S</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">D</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">Z</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">X</button>
          <button className="drum-pad btn btn-light btn-lg bg-secondary text-white">C</button>
        </div>
        <div className="controls d-flex flex-column justify-content-around align-items-center m-3">
          <div class="custom-control custom-switch">
            <input id="power" type="checkbox" className="custom-control-input"></input>
            <label for="power" class="custom-control-label">Power</label>
          </div>
          <div class="form-group">
            <input id="display" type="text" readonly className="form-control-plaintext bg-secondary text-white" value=""></input>
          </div>
          <div class="form-group">
            <input type="range" class="form-control-range" id="volume"></input>
          </div>
          <div class="custom-control custom-switch">
            <input id="bank" type="checkbox" className="custom-control-input"></input>
            <label for="bank" class="custom-control-label">Bank</label>
          </div>
        </div>
      </div>
    );
  }
}

// Render Application in html page
ReactDOM.render(<App />, document.querySelector("#root"));
