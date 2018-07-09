import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons';
import { previousOperation } from '../../actions';
import { ApplicationStatus } from '../../constants';

const mapStateToProps = (state) => ({
    icon: faStepBackward,
    enabled: state.status === ApplicationStatus.PAUSED,
});

const mapDispatchToProps = dispatch => ({
    onClick: () =>
        dispatch(previousOperation())
            .then(() => { })
            .catch(() => { }),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);