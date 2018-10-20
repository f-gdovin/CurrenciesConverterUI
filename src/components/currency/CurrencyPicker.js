import React, { Component } from 'react';
import { TextField, InputAdornment, Select } from '@material-ui/core';


class CurrencyPicker extends Component {
    render() {
        const { label, currencies, amount, currency, onAmountChange } = this.props;
        return (
            <TextField
                id={`currencyPickerAmount${ label }`}
                className='w-80'
                variant='outlined'
                label={ label }
                disabled={ !onAmountChange }
                value={ amount }
                onChange={ this.handleAmountChange }
                InputProps={{
                    endAdornment: (
                        <InputAdornment variant='filled' position='end'>
                            <div className='w-100'>
                                { currencies && currencies.length > 0 ?
                                    <Select
                                        id={`currencyPickerCurrency${ label }`}
                                        className='w-100 tc'
                                        label={ label }
                                        value={ currency ? currency : '' }
                                        onChange={ this.handleCurrencyChange }
                                        margin='dense'
                                        variant='filled'
                                    >
                                        {currencies}
                                    </Select> :
                                    <h1>Cannot get currencies</h1>
                                }
                            </div>
                        </InputAdornment>
                    ),
                }}
            />
        )
    }

    handleAmountChange = event => {
        const value = event.target.value;
        this.props.onAmountChange(value);
    }

    handleCurrencyChange = event => {
        const value = event.target.value;
        this.props.onCurrencyChange(value);
    }
}

export default CurrencyPicker;