import React from 'react';

const Top = ({ topCurrencies }) => {
    return (
        <ul>
            {topCurrencies.map(currency => <li>{JSON.stringify(currency)}</li>)}
        </ul>);
};

export default Top;