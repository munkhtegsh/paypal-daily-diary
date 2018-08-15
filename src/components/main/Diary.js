import React from 'react';
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

// const Buttonn = styled.button`
//   position: absolute;
//   bottom: 0;
//   right: 0;
// `


export default () => {
  return (
    <Container>
      <Top>
        <Title>Title</Title>
        <DateInfo>date</DateInfo>
      </Top>

      <Text>paragraph</Text>
      <Button type="primary" 
              style={{  position: "absolute", bottom: '1rem', right: '1rem'}}>
              Edit
      </Button>
     </Container>
  )
}