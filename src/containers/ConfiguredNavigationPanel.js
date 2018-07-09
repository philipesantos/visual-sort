import { connect } from 'react-redux'
import NavigationPanel from '../components/NavigationPanel'
import { ApplicationStatus } from '../constants';

const mapStateToProps = (state) => ({
    isPlaying: state.status === ApplicationStatus.PLAYING,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationPanel);