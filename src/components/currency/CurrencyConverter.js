import React, { Component } from 'react';
import { Button, MenuItem } from '@material-ui/core';
import CurrencyPicker from './CurrencyPicker';

class CurrencyConverter extends Component {
    constructor(props) {
        super(props);
        const { sourceCurrency, targetCurrency, amount, resultAmount } = props;
        this.state = {
            sourceCurrency,
            targetCurrency,
            amount,
            resultAmount
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.resultAmount !== this.state.resultAmount) {
            this.setState({
                resultAmount: nextProps.resultAmount,
            })
        }
    }

    handleConvertClick = () => {
        const { sourceCurrency, targetCurrency, amount } = this.state;
        const { onConvertRequest } = this.props;
        const convertRequest = {
            from: sourceCurrency,
            to: targetCurrency,
            amount,
        };

        onConvertRequest(convertRequest);
    };

    render() {
        const { sourceCurrency, targetCurrency, amount, resultAmount } = this.state;
        const { currencies } = this.props;

        const currencyList = [];
        Object.entries(currencies).forEach(([code, name]) => {
            currencyList.push(
                <MenuItem key={code} value={code}>{`${code} - ${name}`}</MenuItem>
            )
        });

        const onSourceCurrencyChange = (newValue) => {
            this.setState({
                sourceCurrency: newValue,
            });
        };
        const onTargetCurrencyChange = (newValue) => {
            this.setState({
                targetCurrency: newValue,
            });
        };
        const onAmountChange = (newValue) => {
            this.setState({
                amount: newValue,
            });
        };

        const sourceCurrencyPicker =
            <CurrencyPicker
                onAmountChange={ onAmountChange }
                onCurrencyChange={ onSourceCurrencyChange }
                currencies={ currencyList }
                amount={ amount }
                currency={ sourceCurrency }
                label='Exchange'
        />;
        const targetCurrencyPicker =
            <CurrencyPicker
                onAmountChange={ null } // disabled
                onCurrencyChange={ onTargetCurrencyChange }
                currencies={ currencyList }
                amount={ resultAmount }
                currency={ targetCurrency }
                label='For'
            />;

        return (
            <div className=''>
                <div className='flex-column items-center w-100 pa2'>
                    { sourceCurrencyPicker }
                    <div className='pv3'>
                        <Button
                            color='secondary'
                            variant='contained'
                            onClick={ this.onCurrenciesSwap }
                        >
                            SWAP CURRENCIES
                        </Button>
                    </div>
                    { targetCurrencyPicker }
                </div>
                <div className='pv3'>
                    <Button
                        color='primary'
                        variant='contained'
                        onClick={ this.handleConvertClick }
                    >
                        CONVERT
                    </Button>
                </div>
            </div>
        )
    }

    onCurrenciesSwap = () => {
        const { sourceCurrency, targetCurrency, amount, resultAmount } = this.state;
        this.setState({
            amount: resultAmount,
            resultAmount: amount,
            sourceCurrency: targetCurrency,
            targetCurrency: sourceCurrency,
        });
    }
}

export default CurrencyConverter;