import React from 'react';

const ProgressBar = () => (
    <svg style={getSVGStyle()}>
        <rect style={getRectStyle()} />
    </svg>
);

const getSVGStyle = () => ({
    width: '200px',
    height: '10px',
});

const getRectStyle = () => ({
    width: '200px',
    height: '10px',
    fill: 'black',
});

export default ProgressBar;