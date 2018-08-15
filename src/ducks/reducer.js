import axios from 'axios';

const initState = {
  date: '',
  titles: [],
}

const GET_DATE = "GET_DATE";
const GET_TITLES = "GET_TITLES";

export default (state = initState, action) => {
  switch (action.type) {
    case GET_DATE:
      return {...state, date: action.payload}
    case GET_TITLES:
      return {...state, titles: action.payload}
    default:
      return state;
  }
}

export const getDate = (date) => {
  return {
    type: GET_DATE,
    payload: date
  }
}

export const getTitles = () => {
  const promise = axios.get('/api/v1/pages')
    .then( res => res.data);

  return {
    type: GET_TITLES,
    payload: promise
  }
}

