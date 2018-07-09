import { combineReducers } from 'redux';
import status from './status';
import intervals from './intervals';
import numbers from './numbers';
import operations from './operations';

export default combineReducers({
    status,
    intervals,
    numbers,
    operations,
});