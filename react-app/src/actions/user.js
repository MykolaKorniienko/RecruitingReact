import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const ADD_USER = 'ADD_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const GET_USER = 'GET_USER';
export const DELETE_USER = 'DELETE_USER';

const ROOT_URL = 'http://localhost:8080/api/user';

export function getUsers() {
  const request = axios.get(`${ROOT_URL}/`);

  return {
    type: GET_USERS,
    payload: request
  };
}

export function addUser(props) {
  const request = axios.post(`${ROOT_URL}/`, props);

  return {
    type: ADD_USER,
    payload: request
  };
}

export function updateUser(id, props) {
    const request = axios.post(`${ROOT_URL}/${id}`, props);
  
    return {
      type: UPDATE_USER,
      payload: request
    };
  }

export function getUser(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: GET_USER,
    payload: request
  };
}

export function deleteUser(id) {
  const request = axios.delete(`${ROOT_URL}/${id}`);

  return {
    type: DELETE_USER,
    payload: request
  };
}