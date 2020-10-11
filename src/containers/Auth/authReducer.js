import * as constants from '../../constants/Auth/authConstants';

const INITIAL_STATE = {
    user: {},
    loading: true,
    error: null
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case constants.GET_USER_START:
            return { ...state, loading: true, error: null };

        case constants.GET_USER_SUCCESS:
            return { ...state, loading: false, error: null, user: payload.user };

        case constants.GET_USER_FAILURE:
            return { ...state, loading: false, user: {}, error: payload.error };

        default:
            return state;
    }
};
