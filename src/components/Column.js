import React from 'react';

const Column = ({x, y, width, height, selected}) => (
    <rect width={width} height={height} className={getClassName(selected)} style={getStyle(x, y)} />
);

const getClassName = (selected) => {
    const classNames = [ 'column' ];
    if (selected) {
        classNames.push('selected');
    }
    return classNames.join(' ', classNames);
}

const getStyle = (x, y) => ({
    transform: `translate(${x},${y})`
});

export default Column;