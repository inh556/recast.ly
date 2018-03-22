var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      'part': 'snippet',
      'maxResults': options.max,
      'q': options.query,
      'key': options.key,
      'videoEmbeddable': 'true',
      'type': 'video',
    },
    success: (data) => { 
      callback(data.items);
    },
    error: (data) => { console.log('Error' + data); }
  });
};

window.searchYouTube = searchYouTube;
window.currentSearchRequest = null; // for debouncing