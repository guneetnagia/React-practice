import React, { useState } from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';
import { listsongs } from '../json/songs';
import './App.css'

function App() {
    const [selectedSong,setSelectedSong] = useState('');
    const { songs } = listsongs;
    const handleClick = (song) => {
        console.log(song)
        setSelectedSong(song)
    }
    return (
        <div className="main-component">
            <SongList className="listcomponent" songs={songs} selectsong={handleClick}/>
            <SongDetails className="selectedSong" selectedSong = {selectedSong} />
        </div>
    );
}
export default App;