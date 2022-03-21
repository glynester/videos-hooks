// import React from 'react';
import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import {getRandom, Constants} from '../gbHelperCode/gbHelper';


const App=()=>{
  const [videos, setVideos]=useState([]);
  const [selectedVideo, setSelectedVideo]=useState(null);

    useEffect(()=>{
      const word = getRandom(Constants.SEARCH_WORDS,1)[0];
      onTermSubmit(word);
    },[]);

    const onTermSubmit= async(term)=>{
      const response = await youtube.get('/search',{
        params: { q: term }
      });
      const responseTen=getRandom(response.data.items,10);
      setVideos(responseTen);
      setSelectedVideo(responseTen[0])
    }

    // const onVideoSelect=video=>{
    //   setSelectedVideo(video);
    // }

    return (
      <div className="ui container">
        <SearchBar onSBFormSubmit={ onTermSubmit }/>
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
