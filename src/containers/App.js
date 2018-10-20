import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    requestTop,
    requestUsage,
    toggleTopModal,
    toggleUsageModal
} from '../actions/stats';
import {
    requestCurrenciesList,
    requestCurrenciesConvert
} from '../actions/currencies';
import MainPage from '../components/mainPage/MainPage';
import './App.css';


const mapStateToProps = state => {
    return {
        // stats
        topError: state.stats.topError,
        usageError: state.stats.usageError,
        isTopPending: state.stats.isTopPending,
        isUsagePending: state.stats.isUsagePending,
        topCurrencies: state.stats.topCurrencies,
        totalAmountConverted: state.stats.totalAmountConverted,
        totalRequestsMade: state.stats.totalRequestsMade,
        isTopOpen: state.stats.isTopOpen,
        isUsageOpen: state.stats.isUsageOpen,

        // currencies
        listError: state.currencies.listError,
        convertError: state.currencies.convertError,
        isListPending: state.currencies.isListPending,
        isConvertPending: state.currencies.isConvertPending,
        currenciesList: state.currencies.currenciesList,
        currenciesConvert: state.currencies.currenciesConvert,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        // stats
        onRequestTop: (limit) => dispatch(requestTop(limit)),
        onRequestUsage: () => dispatch(requestUsage()),
        onToggleTopModal: () => dispatch(toggleTopModal()),
        onToggleUsageModal: () => dispatch(toggleUsageModal()),

        // currencies
        onRequestCurrenciesList: () => dispatch(requestCurrenciesList()),
        onRequestCurrenciesConvert: (convertRequest) => dispatch(requestCurrenciesConvert(convertRequest)),
    }
};

class App extends Component {
    render() {
        return (
             <MainPage { ...this.props }/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)