import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import SearchList from './components/main/searchList/SearchList';
import Routes from './routes';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();
    this.state = {      
      search: '',
      list: []
    }        
  } 

  searchInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    return axios.get('/api/v1/pages')
      .then(res =>  this.setState({list: res.data}))
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
          <SearchList list={this.state.list}/>
          :
          <Routes /> 
        }
      </div>
    );
  }
}

export default App;
