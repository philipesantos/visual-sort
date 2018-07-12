export const ApplicationStatus = {
    PAUSED: 'PAUSED',
    PLAYING: 'PLAYING',
};

export const ActionTypes = {
    APPLICATION_PLAY: 'APPLICATION_PLAY',
    APPLICATION_PAUSE: 'APPLICATION_PAUSE',
    SET_INTERVAL: 'SET_INTERVAL',
    UNSET_INTERVAL: 'UNSET_INTERVAL',
    DECREMENT_OPERATION: 'DECREMENT_OPERATION',
    INCREMENT_OPERATION: 'INCREMENT_OPERATION',
    PROCESS_OPERATION: 'PROCESS_OPERATION',
    DESELECT_NUMBERS: 'DESELECT_NUMBERS',
};

export const OperationTypes = {
    COMPARE: 'COMPARE',
    SWAP: 'SWAP',
};

export const IntervalTypes = {
    PROCESS_OPERATIONS: 'PROCESS_OPERATIONS'
}