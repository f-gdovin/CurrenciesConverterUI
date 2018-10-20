import {
    REQUEST_CURRENCIES_LIST_PENDING,
    REQUEST_CURRENCIES_LIST_SUCCESS,
    REQUEST_CURRENCIES_LIST_FAILURE,
    REQUEST_CURRENCIES_CONVERT_PENDING,
    REQUEST_CURRENCIES_CONVERT_SUCCESS,
    REQUEST_CURRENCIES_CONVERT_FAILURE
} from '../constants/currencies';
import { CURRENCIES_LIST_API, CURRENCIES_CONVERT_API } from '../services/api';

export const requestCurrenciesList = () => dispatch => {
    dispatch({type: REQUEST_CURRENCIES_LIST_PENDING});
    fetch(CURRENCIES_LIST_API, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'get',
    })
        .then(resp => resp.json())
        .then(data => dispatch({ type: REQUEST_CURRENCIES_LIST_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_CURRENCIES_LIST_FAILURE, payload: err }));
};

export const requestCurrenciesConvert = (convertRequest) => dispatch => {
    dispatch({ type: REQUEST_CURRENCIES_CONVERT_PENDING, payload: convertRequest });
    fetch(CURRENCIES_CONVERT_API, {
        body: JSON.stringify(convertRequest),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
    })
        .then(resp => resp.json())
        .then(data => dispatch({ type: REQUEST_CURRENCIES_CONVERT_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_CURRENCIES_CONVERT_FAILURE, payload: err }));
};