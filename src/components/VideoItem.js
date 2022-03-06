import './VideoItem.css';
import React from 'react';

const VideoItem=({video, onVideoSelected})=>{
  // const {video}=props.video;
  // console.log("VideoItem",props.video);
  return (
    <div onClick={()=>onVideoSelected(video)} className="video-item item">
      <img className='ui image' src={video.snippet.thumbnails.medium.url}/>
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
      
    </div>
  )
}

export default VideoItem;

{/* <iframe key={video.id.videoId} type="text/html" width="640" height="360"
src={"https://www.youtube.com/embed/"+video.id.videoId}
frameborder="0">
</iframe> */}