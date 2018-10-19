import React from 'react';
import { updateProfile } from '../../actions/auth';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name,
        }
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    onSubmitButton = (data) => {
        updateProfile(this.props.userId, data,
            (data) => {
                if (data.status === 200 || data.status === 304) {
                    this.props.toggleProfileModal();
                    this.props.onUpdate({...this.props.user, ...data})
                }
            }, (err) => console.log(err));
    };

    render() {
        const { toggleProfileModal, user } = this.props;
        const { name } = this.state;
        return (
            <main className='pa4 black-80 w-80'>
                <img
                    src='http://tachyons.io/img/logo.jpg'
                    className='h3 w3 dib' alt='avatar'/>
                <h1>{user.email}</h1>
                <h1>{name}</h1>
                <p>Member since: January 1st</p>
                <hr/>
                <label className='mt2 fw6' htmlFor='name'>Name:</label>
                <input className='pa2 ba w-100'
                       onChange={this.onNameChange}
                       placeholder='John'
                       type='text'
                       name='name'
                       id='name'
                       value={name}
                       autoComplete='none'/>
                <div className='mt4' style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <button className='b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20'
                            onClick={() => this.onSubmitButton({ name })}>Save
                    </button>
                    <button className='b pa2 grow pointer hover-white w-40 bg-light-red b--black-20'
                            onClick={toggleProfileModal}>Cancel
                    </button>
                </div>
            </main>
        )
    }
}

export default Profile;