import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => { // props.song
    if (!song) {
        return <div>Select a song!</div>
    }

    return (
        <div>
            <h3>Defatils for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>

        </div>
    );
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong } // 꼭 이름을 똑같이 selectedSong으로 할 필요는 없다고 한다
};

export default connect(mapStateToProps)(SongDetail);