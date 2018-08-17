import axios from 'axios';

const initState = {
  date: '',
  list: [],
  todayList: []
}

const GET_DATE = "GET_DATE";
const GET_LIST = "GET_LIST";
const GET_TODAY_LIST = 'UPDATE_LIST';
const GET_DAY_LIST = 'GET_DAY_LIST';
const GET_MATCH_LIST = 'GET_MATCH_LIST';

export default (state = initState, action) => {
  switch (action.type) {
    case GET_DATE:
      return {...state, date: action.payload}
    case GET_LIST + '_FULFILLED':
      return {...state, list: action.payload}
    case GET_TODAY_LIST + '_FULFILLED':
      return {...state, list: action.payload}
    case GET_DAY_LIST + '_FULFILLED':
      return {...state, list: action.payload}
    case GET_MATCH_LIST + '_FULFILLED':
      return {...state, list: action.payload}
    default:
      return state;
  }
}

export const getDate = (date) => {
  const promise = axios.get('/api/v1/pages')
  .then( res => res.data);

  return {
    type: GET_DATE,
    payload: promise
  }
}

export const getTitles = () => {
  const promise = axios.get('/api/v1/pages')
    .then( res => res.data);

  return {
    type: GET_LIST,
    payload: promise
  }
}

export const getTodayList = () => {
  const todayList = axios.get('/api/pages/today')
  .then( res => res.data);

  return {
    type: GET_TODAY_LIST,
    payload: todayList
  }
}

export const getDayList = (date) => {
  const dayList = axios.get(`/api/pages/${date}`)
  .then( res => res.data);

  return {
    type: GET_DAY_LIST,
    payload: dayList
  }
}

export const getMatchList = (keyword) => {
  const matchList = axios.get(`/api/v1/pags?search=${keyword}`)
  .then( res => res.data);

  return {
    type: GET_MATCH_LIST,
    payload: matchList
  }
}

