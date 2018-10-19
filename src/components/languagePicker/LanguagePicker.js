import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

class LanguagePicker extends Component {
    render() {
        const { label, languages, value } = this.props;
        return (
            <div className='w-100'>
                { Array.isArray(languages) && languages.length > 0 ?
                    <Select
                        id={`languagePicker${ label }`}
                        className='w-100 tc pa3'
                        label={ label }
                        value={ value ? value : '' }
                        onChange={ this.handleOnChange }
                        margin='dense'
                        variant='filled'
                    >
                        {languages.map(language =>
                            <MenuItem key={label + language.code} value={language.language}>{language.name}</MenuItem>
                        )}
                    </Select> :
                    <h1>Cannot get languages</h1>
                }

            </div>
        )
    }

    handleOnChange = event => {
        const value = event.target.value;
        this.props.onChange(value);
    }
}

export default LanguagePicker;