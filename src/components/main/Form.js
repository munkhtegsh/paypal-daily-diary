import React, {Component} from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {getTitles} from '../../ducks/reducer';

const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 70%;
  padding: 1rem;
  float: left;
  box-sizing: border-box;
  box-shadow: 0 1px 5px #ccc;
`

const Title = styled.h3`

`

const DateInfo = styled.h5`

`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleInput = styled.input`
  width: 40%;
  margin-bottom: 2rem;
`

const Note = styled.textarea`
  width: 100%;
  height: 65%;
  border: none;
  box-shadow: 0 0.1px 5px #ccc;
 `
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: moment().format('YYYY-MM-DD'),
      text: ''
    }
  }

  send() {
    axios.post('/api/pages', this.state);
    this.props.getTitles();
  }
  
  render() {
    return (
      <Container>
      <Top>
        <Title>Title: </Title>
        <DateInfo>{this.state.date}</DateInfo>
      </Top>
  
      <TitleInput onChange={(e) => this.setState({title: e.target.value})}/>
      <Title> Note: </Title>
      <Note autoFocus onChange={(e) => this.setState({text: e.target.value})}/>
      <Link to='/api/v1/pages'>
        <Button type="primary" 
                style={{position: "absolute", bottom: '1rem', right: '1rem'}}
                onClick={e => this.send(e)}>
                Create
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

export default connect(mapStateToProps, {getTitles})(Form);