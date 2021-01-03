import React, { useEffect } from 'react';

function SongList({songs, selectsong}) {
    return (
        <div>
            <h3>Songs List</h3>
            {
                songs.filter(e=>e.year>2010).sort((song1, song2) => song2.year - song1.year)
                    .map((song, idx) => (
                        <div key={idx} onClick={()=>selectsong(song)}>{song.title}</div>
                    ))
            }
        </div>
    )
}

export default SongList;