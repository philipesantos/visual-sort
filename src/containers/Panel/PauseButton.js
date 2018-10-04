import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { ApplicationStatus } from '../../constants';
import { applicationPause } from '../../actions';

const mapStateToProps = (state) => ({
    icon: faPauseCircle,
    enabled: state.status === ApplicationStatus.PLAYING,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(applicationPause()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);