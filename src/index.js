import React, { Component } from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from "./components/searchBar2.js"
import VideoList from "./components/videoList.js"
import VideoDetail from "./components/VideoDetail.js"

const apiKey = "AIzaSyDgpUIreMB3Iuybv3t2cnW5N0tpXDfmjec";


class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ""
    }
    this.videoSearch();
  }

  onInputChange = (term) => {
    this.setState({term: term}, () => {
      console.log(this.state.term);
      this.videoSearch();
    });
  }

  videoSearch = () => {
    YTSearch({key: apiKey, term: this.state.term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }
  render(){

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.onInputChange(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos = {this.state.videos} />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector(".container"))
