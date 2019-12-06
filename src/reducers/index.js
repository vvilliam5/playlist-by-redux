import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'NoScrubs', duration: '2:13' },
        { title: 'Like Thst', duration: '4:04' },
        { title: 'Back to Back', duration: '3:12' },
        { title: 'My Man', duration: '2:20' },
    ]
}

const songSelectedReducer = (songSelected = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return songSelected;
}

export default combineReducers({
    song: songReducer,
    songSelected: songSelectedReducer
});