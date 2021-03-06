import React from 'react';
import VideoItem from './VideoItem';

const VideoList=({videos, onVideoSelected})=>{
  // console.log("VideoList=>",videos);
  const renderedList=videos.map(video=>{
    return (
      <VideoItem 
      onVideoSelected={onVideoSelected} 
      video={video} 
      key={video.id.videoId}/>
    )
  })
  // console.log('videoArray',  renderedList);
  return (
    <div className='ui relaxed divided list'>
      {renderedList}
    </div>
  );

}

export default VideoList;

