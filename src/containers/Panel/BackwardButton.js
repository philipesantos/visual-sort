import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { ApplicationStatus } from '../../constants';
import { goToFirstOperation } from '../../actions';

const mapStateToProps = (state) => ({
    icon: faBackward,
    enabled: state.status === ApplicationStatus.PAUSED && state.operations.processedIdsStack.length > 0,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(goToFirstOperation()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);