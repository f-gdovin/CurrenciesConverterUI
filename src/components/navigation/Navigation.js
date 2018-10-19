import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { Menu as MenuIcon } from '@material-ui/icons';
import { clearAuthToken } from '../../services/auth';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

    openRegister = () => {
        this.props.onToggleRegisterModal();
        this.handleClose();
    };

    openLogin = () => {
        this.props.onToggleLoginModal();
        this.handleClose();
    };

    openProfile = () => {
        this.props.onToggleProfileModal();
        this.handleClose();
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        const { onLogout } = this.props;
        onLogout(
            () => {
                clearAuthToken();
                this.handleClose();
            },
            (err) => console.log(err)
        );
    };

    render() {
        const { anchorEl } = this.state;
        const { isSignedIn } = this.props;

        const signedMenu = (
            <Menu
                id='profile_menu_signed'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
            >
                <MenuItem onClick={() => this.openProfile()}>Profile</MenuItem>
                <MenuItem onClick={() => this.handleLogout()}>Log Out</MenuItem>
            </Menu>
        );

        const notSignedMenu = (
            <Menu
                id='profile_menu_unsigned'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
            >
                <MenuItem onClick={() => this.openRegister()}>Register</MenuItem>
                <MenuItem onClick={() => this.openLogin()}>Log In</MenuItem>
            </Menu>
        );

        return (
            <div className='tc'>
                <IconButton onClick={this.handleClick} aria-label='menu'>
                    <MenuIcon fontSize='large'/>
                </IconButton>
                { isSignedIn ? signedMenu : notSignedMenu }
            </div>
        )
    }
}

export default Navigation;