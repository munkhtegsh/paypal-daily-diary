import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 70%;
  padding: 1rem;
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

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
`


export default () => {
  return (
    <Container>
      <Top>
        <Title>Title</Title>
        <DateInfo>date</DateInfo>
      </Top>

      <Text>paragraph</Text>
      <Button>Edit</Button> 
    </Container>
  )
}