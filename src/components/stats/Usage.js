import React from 'react';

const Usage = ({ isPending, error, totalAmountConverted, totalRequestsMade }) => {
    if (isPending) {
        return <h1>Loading usage statistics...</h1>
    } else if (error) {
        return <div>{error}</div>;
    } else {
        return (
            <div>
                <p>{totalAmountConverted}</p>
                <p>{totalRequestsMade}</p>
            </div>);
    }
};

export default Usage;