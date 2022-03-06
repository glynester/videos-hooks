import React from 'react';

const VideoDetail=({video})=>{
  // video ||={id:{videoId:1},snippet:{title:'Example'}};
  //Conditional rendering. Before we click on a video, the value of 'video' is null.
  if (!video) {
    return <div>Loading...</div>;
  }
  // console.log("VideoDetail",video);
  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      {/* <iframe key={video.id.videoId} type="text/html" width="640" height="360"
      src={"https://www.youtube.com/embed/"+video.id.videoId}
      frameborder="0">
      </iframe> */}
    </div>
  )
}

export default VideoDetail;