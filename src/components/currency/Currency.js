import React, { Component } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CurrencyConverter from './CurrencyConverter';
import CurrencyList from './CurrencyList';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moreInfoShown: false,
        }
    }

    componentDidMount() {
        this.props.onRequestCurrenciesList();
    };

    onToggle = () => {
        this.setState(prevState => ({
            moreInfoShown: !prevState.moreInfoShown,
        }));
    };

    render() {
        const {
            // currencies
            onRequestCurrenciesConvert,
            isListPending,
            isConvertPending,
            currenciesList,
            currenciesConvert
        } = this.props;
        const { moreInfoShown } = this.state;

        const label = `${moreInfoShown ? 'Hide' : 'Show'} supported currencies`;

        return (isListPending ?
                <h1>Loading available currencies...</h1> :
                (<div className='flex-column items-center tc'>
                    <CurrencyConverter
                        onConvertRequest={onRequestCurrenciesConvert}
                        sourceCurrency={currenciesConvert.from}
                        targetCurrency={currenciesConvert.to}
                        amount={currenciesConvert.amount}
                        resultAmount={currenciesConvert.resultAmount}
                        currencies={currenciesList}
                    />
                    <ExpansionPanel expanded={moreInfoShown} onChange={this.onToggle}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <h4 className=''>{label}</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <CurrencyList
                                values={currenciesList}
                            />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>)
        )
    }
}

export default Currency;