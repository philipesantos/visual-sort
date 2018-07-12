import { ActionTypes, ApplicationStatus, IntervalTypes } from "../constants";

export const applicationPlay = () => {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.APPLICATION_PLAY,
        });
        if (getState().status === ApplicationStatus.PLAYING) {
            const callNextOperation = () => dispatch(nextOperation())
                    .catch(() => dispatch(applicationPause()));
            callNextOperation();
            dispatch({
                type: ActionTypes.SET_INTERVAL,
                id: IntervalTypes.PROCESS_OPERATIONS,
                interval: setInterval(callNextOperation, 600),
            });
        }
    }
};

export const applicationPause = () => {
    return (dispatch, getState) => {
        dispatch({
            type: ActionTypes.APPLICATION_PAUSE,
        });
        if (getState().status === ApplicationStatus.PAUSED) {
            const intervalId = IntervalTypes.PROCESS_OPERATIONS;
            clearInterval(getState().intervals.byId[intervalId])
            dispatch({
                type: ActionTypes.UNSET_INTERVAL,
                id: intervalId,
            });
        }
    }
};

export const previousOperation = () => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({
            type: ActionTypes.DECREMENT_OPERATION,
        });
        const updatedState = getState();
        const currentIndex = updatedState.operations.currentIndex;
        if (state.operations.currentIndex !== currentIndex) {
            const operation = state.operations.byIndex[currentIndex + 1];
            dispatch({
                type: ActionTypes.PROCESS_OPERATION,
                operation: operation,
            });
            return Promise.resolve(operation);
        }
        dispatch({
            type: ActionTypes.DESELECT_NUMBERS,
        });
        return Promise.reject(new Error('Out of bounds'));
    };
}

export const nextOperation = () => {
    return (dispatch, getState) => {
        const state = getState();
        dispatch({
            type: ActionTypes.INCREMENT_OPERATION,
        });
        const updatedState = getState();
        const currentIndex = updatedState.operations.currentIndex;
        if (state.operations.currentIndex !== currentIndex) {
            const operation = updatedState.operations.byIndex[currentIndex];
            dispatch({
                type: ActionTypes.PROCESS_OPERATION,
                operation: operation,
            });
            return Promise.resolve(operation);
        }
        dispatch({
            type: ActionTypes.DESELECT_NUMBERS,
        });
        return Promise.reject(new Error('Out of bounds'));
    };
}