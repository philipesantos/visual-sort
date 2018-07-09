import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PanelButton = ({ icon, enabled, onClick }) => (
    <a className="panel-button" onClick={enabled ? onClick: () => {}}>
        <FontAwesomeIcon icon={icon} />
    </a>
);

export default PanelButton;