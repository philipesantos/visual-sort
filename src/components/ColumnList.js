import React from 'react';
import TransformedColumn from '../containers/TransformedColumn';

const ColumnList = ({allIds}) => {
    const columns = allIds.map((numberId) => (
        <g key={"column-" + numberId}>
            <TransformedColumn id={numberId} />
        </g>
    ));
    return (
        <svg width="98%" height="98%" x="1%" y="1%">
            {columns}
        </svg>
    );
};

export default ColumnList;