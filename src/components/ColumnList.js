import React from 'react';
import TransformedColumn from '../containers/TransformedColumn';

const ColumnList = ({allIds}) => {
    return allIds.map((numberId) => (
        <g key={"column-" + numberId}>
            <TransformedColumn id={numberId} />
        </g>
    ))
};

export default ColumnList;