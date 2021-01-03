import React from 'react';

function SongDetails ({selectedSong}) {
    return (
        <div>
            <h3>{selectedSong.title}</h3>
            <h5>{selectedSong.year}</h5>
        </div>
    )
}

export default SongDetails;