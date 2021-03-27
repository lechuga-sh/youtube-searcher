import React from "react";
import VideoItem from "../VideoItem/VideoItem";

class VideoList extends React.Component {
  render() {
    const { videos } = this.props;

    return (
      <div className="ui relaxed divided list">
        {videos.map((video) => (
          <VideoItem
            title={video.snippet.title}
            thumb={video.snippet.thumbnails.medium.url}
            video={video}
            onVideoSelect={this.props.onVideoSelect}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
