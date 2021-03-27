import React from "react";
import youtube from "../api/youtube";

import SearchBar from "../SearchBar/SearchBar";
import VideoList from "../VideoList/VideoList";
import VideoDetail from "../VideoDetail/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, isLoading: true };

  onSubmit = async (e, searchQuery) => {
    e.preventDefault();
    const response = await youtube.get("/search", {
      params: {
        q: searchQuery,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video, isLoading: false });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleSubmit={this.onSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ui eleven wide column">
              <VideoDetail
                isLoading={this.state.isLoading}
                video={this.state.selectedVideo}
              />
            </div>
            <div className="ui five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
