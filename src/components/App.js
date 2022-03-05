import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component{
  state = { videos:[] }

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

  render(){
    return (
      <div className="ui container">
        <SearchBar onSBFormSubmit={ this.onTermSubmit }/>
        There were {this.state.videos.length} videos returned!!!
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }

}

export default App;
