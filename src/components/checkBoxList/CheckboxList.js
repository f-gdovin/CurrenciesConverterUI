import { Checkbox, List, ListItem, ListItemText } from '@material-ui/core';
import React, { Component } from 'react';

class CheckboxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
        }
    }

    render() {
        const { values, useCheckboxes } = this.props;

        return (
            <div className='checkboxList'>
                <List>
                    {values.map(value => (
                        <ListItem
                            key={`listItem-${value}`}
                            dense={true}
                            button={true}
                            onClick={() => this.handleToggle(value)}
                        >
                            <ListItemText primary={value} aria-label={value} />
                            {(useCheckboxes ?
                                    <Checkbox
                                        checked={this.state.checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple={true}
                                    />:
                                    null
                            )}
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }

    handleToggle = value => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };
}

export default CheckboxList;