import React from 'react';
import VideoItem from './VideoItem';

function VideoList({videos,onVideoSelect}) {
    const renderedList = videos.map((video) => {
                return <VideoItem key={video.id.videoId} video = {video} onVideoSelect={onVideoSelect}/>
            });
    return(
        <div>
            <h1>Video List : {videos.length}</h1>
            {renderedList}
        </div>
    );
}
export default VideoList;