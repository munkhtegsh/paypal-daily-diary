import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes /> 
      </div>
    );
  }
}

export default App;
