import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import SearchReducer from './reducer_search';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users: UsersReducer,
  form: formReducer,
  search: SearchReducer
});

export default rootReducer;