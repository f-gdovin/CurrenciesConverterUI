import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const Top = ({ isPending, error, topCurrencies }) => {
    if (isPending) {
        return <h1>Loading top currencies statistics...</h1>
    } else if (error) {
        return <div>{error}</div>;
    } else {
        const currencyList = [];
        Object.entries(topCurrencies).forEach(([code, useCount]) => {
            currencyList.push(
                <ListItem
                    key={`listItem-${code}`}
                    dense={true}
                    button={false}
                >
                    <ListItemText primary={`${code} - ${useCount}`} aria-label={code} />
                </ListItem>
            )
        });
        return (
            <div className='w-80'>
                <p>Top currencies - how many times was the currency used as a target for converting</p>
                <List>
                    {currencyList}
                </List>
            </div>);
    }
};

export default Top;