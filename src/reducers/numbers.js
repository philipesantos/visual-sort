import { merge } from 'lodash';

const numbers = (state = {}, action) => {
    switch (action.type) {
        case 'SELECT': {
            const { index } = action;
            const numberId = state.orderedIds[index];
            const stateUpdate = {
                byId: {
                    [numberId]: {
                        selected: true,
                    }
                },
            };
            return merge({}, state, stateUpdate);
        }
        case 'SWAP': {
            const { indexSwapped, indexSwappedBy } = action;
            const orderedIds = state.orderedIds.slice();
            const swappedId = orderedIds[indexSwapped];
            orderedIds[indexSwapped] = orderedIds[indexSwappedBy];
            orderedIds[indexSwappedBy] = swappedId;
            return {
                ...state,
                orderedIds: orderedIds,
            }
        }
        case 'UNSELECT_ALL': {
            let stateUpdate = {
                byId: {}
            };
            for (let i = 0; i < state.allIds.length; i++) {
                let numberId = state.allIds[i];
                stateUpdate.byId[numberId] = {
                    selected: false,
                }
            }
            return merge({}, state, stateUpdate);
        }
        default: return state;
    }
};

export default numbers;