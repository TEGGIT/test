import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <h1>Edit from <span style={{color: 'brown'}}>feature</span> branch</h1>
          <h2>Edit from <span style={{color: 'tomato'}}>develop</span> branch</h2>
        <Header/>
      </header>
    </div>
  );
}

export default App;
