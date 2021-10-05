import VideoList from './VideoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    //Replace exampleVideoData from the initial state of App with empty initial values, appropriate to the type of values it is expecting
    this.state = {
      videos: [], // []
      currentVideo: {}, // {}
      onClick: (video) => {
        this.setState({
          currentVideo: video
        });
      },
      onSubmit: (input) => {
        searchYouTube(input, (data) => {
          this.setState({
            videos: data,
            currentVideo: data[0]
          });
        });
      }
    };
  }

  componentDidMount() {
    searchYouTube('videos', (data) => {
      this.setState({
        videos: data,
        currentVideo: data[0]
      });
    });
  }

  // search(input) {
  //   var self = this;
  //   console.log('this', this);
  //   searchYouTube(input, (data) => {
  //     console.log(data);
  //     self.setState({
  //       videos: data,
  //       currentVideo: data[0]
  //     });
  //   });
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search callback={this.state.onSubmit}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.currentVideo}/></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em> <VideoList {...this.state} /></h5></div>
          </div>
        </div>
      </div>
    )
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined<
export default App;