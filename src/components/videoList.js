import React from "react";
import VideoListItem from "./videoListItem.js";

const VideoList = (props) => {
    const videoList = props.videos.map((video) => {
    return(
      <VideoListItem onVideoSelect={Video => props.onVideoSelect(Video)} key = {video.etag} video = {video}/>
    );
  })

  return(
    <ul className = "col-md-4 list-group">
      {videoList}
    </ul>
  );
}

export default VideoList;
