import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';
import { getRandom } from '../gbHelperCode/gbHelper';

const useVideos=(defaultSearchTerm)=>{
  const [videos, setVideos]=useState([]);
  useEffect(()=>{
    search(defaultSearchTerm);
  },[]); 
  const search= async(term)=>{
    const response = await youtube.get('/search',{
      params: { q: term }
    });
    const responseTen=getRandom(response.data.items,10);
    setVideos(responseTen);
  }
  return [videos, search];  
}

export default useVideos;