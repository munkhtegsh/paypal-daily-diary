import React, {Component} from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';

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

const Text = styled.p`

`
class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    }
  }

  toggleEdit() {
    this.setState({edit: !this.state.edit});
  }
  
  render() {
    let diaryID = this.props.match.params.id; 
    let diary = this.props.list.map((item) => {
      if (+diaryID === +item.id) {
        return (
          (
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

export default connect(mapStateToProps)(Diary);