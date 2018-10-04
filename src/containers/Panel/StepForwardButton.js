import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { ApplicationStatus } from '../../constants';
import { incrementOperation } from '../../actions';

const mapStateToProps = (state) => ({
    icon: faStepForward,
    enabled: state.status === ApplicationStatus.PAUSED && state.operations.pendingIdsStack.length > 0,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(incrementOperation()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);