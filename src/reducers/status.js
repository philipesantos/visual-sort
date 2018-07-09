import { ApplicationStatus, ActionTypes } from '../constants';

const status = (state = '', action) => {
    switch (action.type) {
        case ActionTypes.APPLICATION_PLAY: {
            return ApplicationStatus.PLAYING;
        }
        case ActionTypes.APPLICATION_PAUSE: {
            return ApplicationStatus.PAUSED;
        }
        default: return state;
    }
};

export default status;