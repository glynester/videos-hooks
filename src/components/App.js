import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component{
  state = { videos:[], selectedVideo: null }

  // Asynchronous API request
  onTermSubmit= async(term)=>{
    console.log('term', term);
    // Preconfigure instance of axios
    const response = await youtube.get('/search',{
      params: { q: term }
    });
    console.log(response.data.items)
    this.setState({videos: response.data.items});
  }
// Should be defined as an arrow function as it's a callback.
  onVideoSelect=video=>{
    console.log('From App=>video',video);
    // Set state of selectedVideo.
    this.setState({selectedVideo: video});
  }

  render(){
    return (
      <div className="ui container">
        <SearchBar onSBFormSubmit={ this.onTermSubmit }/>
        {/* There were {this.state.videos.length} videos returned!!! */}
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelected={this.onVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
