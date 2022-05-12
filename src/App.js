import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <h1>Edit from feature branch</h1>
          <h2>Edit from <span style={{color: 'tomato'}}>develop</span> branch</h2>
        <p>Hi</p>
      </header>
    </div>
  );
}

export default App;
