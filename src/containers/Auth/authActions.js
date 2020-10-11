import * as constants from '../../constants/Auth/authConstants';

export const getUserStart = () => ({
    type: constants.GET_USER_START
});

export const getUserSuccess = payload => ({
    type: constants.GET_USER_SUCCESS,
    payload
});

export const getUserFailure = payload => ({
    type: constants.GET_USER_FAILURE,
    payload
});
