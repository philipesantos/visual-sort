import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faStepForward } from '@fortawesome/free-solid-svg-icons';
import { nextOperation } from '../../actions';
import { ApplicationStatus } from '../../constants';

const mapStateToProps = (state) => ({
    icon: faStepForward,
    enabled: state.status === ApplicationStatus.PAUSED,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => 
        dispatch(nextOperation())
            .then(() => { })
            .catch(() => { }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);