import axios from 'axios';

const initState = {
  date: '',
  list: [],
}

const GET_DATE = "GET_DATE";
const GET_LIST = "GET_LIST";
const GET_TODAY_LIST = 'UPDATE_LIST';

export default (state = initState, action) => {
  switch (action.type) {
    case GET_DATE:
      return {...state, date: action.payload}
    case GET_LIST + '_FULFILLED':
      return {...state, list: action.payload}
    case GET_TODAY_LIST + '_FULFILLED':
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
  const promise = axios.get('/api/pages/today')
  .then( res => res.data);

  return {
    type: GET_TODAY_LIST,
    payload: promise
  }
}

// export const getDiary = () => {
//   const
// }

