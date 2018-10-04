import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { ApplicationStatus } from '../../constants';

const mapStateToProps = (state) => ({
    icon: faForward,
    enabled: state.status === ApplicationStatus.PAUSED && state.operations.pendingIdsStack.length > 0,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => () => {},
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);