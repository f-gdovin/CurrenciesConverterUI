import { List, ListItem, ListItemText } from '@material-ui/core';
import React, { Component } from 'react';

class CurrencyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
        }
    }

    render() {
        const { values } = this.props;
        const currencyListLeft = [];
        const currencyListMid = [];
        const currencyListRight = [];
        Object.entries(values).forEach(([code, name], index) => {
            const listItem =
                (<ListItem
                    key={`listItem-${code}`}
                    dense={true}
                    button={false}
                >
                    <ListItemText primary={`${code} - ${name}`} aria-label={name} />
                </ListItem>);
            if(index % 3 === 0){
                currencyListLeft.push(listItem);
            } else if (index % 3 === 1) {
                currencyListMid.push(listItem);
            } else {
                currencyListRight.push(listItem);
            }
        });

        return (
            <div className='dt dt--fixed'>
                <List className='dtc tc'>
                    {currencyListLeft}
                </List>
                <List className='dtc tc'>
                    {currencyListMid}
                </List>
                <List className='dtc tc'>
                    {currencyListRight}
                </List>
            </div>
        );
    }
}

export default CurrencyList;