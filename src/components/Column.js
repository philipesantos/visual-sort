import React from 'react';
import classNames from 'classnames';

const Column = ({x, y, width, height, selected}) => (
    <rect width={width} height={height} rx="0.75%" className={getClassName(selected)} style={getStyle(x, y)} />
);

const getClassName = (selected) => classNames({
    'column': true,
    'disabled': selected,
});


const getStyle = (x, y) => ({
    transform: `translate(${x},${y})`
});

export default Column;