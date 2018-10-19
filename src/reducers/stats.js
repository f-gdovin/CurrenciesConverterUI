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

const initialStateState = {
    topError: null,
    usageError: null,
    isTopPending: false,
    isUsagePending: false,
    topCurrencies: [],
    totalAmountConverted: 0,
    totalRequestsMade: 0,
    isTopOpen: false,
    isUsageOpen: false
};

export const stats = (state = initialStateState, action = {}) => {
    switch (action.type) {
        // top currencies
        case REQUEST_STATS_TOP_PENDING: {
            return Object.assign({}, state, {
                isTopPending: true
            });
        }
        case REQUEST_STATS_TOP_SUCCESS: {
            return Object.assign({}, state, {
                topCurrencies: action.payload,
                isTopPending: false
            });
        }
        case REQUEST_STATS_TOP_FAILURE: {
            return Object.assign({}, state, {
                topError: action.payload,
                isTopPending: false
            });
        }

        // usage
        case REQUEST_STATS_USAGE_PENDING: {
            return Object.assign({}, state, {
                isUsagePending: true
            });
        }
        case REQUEST_STATS_USAGE_SUCCESS: {
            return Object.assign({}, state, {
                totalAmountConverted: action.payload.totalAmountConverted,
                totalRequestsMade: action.payload.totalRequestsMade,
                isUsagePending: false
            });
        }
        case REQUEST_STATS_USAGE_FAILURE: {
            return Object.assign({}, state, {
                usageError: action.payload,
                isUsagePending: false
            });
        }

        // open/close modals
        case TOGGLE_TOP_MODAL: {
            return Object.assign({}, state, { isTopOpen: !state.isTopOpen });
        }
        case TOGGLE_USAGE_MODAL: {
            return Object.assign({}, state, { isUsageOpen: !state.isUsageOpen });
        }

        default: {
            return state;
        }
    }
};