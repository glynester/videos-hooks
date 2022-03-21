import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';
import { getRandom } from '../gbHelperCode/gbHelper';

const useVideos=(defaultSearchTerm)=>{
  const [videos, setVideos]=useState([]);
  useEffect(()=>{
    // onTermSubmit(defaultSearchTerm);
    search(defaultSearchTerm);
  },[]); // React requires outside variable should be listed in array argument. However when I put it in "[defaultSearchTerm]"" the YT API got called in a loop.

  // const onTermSubmit= async(term)=>{
  const search= async(term)=>{
    const response = await youtube.get('/search',{
      params: { q: term }
    });
    const responseTen=getRandom(response.data.items,10);
    // NB because this updates state in function CALLED by App component, the App component will still be automatically re-rendered as though the video state was defined directly inside the App.js file.
    setVideos(responseTen);
  }
  // Returns a list of videos and a function we can use to update that list of videos
  return [videos, search];  // React way
  // return {videos, onTermSubmit};  // more common JS way
}

export default useVideos;