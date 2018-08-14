import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import SearchList from './components/main/searchList/SearchList';
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
        {
          !!this.state.search
          ?
          <SearchList />
          :
          <Routes /> 
        }
      </div>
    );
  }
}

export default App;
