import { ActionTypes, OperationTypes } from "../constants";

const numbers = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.PROCESS_OPERATION: {
            return processOperation(state, action.operation);
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
        default: 
            throw new Error('Operation not supported');
    }
}

export default numbers;