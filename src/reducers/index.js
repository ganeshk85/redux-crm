import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import customer from './customer';

export default combineReducers({
  customer,
  routing: routerReducer
});