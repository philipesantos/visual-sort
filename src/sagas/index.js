import { delay } from 'redux-saga';
import { all, put, takeEvery, select } from 'redux-saga/effects';
import { ActionTypes, OperationTypes, ApplicationStatus } from '../constants';
import { processOperation, incrementOperation } from '../actions';

function* handleIncrementOperation() {
    const state = yield select();
    const processedIdsStack = state.operations.processedIdsStack;
    const operationId = processedIdsStack[processedIdsStack.length - 1];
    yield put(processOperation(state.operations.byId[operationId]));
}

function* handleDecrementOperation() {
    const state = yield select();
    const pendingIdsStack = state.operations.pendingIdsStack;
    const rolledBackOperationId = pendingIdsStack[pendingIdsStack.length - 1];
    const rolledBackOperation = state.operations.byId[rolledBackOperationId];
    if (rolledBackOperation.type !== OperationTypes.COMPARE) {
        yield put(processOperation(rolledBackOperation));
    } else {
        const processedIdsStack = state.operations.processedIdsStack;
        for (let i = processedIdsStack.length - 1; i >= 0; i--) {
            const operationId = processedIdsStack[i];
            const operation = state.operations.byId[operationId];
            if (operation.type === OperationTypes.COMPARE) {
                yield put(processOperation(operation));
                return;
            }
        }
    }
}

function* handleApplicationPlay() {
    const state = yield select();
    if (state.status === ApplicationStatus.PLAYING) {
        yield put(incrementOperation());
        yield delay(500);
        yield handleApplicationPlay();
    }
}

function* watchIncrementOperation() {
    yield takeEvery(ActionTypes.INCREMENT_OPERATION, handleIncrementOperation);
}

function* watchDecrementOperation() {
    yield takeEvery(ActionTypes.DECREMENT_OPERATION, handleDecrementOperation);
}

function* watchApplicationPlay() {
    yield takeEvery(ActionTypes.APPLICATION_PLAY, handleApplicationPlay);
}

export default function* rootSaga() {
    yield all([
        watchIncrementOperation(),
        watchDecrementOperation(),
        watchApplicationPlay(),
    ]);
}
