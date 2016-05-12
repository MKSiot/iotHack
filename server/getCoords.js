var request = require('request-promise');
var auth = require('./auth.js');
var fs = require('fs');

auth.fetch_uaa_token('master','admin','public_safety')
.then(function(res){
  var media = fs.readFileSync('./media.json');
  var mediaWithCoords = [];
  media = JSON.parse(media);
  media.forEach(function(video){
    var initialHeaders = auth.format_headers(res.access_token, 'public_safety');
    initialHeaders.uri += '/v1/assets/'+video.id;
    request(initialHeaders)
    .then(function(res){
      var data = JSON.parse(res);
      video.coords = data.coordinates.P1;
      mediaWithCoords.push(video);
      if(mediaWithCoords.length === 7){
        fs.writeFileSync('./mediaWithCoords.json', JSON.stringify(mediaWithCoords));
      }
    })
  })
});