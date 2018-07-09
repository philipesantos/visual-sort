import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PanelButton = ({ icon, enabled, onClick }) => (
    <a className={getClassName(enabled)} onClick={enabled ? onClick: () => {}}>
        <FontAwesomeIcon icon={icon} />
    </a>
);

const getClassName = (enabled) => classNames({
    'panel-button': true,
    'disabled': !enabled,
});

export default PanelButton;