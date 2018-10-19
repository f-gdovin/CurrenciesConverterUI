import React from 'react';

const Usage = ({ totalAmountConverted, totalRequestsMade }) => {
    return (
        <div>
            <p>{totalAmountConverted}</p>
            <p>{totalRequestsMade}</p>
        </div>);
};

export default Usage;