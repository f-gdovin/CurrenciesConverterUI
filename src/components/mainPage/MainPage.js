import React, { Component } from 'react';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import Header from '../header/Header';
import { Layout } from '../layout/Layout';
import Navigation from '../navigation/Navigation';
import Modal from '../modal/Modal';
import Top from '../stats/Top';
import Usage from '../stats/Usage';
import { Link, Route, Switch } from 'react-router-dom';
import Translate from '../translate/Translate';

const mainScreen =
    <div className='center flex flex-wrap flex-wrap-ns inline-flex-l inline-flex-m flex-row-m flex-row-l justify-center w-80 pa2-m pa2-l'>
        <div className='search-term bw1 br--left fl-ns w-100 w-100-ns w-100-m w-40-l pv2 pv2-ns pv2-m pa2-l mh4-l'>
            <Link to='/translate'>
                <img src='/translate.jpg' alt='translate' height='500px' width='500px'/>
            </Link>
        </div>
        <div className='result-list bw1 br--right fl-ns w-100 w-100-ns w-100-m w-40-l pv2 pv2-ns pv2-m pa2-l mh4-l'>
            <Link to='/learn'>
                <img src='/learn.png' alt='learn' height='500px' width='500px'/>
            </Link>
        </div>
    </div>;

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

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

        return (<div className='tc'>
            <ErrorBoundary>
                <Layout>
                    <div className='inline-flex flex-row justify-around w-100 pa2'>
                        <Header/>
                        <Navigation
                            onToggleTopModal={onToggleTopModal}
                            onToggleUsageModal={onToggleUsageModal}
                        />
                    </div>

                    { isTopOpen && <Modal onClose={onToggleTopModal}>
                        <Top topCurrencies={topCurrencies}/>
                    </Modal>}
                    { isUsageOpen && <Modal onClose={onToggleUsageModal}>
                        <Usage totalAmountConverted={totalAmountConverted} totalRequestsMade={totalRequestsMade}/>
                    </Modal>}
                    <Switch>
                        <Route path='/translate' render={() => <Translate {...translateProps} />}/>
                        <Route path='/learn' render={() => <h1>Learning component will come here</h1>}/>
                        <Route path='/' render={() => mainScreen}/>
                        }/>
                    </Switch>
                </Layout>
            </ErrorBoundary>
        </div>)
    }
}

export default MainPage;