import { ActionTypes } from "../constants";

export const incrementOperation = () => ({
    type: ActionTypes.INCREMENT_OPERATION,
});

export const decrementOperation = () => ({
    type: ActionTypes.DECREMENT_OPERATION,
});

export const goToFirstOperation = () => ({
    type: ActionTypes.GO_TO_FIRST_OPERATION,
});

export const goToLastOperation = () => ({
    type: ActionTypes.GO_TO_LAST_OPERATION,
});

export const applicationPlay = () => ({
    type: ActionTypes.APPLICATION_PLAY,
});

export const applicationPause = () => ({
    type: ActionTypes.APPLICATION_PAUSE,
});

export const processOperation = (operation) => ({
    type: ActionTypes.PROCESS_OPERATION,
    operation: operation,
});