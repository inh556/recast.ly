ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
ReactDOM.render(
  <VideoList videos={exampleVideoData} />,
  document.getElementsByClassName('col-md-5')[0]
);

ReactDOM.render(
  <VideoPlayer video={exampleVideoData[0]} />,
  document.getElementsByClassName('col-md-7')[0]
);
