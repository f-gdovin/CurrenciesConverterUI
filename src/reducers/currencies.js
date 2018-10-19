import {
    REQUEST_CURRENCIES_LIST_PENDING,
    REQUEST_CURRENCIES_LIST_SUCCESS,
    REQUEST_CURRENCIES_LIST_FAILURE,
    REQUEST_CURRENCIES_CONVERT_PENDING,
    REQUEST_CURRENCIES_CONVERT_SUCCESS,
    REQUEST_CURRENCIES_CONVERT_FAILURE
} from '../constants/currencies';

const initialStateCurrencies = {
    listError: null,
    convertError: null,
    isListPending: false,
    isConvertPending: false,
    currenciesList: [],
    currenciesConvert: {
        from: '',
        to: '',
        amount: 0,
    },
};

export const currencies = (state = initialStateCurrencies, action = {}) => {
    switch (action.type) {
        // currencies list
        case REQUEST_CURRENCIES_LIST_PENDING: {
            return Object.assign({}, state, {
                isListPending: true
            });
        }
        case REQUEST_CURRENCIES_LIST_SUCCESS: {
            return Object.assign({}, state, {
                currenciesList: action.payload,
                isListPending: false
            });
        }
        case REQUEST_CURRENCIES_LIST_FAILURE: {
            return Object.assign({}, state, {
                listError: action.payload,
                isListPending: false
            });
        }

        // currencies convert
        case REQUEST_CURRENCIES_CONVERT_PENDING: {
            return Object.assign({}, state, {
                isConvertPending: true
            });
        }
        case REQUEST_CURRENCIES_CONVERT_SUCCESS: {
            return Object.assign({}, state, {
                currenciesConvert: action.payload,
                isConvertPending: false
            });
        }
        case REQUEST_CURRENCIES_CONVERT_FAILURE: {
            return Object.assign({}, state, {
                convertError: action.payload,
                isConvertPending: false
            });
        }

        default: {
            return state;
        }
    }
};