import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let MyWorker = require("worker!./worker.js");
class App extends Component {
  componentWillMount() {
      this.worker = new MyWorker();
  }
  render() {
    this.worker.onmessage = (m) => this.setState({data: m.data})
    let data;
    if (this.state) {
      data = this.state.data;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {data} <br />
        <button onClick={() => this.worker.postMessage(null)} > Up </button>
        </p>
      </div>
    );
  }
}
export default App;
