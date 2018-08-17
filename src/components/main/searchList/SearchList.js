import React, {Component} from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import {getTitles, getTodayList} from '../../../ducks/reducer';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css';

const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 70%;
  padding: 1rem;
  float: left;
  box-sizing: border-box;
  box-shadow: 0 1px 5px #ccc;
`

class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todayBtnCliked: false
    }
  }

  getTodayList() {
    this.props.getTodayList();
    this.toggleToday();
  }

  getTitles() {
    this.props.getTitles();
    this.toggleToday();
  }

  toggleToday() {
    this.setState({todayBtnCliked: !this.state.todayBtnCliked});
  }
  
  render() {
    const list = this.props.list.map((title, i) => 
    <Link to={`/api/v1/pages/${title.id}`} key={i}>
      <Item title={title.title} date={title.date}/>
    </Link>
    )
    return (
      <Container>
        Search Result: 
        {list}
        <Link to='/api/pages'>
        <Button type="primary" 
          style={{position: "absolute", bottom: '1rem', right: '1rem'}}>
          Add
        </Button>
      </Link>
      {
        this.state.todayBtnCliked
        ?
        <Button type="primary" 
          onClick={() => this.getTitles()}
          style={{position: "absolute", bottom: '1rem', left: '1rem'}}>
          All
        </Button>
        :
        <Link to='/api/pages/today'>
          <Button type="primary" 
            onClick={() => this.getTodayList()}
            style={{position: "absolute", bottom: '1rem', left: '1rem'}}>
            Today
          </Button>
        </Link>

      
      }

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, {getTitles, getTodayList})(SearchList);

