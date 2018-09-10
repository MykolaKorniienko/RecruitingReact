import { GET_USERS, GET_USER } from '../actions/user';

const INITIAL_STATE = { all: [], user: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_USER:
      return { ...state, user: action.payload.data };
    case GET_USERS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}