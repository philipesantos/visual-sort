import React from 'react';
import OrderedColumnList from '../containers/OrderedColumnList';

const Canvas = ({operations, onProcessOperations}) => (
    <svg style={getStyle()} onClick={() => { onProcessOperations(operations) }}>
        <OrderedColumnList />
    </svg>
);

const getStyle = () => ({
    display: "block",
    width: "100%",
    height: "100%",
});

export default Canvas;