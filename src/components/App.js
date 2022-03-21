// import React from 'react';
import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import youtube from '../apis/youtube';
import {getRandom, Constants} from '../gbHelperCode/gbHelper';
import useVideos from '../hooks/useVideos';


const App=()=>{
  const [selectedVideo, setSelectedVideo]=useState(null);  
    const term = getRandom(Constants.SEARCH_WORDS,1)[0];
    // Call custom hook in the same way you would call any other hook.
    const [videos, search] = useVideos(term);

    useEffect(()=>{
      setSelectedVideo(videos[0])
    },[videos]);

    return (
      <div className="ui container">
        {/* <SearchBar onSBFormSubmit={ onTermSubmit }/> */}
        <SearchBar onSBFormSubmit={ search }/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                onVideoSelected={setSelectedVideo} 
                // Equivalent
                // onVideoSelected={(video)=>setSelectedVideo(video)} 
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;
