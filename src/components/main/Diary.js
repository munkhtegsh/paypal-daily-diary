import React, {Component} from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';
import {getTitles} from '../../ducks/reducer';
import axios from 'axios';
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

const Note = styled.textarea`
  width: 100%;
  height: 65%;
  border: none;
  box-shadow: 0 0.1px 5px #ccc;
`
const TitleEdit = styled.textarea`
  width: 40%;
  border: none;
  box-shadow: 0 0.1px 5px #ccc;
  margin-bottom: 1rem;
`

const DateInfo = styled.h5`
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.p`

`
class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: '',
      text: '',
    }
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }

  // Coming back again!
  editDiary(e, id) {
    this.props.list.map((item, i) => {
      if (id === item.id) {
        item[e.target.name] = e.target.value;
      }
      return item;
      })

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateList() {
    axios.put('/api/pages/:id', {text: this.state.text, title: this.state.title})
      .then(res => {
        // this.props.getTitles();
        this.toggleEdit();
      })
  }

  render() {
    let diaryID = this.props.match.params.id; 
    let diary = this.props.list.map((item) => {
      if (+diaryID === +item.id) {
        return (
            this.state.edit
            ?
            <Container key={item.id}>
            <Top>
              <TitleEdit 
                name="title"
                value={item.title}
                onChange={(e) => this.editDiary(e, item.id)}>{this.state.title}</TitleEdit>
              <DateInfo>{item.date}</DateInfo>
            </Top>
       
            <Note 
                value={item.text}
                name="text"
                onChange={(e) => this.editDiary(e, item.id)}>{this.state.state}</Note>
            <Button type="primary" 
                style={{position: "absolute", bottom: '1rem', right: '1rem'}}
                onClick={e => this.updateList(e)}>
                Save
            </Button>
            </Container>
            :
            <Container key={item.id}>
            <Top>
              <Title>{item.title}</Title>
              <DateInfo>{item.date}</DateInfo>
            </Top>
      
            <Text>{item.text}</Text>
            <Button type="primary" 
                    style={{position: "absolute", bottom: '1rem', right: '1rem'}}
                    onClick={e => this.toggleEdit(e)}>
                    Edit
            </Button>
            </Container>
          )
        } 
      }
    )
    return (
      <div>
        {diary}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps, {getTitles})(Diary);