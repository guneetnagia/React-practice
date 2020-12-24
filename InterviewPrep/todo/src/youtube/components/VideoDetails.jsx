import React from 'react';

function VideoDetails({ video }) {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="">
                <iframe src={videoSrc} ></iframe>
                {video.snippet.title}
            </div>
        </div>
    );
}
export default VideoDetails;