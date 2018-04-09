import * as React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import AppLayout from './components/AppLayout'

// const logo = require('./logo.svg')

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppLayout/>
      </div>
    );
  }
}

export default App;
