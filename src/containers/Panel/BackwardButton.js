import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { previousOperation } from '../../actions';
import { ApplicationStatus } from '../../constants';

const onBackwardClick = (dispatch) => {
    dispatch(previousOperation())
        .then(() => {
            onBackwardClick(dispatch);
        })
        .catch(() => {});
}

const mapStateToProps = (state) => ({
    icon: faBackward,
    enabled: state.status === ApplicationStatus.PAUSED,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => onBackwardClick(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);