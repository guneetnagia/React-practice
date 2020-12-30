import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

function App(){
const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState('');

useEffect(()=>{
    onTermSubmit('guneet')
},[])

   const onTermSubmit = async (searched) => {
       const response = await youtube.get('/search',{
           params:{
               q:searched
           }
       });
       console.log(response.data.items)
       setVideos(response.data.items)
   }

   const handleSelectedVideo = (video) => {
        setSelectedVideo(video);
   }
    return(
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <VideoList onVideoSelect = {handleSelectedVideo} videos={videos}></VideoList>
            <VideoDetails video={selectedVideo}/>
        </div>
    );
}
export default App;