import { ActionTypes, OperationTypes } from "../constants";

const numbers = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.PROCESS_OPERATION: {
            return processOperation(state, action.operation);
        }
        case ActionTypes.GO_TO_FIRST_OPERATION: {
            return {
                ...state,
                orderedIds: state.allIds.slice(),
                selectedIds: [],
            }
        }
        default: return state;
    }
};

const processOperation = (state, operation) => {
    switch (operation.type) {
        case OperationTypes.SWAP: {
            const { indexSwapped, indexSwappedBy } = operation;
            const orderedIds = state.orderedIds.slice();
            const swappedId = orderedIds[indexSwapped];
            orderedIds[indexSwapped] = orderedIds[indexSwappedBy];
            orderedIds[indexSwappedBy] = swappedId;
            return {
                ...state,
                orderedIds: orderedIds,
            }
        }
        case OperationTypes.COMPARE: {
            const { indexCompared, indexComparedWith } = operation;
            const comparedId = state.orderedIds[indexCompared];
            const comparedWithId = state.orderedIds[indexComparedWith];
            return {
                ...state,
                selectedIds: [ comparedId, comparedWithId ],
            };
        }
        default: 
            throw new Error('Operation not supported');
    }
}

export default numbers;