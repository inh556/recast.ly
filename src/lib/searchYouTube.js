var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      'part': 'snippet',
      'maxResults': '5' /*options.max*/,
      'q': 'surfing' /*options.query*/,
      'key': window.YOUTUBE_API_KEY /*options.key*/,
      'videoEmbeddable': 'true',
      'type': 'video',
    },
    success: (data) => { 
      console.log(data.items); 
      // callback(data.items);
    },
    error: (data) => { console.log('Error' + data); }
  });
};

window.searchYouTube = searchYouTube;