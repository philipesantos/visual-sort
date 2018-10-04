import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { ApplicationStatus } from '../../constants';
import { decrementOperation } from '../../actions';

const mapStateToProps = (state) => ({
    icon: faStepBackward,
    enabled: state.status === ApplicationStatus.PAUSED && state.operations.processedIdsStack.length > 0,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(decrementOperation()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);