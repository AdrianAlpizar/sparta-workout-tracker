import { combineReducers } from 'redux';
import weightReducer from './weightReducer';

export default combineReducers({
  weight: weightReducer,
});