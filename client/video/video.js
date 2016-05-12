angular.module('neighborhoodwatch.video', [])

.controller('video', function($state, $scope) {

  var vids = {
    1000000018: {
      url: 'https://www.youtube.com/embed/VpWri7rz5bA',
      coords: [32.711653,-117.157314]
    },
    1000000025: {
      url: 'https://www.youtube.com/embed/Lfy1MPNmFjk',
      coords: [32.711628,-117.156618]
    },
    1000000021: {
      url: 'https://www.youtube.com/embed/yhubhyTw1kk',
      coords: [32.712514,-117.158185]
    },
    1000000024: {
      url: 'https://www.youtube.com/embed/qir3qaNUI2c',
      coords: [32.712471,-117.158423]
    },
    1000000026: {
      url: 'https://www.youtube.com/embed/EmP0_eEnrvc',
      coords: [32.711421,-117.157264]
    },
    1000000019: {
      url: 'https://www.youtube.com/embed/5py4jw2Y1yw',
      coords: [32.712668,-117.157546]
    }
  };

  var youtubeStyles = '?autoplay=1&theme=light&loop=1&showinfo=0&modestbranding=1&controls=0&autohide=1';

  function produceVideo(url){
    return '<iframe width="560" height="315" src="'+url+'?&autoplay=1&theme=light&loop=1&showinfo=0&modestbranding=1&controls=0&autohide=1" frameborder="0" allowfullscreen></iframe>'
  }

  var initMap = function(){
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      zoom:17,
      center: new google.maps.LatLng(32.712514,-117.158185)
    });
    for(var vid in vids){
      console.dir(vids[vid]);
      vids[vid].marker = new google.maps.Marker({
          position: new google.maps.LatLng(vids[vid].coords[0],vids[vid].coords[1]),
          map: map
      });
      var mark = vids[vid].marker;
      mark.url = vids[vid].url;
      google.maps.event.addListener(mark, 'click', function(){
        $('.video-container').html(produceVideo(this.url));
      });
    };
  };


  $scope.$on('$viewContentLoaded', function(){
    initMap();
  });



  $scope.report = function() {
    $state.go('crimeForm');
  };

});