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

    const onVideoSelect=video=>{
      setSelectedVideo(video);
    }

    return (
      <div className="ui container">
        <SearchBar onSBFormSubmit={ onTermSubmit }/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelected={onVideoSelect} videos={videos}/>
            </div>
          </div>
        </div>
      </div>
    )
}

// class App extends React.Component{
//   state = { videos:[], selectedVideo: null }

//   // Do a default video search when the page first loads.
//   componentDidMount(){
//     const word = getRandom(Constants.SEARCH_WORDS,1)[0];
//     this.onTermSubmit(word);
//   }

//   // Asynchronous API request
//   onTermSubmit= async(term)=>{
//     console.log('term', term);
//     // Preconfigure instance of axios
//     const response = await youtube.get('/search',{
//       params: { q: term }
//     });
//     console.log("data",response.data.items);
//     // Use first video returned as default to display.
//     const responseTen=getRandom(response.data.items,10);
//     this.setState({
//       // videos: response.data.items,
//       // selectedVideo: response.data.items[0]
//       videos: responseTen,
//       selectedVideo: responseTen[0]
//     });
//   }
// // Should be defined as an arrow function as it's a callback.
//   onVideoSelect=video=>{
//     console.log('From App=>video',video);
//     // Set state of selectedVideo.
//     this.setState({selectedVideo: video});
//   }

//   render(){
//     return (
//       <div className="ui container">
//         <SearchBar onSBFormSubmit={ this.onTermSubmit }/>
//         {/* There were {this.state.videos.length} videos returned!!! */}
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList onVideoSelected={this.onVideoSelect} videos={this.state.videos}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }

// }

export default App;
