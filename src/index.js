import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import 'tachyons';
import App from './containers/App';
import './index.css';
import { stats } from './reducers/stats';
import { currencies } from './reducers/currencies';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();

const rootReducer = combineReducers({ stats, currencies });

const composeEnhancers =
    // in case we are running in development mode, browser is chrome and Redux Devtools are installed, enable them
    process.env.NODE_ENV === 'development' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware, logger),
);

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
