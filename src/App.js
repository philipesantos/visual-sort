import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DrawnCanvas from './containers/DrawnCanvas';
import ConfiguredNavigationPanel from './containers/ConfiguredNavigationPanel';
import { ApplicationStatus } from './constants';
import './App.css';

const App = () => (
    <Provider store={ createStore(rootReducer, getPreloadedState(), applyMiddleware(thunk)) }>
        <div id="visual-sort">
            <DrawnCanvas />
            <ConfiguredNavigationPanel />
        </div>
    </Provider>
);

const getPreloadedState = () => {
    const { numbers, operations } = getSortingData();
    const numbersById = {};
    const numbersOrderedIds = [];
    const numbersAllIds = [];
    let highestNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        const numberId = i + 1;
        numbersById[numberId] = {
            value: numbers[i],
        };
        numbersOrderedIds.push(numberId);
        numbersAllIds.push(numberId);
        if (numbers[i] > highestNumber) {
            highestNumber = numbers[i];
        }
    }
    return {
        status: ApplicationStatus.PAUSED,
        intervals: {
            byId: {}
        },
        numbers: {
            byId: numbersById,
            orderedIds: numbersOrderedIds,
            selectedIds: [],
            allIds: numbersAllIds,
            highestNumber: highestNumber,
        },
        operations: {
            byIndex: operations,
            currentIndex: -1,
        }
    };
};

const getSortingData = () => {
    return JSON.parse('{"numbers":[5,16,8,1,13,18,7,11,14,10],"sortedNumbers":[1,5,7,8,10,11,13,14,16,18],"operations":[{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexSwapped":1,"indexSwappedBy":2,"type":"SWAP"},{"indexCompared":2,"indexComparedWith":3,"type":"COMPARE"},{"indexSwapped":2,"indexSwappedBy":3,"type":"SWAP"},{"indexCompared":3,"indexComparedWith":4,"type":"COMPARE"},{"indexSwapped":3,"indexSwappedBy":4,"type":"SWAP"},{"indexCompared":4,"indexComparedWith":5,"type":"COMPARE"},{"indexCompared":5,"indexComparedWith":6,"type":"COMPARE"},{"indexSwapped":5,"indexSwappedBy":6,"type":"SWAP"},{"indexCompared":6,"indexComparedWith":7,"type":"COMPARE"},{"indexSwapped":6,"indexSwappedBy":7,"type":"SWAP"},{"indexCompared":7,"indexComparedWith":8,"type":"COMPARE"},{"indexSwapped":7,"indexSwappedBy":8,"type":"SWAP"},{"indexCompared":8,"indexComparedWith":9,"type":"COMPARE"},{"indexSwapped":8,"indexSwappedBy":9,"type":"SWAP"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexSwapped":1,"indexSwappedBy":2,"type":"SWAP"},{"indexCompared":2,"indexComparedWith":3,"type":"COMPARE"},{"indexCompared":3,"indexComparedWith":4,"type":"COMPARE"},{"indexCompared":4,"indexComparedWith":5,"type":"COMPARE"},{"indexSwapped":4,"indexSwappedBy":5,"type":"SWAP"},{"indexCompared":5,"indexComparedWith":6,"type":"COMPARE"},{"indexSwapped":5,"indexSwappedBy":6,"type":"SWAP"},{"indexCompared":6,"indexComparedWith":7,"type":"COMPARE"},{"indexSwapped":6,"indexSwappedBy":7,"type":"SWAP"},{"indexCompared":7,"indexComparedWith":8,"type":"COMPARE"},{"indexSwapped":7,"indexSwappedBy":8,"type":"SWAP"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexSwapped":0,"indexSwappedBy":1,"type":"SWAP"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexCompared":2,"indexComparedWith":3,"type":"COMPARE"},{"indexCompared":3,"indexComparedWith":4,"type":"COMPARE"},{"indexSwapped":3,"indexSwappedBy":4,"type":"SWAP"},{"indexCompared":4,"indexComparedWith":5,"type":"COMPARE"},{"indexSwapped":4,"indexSwappedBy":5,"type":"SWAP"},{"indexCompared":5,"indexComparedWith":6,"type":"COMPARE"},{"indexCompared":6,"indexComparedWith":7,"type":"COMPARE"},{"indexSwapped":6,"indexSwappedBy":7,"type":"SWAP"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexCompared":2,"indexComparedWith":3,"type":"COMPARE"},{"indexSwapped":2,"indexSwappedBy":3,"type":"SWAP"},{"indexCompared":3,"indexComparedWith":4,"type":"COMPARE"},{"indexCompared":4,"indexComparedWith":5,"type":"COMPARE"},{"indexCompared":5,"indexComparedWith":6,"type":"COMPARE"},{"indexSwapped":5,"indexSwappedBy":6,"type":"SWAP"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexCompared":2,"indexComparedWith":3,"type":"COMPARE"},{"indexCompared":3,"indexComparedWith":4,"type":"COMPARE"},{"indexCompared":4,"indexComparedWith":5,"type":"COMPARE"},{"indexSwapped":4,"indexSwappedBy":5,"type":"SWAP"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexCompared":2,"indexComparedWith":3,"type":"COMPARE"},{"indexCompared":3,"indexComparedWith":4,"type":"COMPARE"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexCompared":2,"indexComparedWith":3,"type":"COMPARE"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"},{"indexCompared":1,"indexComparedWith":2,"type":"COMPARE"},{"indexCompared":0,"indexComparedWith":1,"type":"COMPARE"}]}');
}

export default App;