import React from 'react';
import { logout } from '../../services/auth';
import { PermIdentity } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Menu from '@material-ui/core/Menu/Menu';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';


class ProfileIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }

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

    render() {
        const { anchorEl } = this.state;
        const { isSignedIn } = this.props;
        const ariaLabel = isSignedIn ? 'View Profile' : 'Log In/Top';

        return (
            <div className='pa4 tc'>
                <IconButton onClick={() => this.handleClick} aria-label={ariaLabel}>
                    <PermIdentity fontSize='large'/>
                </IconButton>
                <Menu
                    id='profile_menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={() => this.openProfile()}>Profile</MenuItem>
                    <MenuItem onClick={logout(() => this.handleClose(), (err) => console.log(err))}>Log Out</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default ProfileIcon;