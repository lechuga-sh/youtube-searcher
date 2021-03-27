import React from "react";
import "./video-item.css";

class VideoItem extends React.Component {
  render() {
    return (
      <div 
        key={this.props.video.id.videoId || this.props.video.id.channelId}
        className="item video-item"
        onClick={(e)=>{this.props.onVideoSelect(this.props.video)}}>
        <img
          className="ui image"
          src={this.props.thumb}
          alt={this.props.video.snippet.description}
        />
        <div className="content">
          <div className="header">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
