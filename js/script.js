function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), 
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

function myFunction() {
    var x = document.getElementById("topMenu");
    var y = document.getElementById("topSlogan");
    if (x.className === "menu") {
        x.className += " hamburger";
        y.style.visibility = "hidden";
    } else {
        x.className = "menu";
        y.style.visibility = "visible";
    }
}
