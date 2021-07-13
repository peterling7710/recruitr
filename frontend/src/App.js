import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <piperecorder id="custom-id" pipe-width="640" pipe-height="390" pipe-qualityurl="avq/360p.xml" pipe-accounthash="509c48204261dafad07b6d1b66904a5c" pipe-eid="L0vJA7" pipe-mrt="120"></piperecorder>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>My Token = {window.token}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
