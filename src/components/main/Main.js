import React from 'react';
import styled from 'styled-components';
import Diary from './Diary';
import CalendarComponent from './CalendarComponent';

const Container = styled.div`
  background: green;
  width: 100%;
`
export default () => {
  return (
    <Container>
      <Diary />
      <CalendarComponent />
    </Container>
  )
}