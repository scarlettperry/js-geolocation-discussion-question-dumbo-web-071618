console.log("hello")

var x = document.getElementById("geo-practice");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
                //0 - lat   /1 - long
let friends = [[40.779437,-73.963244],[40.738527,-74.005363],[40.729975,-73.980926]]
//make function to run through each friend and use distance as callback

function distanceBetweenUs (array) {
  let dist = null;
  let closestF
  for (let friend of array) {
    let currentDist = distance(-73.98775280000001, 40.7009109, friend[1], friend[0])
    if (dist === null || currentDist < dist ) {
      dist = currentDist;
      closestF = friend;
    }
  }
  return [closestF, dist];
}


function distance(lon1, lat1, lon2, lat2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2-lat1).toRad();  // Javascript functions in radians
  var dLon = (lon2-lon1).toRad();
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

/** Converts numeric degrees to radians */
if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

window.navigator.geolocation.getCurrentPosition(function(pos) {
  console.log(pos);
  console.log(
    distance(pos.coords.longitude, pos.coords.latitude, 42.37, 71.03)
  );
});
