function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), 
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
};

function myFunction() {
    var x = document.getElementById("topMenu");
    if (x.className === "menu") {
        x.className += " hamburger";
    } else {
        x.className = "menu";
    }
}

function noneSlogan {
  var y = document.getElementById("topSlogan");
  if ()

}