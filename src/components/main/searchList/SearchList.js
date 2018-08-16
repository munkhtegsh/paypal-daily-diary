import React, {Component} from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import {getTitles} from '../../../ducks/reducer';
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
  }
  componentDidMount() {
    this.props.getTitles();
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
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, {getTitles})(SearchList);

