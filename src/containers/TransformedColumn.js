import { connect } from 'react-redux'
import Column from '../components/Column'

const mapStateToProps = (state, ownProps) => {
    const index = state.numbers.orderedIds.indexOf(ownProps.id);
    const number = state.numbers.byId[ownProps.id]
    const numbersCount = state.numbers.allIds.length;
    const highestNumber = state.numbers.highestNumber;
    return {
        width: (100 / numbersCount - 1) + '%',
        height: (number.value / highestNumber * 100) + '%',
        x: (100 / numbersCount * index + 0.5) + '%',
        y: (100 - (number.value / highestNumber * 100)) + '%',
        selected: number.selected,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Column);