import React from "react";

class VideoDetail extends React.Component {
  render() {
    if (this.props.isLoading) {
      return (
        <h2>Loading . . .</h2>
      );
    }

    const videoSource = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;

    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe title={this.props.video.id.videoId} src={videoSource} />
        </div>
        <div className="ui segment">
          <h1 className="ui header">{this.props.video.snippet.title}</h1>
          <p>{this.props.video.snippet.description}</p>
        </div>
        <div />
      </div>
    );
  }
}

export default VideoDetail;
