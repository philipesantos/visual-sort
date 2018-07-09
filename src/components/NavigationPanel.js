import React from 'react';
import PlayButton from '../containers/Panel/PlayButton';
import PauseButton from '../containers/Panel/PauseButton';
import ForwardButton from '../containers/Panel/ForwardButton';
import StepForwardButton from '../containers/Panel/StepForwardButton';
import StepBackwardButton from '../containers/Panel/StepBackwardButton';
import BackwardButton from '../containers/Panel/BackwardButton';

const NavigationPanel = ({ isPlaying }) => (
    <div id="settings-panel">
        <BackwardButton />
        <StepBackwardButton />
        {!isPlaying ? <PlayButton /> : <PauseButton />}
        <StepForwardButton />
        <ForwardButton />
    </div>
);

export default NavigationPanel;