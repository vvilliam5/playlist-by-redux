import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selected }) => {
    if (!selected) {
        return <div>Please Click a song</div>
    }
    return (
        <div>
            <h3>{selected.title}</h3>
            <p>{selected.duration}</p>
        </div>
    )
}

const stateToProps = (state) => {
    return { selected: state.songSelected };
}

export default connect(stateToProps)(SongDetail);