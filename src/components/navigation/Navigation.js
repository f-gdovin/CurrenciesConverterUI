import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { Menu as MenuIcon } from '@material-ui/icons';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

    openTop = () => {
        this.props.onToggleTopModal();
        this.handleClose();
    };

    openUsage = () => {
        this.props.onToggleUsageModal();
        this.handleClose();
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return (
            <div className='tc'>
                <IconButton onClick={this.handleClick} aria-label='menu'>
                    <MenuIcon fontSize='large'/>
                </IconButton>
                <Menu
                    id='menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={() => this.openTop()}>Top Currencies</MenuItem>
                    <MenuItem onClick={() => this.openUsage()}>Usage statistics</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default Navigation;