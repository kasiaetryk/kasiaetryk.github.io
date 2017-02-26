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

function showHide(){
    var dialogBox = document.getElementById('dialogBox1');
    var showDialog = document.getElementById('showDialog1');

    if(dialogBox.className === 'hide'){
      dialogBox.className = '';
      showDialog.className = 'hide';
    } else if (dialogBox.className === '') {
      dialogBox.className = 'hide';
      showDialog.className = 'press';
    }
  }
document.getElementById('showDialog1').addEventListener('click', showHide);
document.getElementById('close1').addEventListener('click', showHide);
/*document.getElementById('showDialog2').addEventListener('click', showHide('dialogBox2', 'showDialog2'));
document.getElementById('showDialog3').addEventListener('click', showHide('dialogBox3', 'showDialog3'));
document.getElementById('showDialog4').addEventListener('click', showHide('dialogBox4', 'showDialog4'));
document.getElementById('showDialog5').addEventListener('click', showHide('dialogBox5', 'showDialog5'));
document.getElementById('showDialog6').addEventListener('click', showHide('dialogBox6', 'showDialog6'));
document.getElementById('close1').addEventListener('click', showHide('dialogBox1','close1'));
document.getElementById('close2').addEventListener('click', showHide('dialogBox2','close2'));
document.getElementById('close3').addEventListener('click', showHide('dialogBox3','close3'));
document.getElementById('close4').addEventListener('click', showHide('dialogBox4','close4'));
document.getElementById('close5').addEventListener('click', showHide('dialogBox5','close5'));
document.getElementById('close6').addEventListener('click', showHide('dialogBox6','close6'));*/
