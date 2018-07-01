import { connect } from 'react-redux'
import { swap, select, unselectAll } from '../actions';
import Canvas from '../components/Canvas'

const processOperations = (dispatch, operations) => {
    dispatchOperation(dispatch, operations, 0);
}

const dispatchOperation = (dispatch, operations, operationIndex) => {
    dispatch(unselectAll());
    if (operations[operationIndex]) {
        switch (operations[operationIndex].type) {
            case 'SWAP': {
                const indexSwapped = operations[operationIndex].indexSwapped;
                const indexSwappedBy = operations[operationIndex].indexSwappedBy;
                dispatch(select(indexSwapped));
                dispatch(select(indexSwappedBy));
                dispatch(swap(indexSwapped, indexSwappedBy));
                break;
            }
            default: throw new Error('Operation not supported');
        }
        setTimeout(() => dispatchOperation(dispatch, operations, ++operationIndex), 600);
    }
}

const mapStateToProps = (state) => ({
    operations: state.operations
});

const mapDispatchToProps = dispatch => ({
    onProcessOperations: (operations) => processOperations(dispatch, operations),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Canvas);