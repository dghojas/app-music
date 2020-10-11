import * as constants from '../../constants/Track/trackConstants';

const INITIAL_STATE = {
    list: [],
    song: {},
    isPlaying: false,
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case constants.SET_LIST:
            return { ...state, list: payload.list };
        case constants.SET_SONG:
            return { ...state, song: payload.song, isPlaying: true };
        case constants.RESUME_SONG:
            return {
                ...state,
                isPlaying: true,
            };
        case constants.PAUSE_SONG:
            return {
                ...state,
                isPlaying: false,
            };
        default:
            return state;
    }
};
