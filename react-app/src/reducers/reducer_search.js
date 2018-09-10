import { GET_SEARCHES, SEARCH_USER } from '../actions/search';

const INITIAL_STATE = { all: [], user: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_SEARCHES:
      return { ...state, all: action.payload.data };
    case SEARCH_USER:
      return { ...state, user: action.payload.data};
    default:
      return state;
  }
}