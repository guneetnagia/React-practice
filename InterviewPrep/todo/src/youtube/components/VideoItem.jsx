import React from 'react';
import './VideoItem.css';

function VideoItem({video,onVideoSelect}){
    return(
        <div onClick={()=>onVideoSelect(video)} className="video-item item">
            <img src={video.snippet.thumbnails.medium.url}></img>
            {video.snippet.title}
        </div>
    );
}

export default VideoItem;