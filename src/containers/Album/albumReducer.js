import * as constants from '../../constants/Album/albumConstants';

const INITIAL_STATE = {
    album: {},
    loading: true,
    error: null,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case constants.GET_ALBUM_START:
            return { ...state, loading: true, error: null };

        case constants.GET_ALBUM_SUCCESS:
            return { ...state, loading: false, album: payload.album };

        case constants.GET_ALBUM_FAILURE:
            return { ...state, loading: false, error: payload.error };
        default:
            return state;
    }
};
