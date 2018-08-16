import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Routes from './routes';
import './App.css';
import Calendar from './components/main/CalendarPage';
import {connect} from 'react-redux';
import {getTitles, getMatchList} from './ducks/reducer';
import {withRouter} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {      
      search: '',
    }        
  } 

  componentDidMount() {
    this.props.getTitles();
  }

  searchInput(e) {
    if (e.which === 13) {
      this.setState({searchInput: e.target.value}, () => {
        this.props.getMatchList(this.state.searchInput);
      })
    }
  }
  // this.setState({
  //   [e.target.name]: e.target.value
  // })

  render() {
    console.log(this.state.searchInput)
    return (
      <div className="App">
        <Navbar searchInput={(e) => this.searchInput(e)}
                search={this.state.search}
        />
        <Routes /> 
        <Calendar />

      </div>
    );
  }
}
const MyConnectedComponent = withRouter(connect(null, {getTitles, getMatchList})(App))

export default MyConnectedComponent;

// {
//   !!this.state.search
//   ?
//   <SearchList list={this.state.list}/>
//   :
//   <Routes /> 
// }