import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

var url = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: url,
    type: 'GET',
    contentType: 'application/json',
    data: { q: query },
    success: callback || function(data) {
      console.log('success');
    },
    error: () => {
      console.log('error');
    }
  });
};

export default searchYouTube;