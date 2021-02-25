// Set up the image files to be used.
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.

theImages[0] = 'images/traffic1.png'
theImages[1] = 'images/traffic2.png'
theImages[2] = 'images/traffic3.jfif'
theImages[3] = 'images/traffic4.png'

// do not edit anything below this line

var j = 0
var p = theImages.length;
var preBuffer = new Array()
for (i = 0; i < p; i++){
   preBuffer[i] = new Image()
   preBuffer[i].src = theImages[i]
}
var whichImage = Math.round(Math.random()*(p-1));
function showImage(){
//document.write('<img src="'+theImages[whichImage]+'">');
document.getElementById('print').innerHTML = '<img src="'+theImages[whichImage]+'">';
document.getElementById('getimage').blur();
	
        fetch('./match.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });	
			
document.getElementById('getimage').style.display = "none";
document.getElementById('goback').style.display = "block";
document.getElementById('submit').style.display = "block";
document.getElementById('picturecontainer').style.display = "block";
return;
}

function GoToHomePage()
  {
	document.getElementById('getimage').blur();  
    location.reload(); 
  }

function appendData(data) {
  var mainContainer = document.getElementById("optionscontainer");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
    mainContainer.appendChild(div);
  }
}
