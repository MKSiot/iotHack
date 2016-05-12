'use strict'

const request = require('request-promise');
const auth = require('./auth.js');
const fs = require('fs');

auth.fetch_uaa_token('master','admin','public_safety')
.then(function(res){
  var video_devices = [18,19,21,23,24,25,26];
  var media = [];
  video_devices.forEach(function(deviceNum){
    var initialHeaders = auth.format_headers(res.access_token, 'public_safety');
    initialHeaders.uri += '/v1/assets/10000000'+deviceNum+'/media?media-types=VIDEO&start-ts=1462748579000&end-ts=1463001006374';
    request(initialHeaders)
    .then(function(res){
      var data = 'placeholder'
      if(res){
        data = JSON.parse(res);
      }
      media.push({
        url: data._embedded.medias[0].url,
        id: '10000000' + deviceNum
      });
      if(media.length === 7){
        fs.writeFileSync('./media.json', JSON.stringify(media));
      }
    });
  })
});