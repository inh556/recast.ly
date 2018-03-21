ReactDOM.render(
  <App />, document.getElementById('app')
);
ReactDOM.render(
  <VideoList videos={exampleVideoData} />,
  document.getElementsByClassName('col-md-5')[0]
);