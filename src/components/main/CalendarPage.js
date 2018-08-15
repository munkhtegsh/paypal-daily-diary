import React, {Component} from 'react';
import styled from 'styled-components';
import Calendar from 'rc-calendar';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'rc-calendar/assets/index.css';
import moment from 'moment';
import 'moment/locale/en-gb';
import axios from 'axios';

const format = 'YYYY-MM-DD';
const now = moment();

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  float: right;
`

class CalendarPage extends Component {
  constructor() {
    super();
    this.state = {
      date: '',
      today: moment().format("YYYY-MM-DD")
    }
  }

  getPages() {
    return axios.get('/api/v1/pages').then(res => {
      console.log(res.data)
    })
  }

  datePick(date) {
    let today = date.format('YYYY-MM-DD');
    this.setState({date: today});
    // this.getPages();
  }

  render() {
    console.log(this.state.date)
    return (
      <Container>
        <Calendar 
         locale={enUS}
          defaultValue={now}
          showToday
          formatter={format}
          showOk={false}
          onChange={(e) => this.datePick(e)}
        />
      </Container>
    )
  }
}

export default CalendarPage;