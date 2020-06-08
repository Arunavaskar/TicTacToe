var header = document.querySelector("h1");

function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i<6; i++){
    color += letters[Math.floor(Math.random()*16)];
  }
  return color;
}

function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// A Javascript function used to run a certain function within a time interval(millisecond)
setInterval("changeHeaderColor()", 500);
