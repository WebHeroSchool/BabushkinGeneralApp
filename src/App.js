import logo from './logo.svg';
import './App.css';

const someWord = "I realy like how JSX works!";
const truth = true;
const situation = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{color: 'yellow'}}>
          Hello world!
        </p>
        <p>
          {someWord}
        </p>
        <p>
          {23}    
        </p>
        <p>
          {23+50}    
        </p>
        <p>
          {truth&&"Okey, this is turth!"}    
        </p>
        <p>
          {situation ? "This is turth!":"This one can be false;("}    
        </p>
        <p>
          undefined: {undefined}, null: {null}, false: {false}, true: {true}
        </p>
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