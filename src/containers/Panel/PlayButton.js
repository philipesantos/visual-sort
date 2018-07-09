import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { applicationPlay } from '../../actions';
import { ApplicationStatus } from '../../constants';

const mapStateToProps = (state) => ({
    icon: faPlayCircle,
    enabled: state.status === ApplicationStatus.PAUSED,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(applicationPlay()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);