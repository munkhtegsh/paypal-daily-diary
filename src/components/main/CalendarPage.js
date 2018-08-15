import React, {Component} from 'react';
import styled from 'styled-components';
import Calendar from 'rc-calendar';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'rc-calendar/assets/index.css';
import moment from 'moment';
import 'moment/locale/en-gb';
import {connect} from 'react-redux';
import {getDate} from '../../ducks/reducer';

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
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      today: moment().format("YYYY-MM-DD")
    }
  }

  datePick(pickDate) {
    let date = pickDate.format('YYYY-MM-DD');
    this.setState({date}, () => {
      this.props.getDate(this.state.date);
    });
   
  }

  render() {
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

const maptStateToProps = (state) => {
  return {
    date: state.date
  }
}

export default connect(maptStateToProps, {getDate})(CalendarPage);