class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      playingVideo: exampleVideoData[0],
    };
  }
  
  updateFromSearch(data) {
    this.setState({videos: data, playingVideo: data[0]});
  }
  
  liveSearch() {
    // this.props.searchYouTube({}, this.updateFromSearch.bind(this)); // Passes test
    this.props.searchYouTube({max: '5', query: document.getElementsByClassName('form-control')[0].value, key: window.YOUTUBE_API_KEY}, this.updateFromSearch.bind(this));
  }
  
  debounce() {
    clearTimeout(window.currentSearchRequest);
    // this.liveSearch.bind(this)(); // Passes test
    window.currentSearchRequest = setTimeout(this.liveSearch.bind(this), 500);
  }
  
  componentDidMount() {
    this.props.searchYouTube({max: '5', query: 'What does the fox say', key: window.YOUTUBE_API_KEY}, this.updateFromSearch.bind(this));
  }
  
  switchVideo(video) {
    this.setState({playingVideo: video});
  }
  
  render() {
    return (<div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          {<Search debounce={this.debounce.bind(this)} />}
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          {<VideoPlayer state={this.state} video={this.state.playingVideo}/>}
        </div>
        <div className="col-md-5">      
          {<VideoList state={this.state} play={this.switchVideo.bind(this)} videos={this.state.videos}/>}
        </div>
      </div>
    </div>);
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

