import { TextField } from '@material-ui/core/';
import React, { Component } from 'react';


class SearchBox extends Component {
    render() {
        const { value } = this.props;
        return (
            <div className='w-100 tc'>
                <TextField
                    id='filled-multiline-flexible'
                    className='w-100 tc pa3'
                    label='Type or paste phrase to translate here'
                    multiline={true}
                    rowsMax='10'
                    value={ value ? value : '' }
                    onChange={ this.handleOnChange }
                    margin='normal'
                    variant='filled'
                />
            </div>
        )
    }

    handleOnChange = event => {
        const value = event.target.value;
        this.props.onChange(value);
    }
}

export default SearchBox;