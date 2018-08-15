import React from 'react';
import styled from 'styled-components';
import Diary from './Diary';
import CalendarPage from './CalendarPage';

const Container = styled.div`
  background: green;
  width: 100%;
`
export default () => {
  return (
    <Container>
      <Diary />
      <CalendarPage />
    </Container>
  )
}