import './VideoItem.css';
import React from 'react';

const VideoItem=({video, onVideoSelected})=>{
  // const {video}=props.video;
  // console.log("VideoItem",props.video);
  return (
    <div onClick={()=>onVideoSelected(video)} className="video-item item">
      <img 
        className='ui image' 
        src={video.snippet.thumbnails.medium.url} 
        alt={video.snippet.title} 
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
      
    </div>
  )
}

export default VideoItem;

