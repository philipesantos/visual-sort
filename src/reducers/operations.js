import { ActionTypes } from "../constants";

const operations = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_OPERATION: {
            let updatedIndex = state.currentIndex + 1;
            if (updatedIndex >= state.byIndex.length) {
                updatedIndex = state.byIndex.length - 1;
            }
            return {
                ...state,
                currentIndex: updatedIndex,
            }
        }
        case ActionTypes.DECREMENT_OPERATION: {
            let updatedIndex = state.currentIndex - 1;
            if (updatedIndex < -1) {
                updatedIndex = -1;
            }
            return {
                ...state,
                currentIndex: updatedIndex,
            }
        }
        default:
            return state;
    }
};

export default operations;