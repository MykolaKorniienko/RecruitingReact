import axios from 'axios';

export const GET_SEARCHES = 'GET_SEARCHES';
export const SEARCH_USER = 'SEARCH_USER';

const ROOT_URL = 'http://localhost:8080/api/search';

export function getSearches() {
  const request = axios.get(`${ROOT_URL}/`);

  return {
    type: GET_SEARCHES,
    payload: request
  };
}

export function searchUser(props) {
  const request = axios.post(`${ROOT_URL}/`, props);

  return {
    type: SEARCH_USER,
    payload: request
  };
}