import { ActionTypes } from "../constants";
import { concat, reverse } from 'lodash';

const operations = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_OPERATION: {
            const pendingIdsStack = state.pendingIdsStack.slice();
            const processedIdsStack = state.processedIdsStack.slice();
            processedIdsStack.push(pendingIdsStack.pop());
            return {
                ...state,
                pendingIdsStack: pendingIdsStack,
                processedIdsStack: processedIdsStack,
            }
        }
        case ActionTypes.DECREMENT_OPERATION: {
            const pendingIdsStack = state.pendingIdsStack.slice();
            const processedIdsStack = state.processedIdsStack.slice();
            pendingIdsStack.push(processedIdsStack.pop());
            return {
                ...state,
                pendingIdsStack: pendingIdsStack,
                processedIdsStack: processedIdsStack,
            }
        }
        case ActionTypes.GO_TO_FIRST_OPERATION: {
            const pendingIdsStack = concat(state.pendingIdsStack, reverse(state.processedIdsStack));
            return {
                ...state,
                pendingIdsStack: pendingIdsStack,
                processedIdsStack: [],
            }
        }
        case ActionTypes.GO_TO_LAST_OPERATION: {
            const processedIdsStack = concat(state.processedIdsStack, reverse(state.pendingIdsStack));
            return {
                ...state,
                pendingIdsStack: [],
                processedIdsStack: processedIdsStack,
            }
        }
        default:
            return state;
    }
};

export default operations;