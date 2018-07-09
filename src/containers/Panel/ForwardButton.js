import { connect } from 'react-redux';
import PanelButton from '../../components/PanelButton';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { nextOperation } from '../../actions';
import { ApplicationStatus } from '../../constants';

const onForwardClick = (dispatch) => {
    dispatch(nextOperation())
        .then(() => {
            onForwardClick(dispatch);
        })
        .catch(() => {});
}

const mapStateToProps = (state) => ({
    icon: faForward,
    enabled: state.status === ApplicationStatus.PAUSED,
});

const mapDispatchToProps = dispatch => ({
    onClick: () => onForwardClick(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PanelButton);