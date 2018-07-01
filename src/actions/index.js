export const select = (index) => ({
    type: 'SELECT',
    index: index,
});

export const swap = (indexSwapped, indexSwappedBy) => ({
    type: 'SWAP',
    indexSwapped: indexSwapped,
    indexSwappedBy: indexSwappedBy,
});

export const unselectAll = () => ({
    type: 'UNSELECT_ALL',
});