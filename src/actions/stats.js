import {
    REQUEST_STATS_TOP_PENDING,
    REQUEST_STATS_TOP_SUCCESS,
    REQUEST_STATS_TOP_FAILURE,
    REQUEST_STATS_USAGE_PENDING,
    REQUEST_STATS_USAGE_SUCCESS,
    REQUEST_STATS_USAGE_FAILURE,
    TOGGLE_TOP_MODAL,
    TOGGLE_USAGE_MODAL
} from '../constants/stats';
import { STATS_TOP_API, STATS_USAGE_API } from '../services/api';

export const requestTop = (limit = 10) => dispatch => {
    dispatch({type: REQUEST_STATS_TOP_PENDING});
    fetch(STATS_TOP_API, {
        body: JSON.stringify({ limit: limit }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'post',
    })
        .then(resp => resp.json())
        .then(data => dispatch({ type: REQUEST_STATS_TOP_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_STATS_TOP_FAILURE, payload: err }));
};

export const requestUsage = () => dispatch => {
    dispatch({type: REQUEST_STATS_USAGE_PENDING});
    fetch(STATS_USAGE_API, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'get',
    })
        .then(resp => resp.json())
        .then(data => dispatch({ type: REQUEST_STATS_USAGE_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_STATS_USAGE_FAILURE, payload: err }));
};


export const toggleTopModal = () => ({
    type: TOGGLE_TOP_MODAL,
});

export const toggleUsageModal = () => ({
    type: TOGGLE_USAGE_MODAL,
});