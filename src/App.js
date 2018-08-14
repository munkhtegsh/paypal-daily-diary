import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './routes';

class App extends Component {
  constructor() {
    super();
    this.state = {      
        search: ''              
    }        
  } 

  searchInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar searchInput={(e) => this.searchInput(e)}
                search={this.state.search}
        />
        <Routes /> 
      </div>
    );
  }
}

export default App;
