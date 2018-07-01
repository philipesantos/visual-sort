import { combineReducers } from 'redux';
import numbers from './numbers';
import operations from './operations';

export default combineReducers({
    numbers,
    operations,
});