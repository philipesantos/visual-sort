import { ActionTypes } from '../constants';
import { merge } from 'lodash';

const status = (state = '', action) => {
    switch (action.type) {
        case ActionTypes.SET_INTERVAL: {
            const stateUpdate = {
                byId: {
                    [action.id]: action.interval,
                }
            }
            return merge({}, state, stateUpdate);
        }
        case ActionTypes.UNSET_INTERVAL: {
            const stateUpdate = {
                byId: {
                    [action.id]: null,
                }
            }
            return merge({}, state, stateUpdate);
        }
        default: return state;
    }
};

export default status;