export const DUMMY_TOKEN = 'NO_AUTH_TOKEN';
const prefix = 'Bearer ';

export const setAuthToken = (token) => {
    const authToken = token.startsWith(prefix) ? token : prefix + token;
    window.localStorage.setItem('authToken',  authToken);
};

export const getAuthToken = () => {
    return window.localStorage.getItem('authToken') || DUMMY_TOKEN;
};

export const clearAuthToken = () => {
    return window.localStorage.removeItem('authToken');
};