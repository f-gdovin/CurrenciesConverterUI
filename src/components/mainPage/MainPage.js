import React, { Component } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import { Layout } from '../layout/Layout';
import Logo from '../logo/Logo';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import Modal from '../modal/Modal';
import Top from '../stats/Top';
import Usage from '../stats/Usage';
import Currency from '../currency/Currency';

class MainPage extends Component {
    render() {
        const {
            // stats
            onRequestTop,
            onRequestUsage,
            onToggleTopModal,
            onToggleUsageModal,
            topError,
            usageError,
            isTopPending,
            isUsagePending,
            topCurrencies,
            totalAmountConverted,
            totalRequestsMade,
            isTopOpen,
            isUsageOpen,

            // currencies
            onRequestCurrenciesList,
            onRequestCurrenciesConvert,
            listError,
            convertError,
            isListPending,
            isConvertPending,
            currenciesList,
            currenciesConvert,
        } = this.props;

        const currencyProps = {
            onRequestCurrenciesList,
            onRequestCurrenciesConvert,
            listError,
            convertError,
            isListPending,
            isConvertPending,
            currenciesList,
            currenciesConvert,
        };

        return (<div className='tc'>
            <ErrorBoundary>
                <Layout>
                    <div className='inline-flex flex-row justify-between w-100 pa2'>
                        <Logo/>
                        <Header/>
                        <Navigation
                            onToggleTopModal={onToggleTopModal}
                            onToggleUsageModal={onToggleUsageModal}
                        />
                    </div>

                    { isTopOpen && <Modal onOpen={onRequestTop} onClose={onToggleTopModal}>
                        <Top isPending={isTopPending} error={topError} topCurrencies={topCurrencies}/>
                    </Modal>}
                    { isUsageOpen && <Modal onOpen={onRequestUsage} onClose={onToggleUsageModal}>
                        <Usage isPending={isUsagePending} error={usageError} totalAmountConverted={totalAmountConverted} totalRequestsMade={totalRequestsMade}/>
                    </Modal>}
                    <Currency {...currencyProps} />
                </Layout>
            </ErrorBoundary>
        </div>)
    }
}

export default MainPage;