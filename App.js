class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <DrumBox/>
      </div>
    );
  }
}

class DrumBox extends React.Component {
  render() {
    return (
      <div className="card w-50 mt-5 shadow bg-primary text-white">
        <div className="card-header d-flex justify-content-between align-items-center shadow">
          Editor<i className="fas fa-expand-arrows-alt"></i>
        </div>
      </div>
    );
  }
}

// Render Application in html page
ReactDOM.render(<App />, document.querySelector("#root"));
