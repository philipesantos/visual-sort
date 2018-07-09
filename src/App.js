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
    return JSON.parse('{"numbers":[12,7,3,10,5,1,4,2,14,6,8,13,9,11,15],"sortedNumbers":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"operations":[{"indexSwapped":0,"indexSwappedBy":1,"type":"SWAP"},{"indexSwapped":1,"indexSwappedBy":2,"type":"SWAP"},{"indexSwapped":2,"indexSwappedBy":3,"type":"SWAP"},{"indexSwapped":3,"indexSwappedBy":4,"type":"SWAP"},{"indexSwapped":4,"indexSwappedBy":5,"type":"SWAP"},{"indexSwapped":5,"indexSwappedBy":6,"type":"SWAP"},{"indexSwapped":6,"indexSwappedBy":7,"type":"SWAP"},{"indexSwapped":8,"indexSwappedBy":9,"type":"SWAP"},{"indexSwapped":9,"indexSwappedBy":10,"type":"SWAP"},{"indexSwapped":10,"indexSwappedBy":11,"type":"SWAP"},{"indexSwapped":11,"indexSwappedBy":12,"type":"SWAP"},{"indexSwapped":12,"indexSwappedBy":13,"type":"SWAP"},{"indexSwapped":0,"indexSwappedBy":1,"type":"SWAP"},{"indexSwapped":2,"indexSwappedBy":3,"type":"SWAP"},{"indexSwapped":3,"indexSwappedBy":4,"type":"SWAP"},{"indexSwapped":4,"indexSwappedBy":5,"type":"SWAP"},{"indexSwapped":5,"indexSwappedBy":6,"type":"SWAP"},{"indexSwapped":7,"indexSwappedBy":8,"type":"SWAP"},{"indexSwapped":8,"indexSwappedBy":9,"type":"SWAP"},{"indexSwapped":10,"indexSwappedBy":11,"type":"SWAP"},{"indexSwapped":11,"indexSwappedBy":12,"type":"SWAP"},{"indexSwapped":1,"indexSwappedBy":2,"type":"SWAP"},{"indexSwapped":2,"indexSwappedBy":3,"type":"SWAP"},{"indexSwapped":3,"indexSwappedBy":4,"type":"SWAP"},{"indexSwapped":4,"indexSwappedBy":5,"type":"SWAP"},{"indexSwapped":6,"indexSwappedBy":7,"type":"SWAP"},{"indexSwapped":7,"indexSwappedBy":8,"type":"SWAP"},{"indexSwapped":9,"indexSwappedBy":10,"type":"SWAP"},{"indexSwapped":10,"indexSwappedBy":11,"type":"SWAP"},{"indexSwapped":1,"indexSwappedBy":2,"type":"SWAP"},{"indexSwapped":2,"indexSwappedBy":3,"type":"SWAP"},{"indexSwapped":3,"indexSwappedBy":4,"type":"SWAP"},{"indexSwapped":5,"indexSwappedBy":6,"type":"SWAP"},{"indexSwapped":8,"indexSwappedBy":9,"type":"SWAP"},{"indexSwapped":0,"indexSwappedBy":1,"type":"SWAP"},{"indexSwapped":2,"indexSwappedBy":3,"type":"SWAP"},{"indexSwapped":1,"indexSwappedBy":2,"type":"SWAP"}]}');
}

export default App;