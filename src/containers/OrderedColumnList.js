import { connect } from 'react-redux'
import ColumnList from '../components/ColumnList'

const mapStateToProps = (state, ownProps) => {
    return {
        allIds: state.numbers.allIds,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ColumnList);