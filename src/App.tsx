import * as React from 'react';
import './App.css';

import MaInput from './components/Input/Input';
import Hello from './components/Hello'

const logo = require('./logo.svg')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
            <MaInput value={123}/>
            <Hello name="Typescript" enthusiasmLevel={10}/>
        </p>
      </div>
    );
  }
}

export default App;
