// grabbing the reset button
var reset = document.getElementById('button');
console.log(reset);
// grabbing the Table
var squares = document.querySelectorAll("td");
console.log(squares);
// looping through every table data to set the textContent
// to blank
function reseting(){
  // here we need to loop through every td and set the content to blank
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}
// here adding the event to the reset button so that
//  when the button gets clicked resetting fucntion gets called
// and that fucntion will then loop through all the text content of the
// td element to set them to " " blank.
reset.addEventListener("click", reseting);
/////////////////////////////////////////////////////////////////////////

// we need to change the marker of the squares depending on
// there current marker position
function changeMarker(){
  // if square contents nothing the replace with "X"
  if (this.textContent === "") {
    this.textContent = "X";
  }
  // if square content is "X" change content to "O"
  else if (this.textContent === "X") {
    this.textContent = "O";
  }
  // if neither "X" nor "O" is the content then change it to blank
  else {
    this.textContent = "";
  }
}

// now we need to loop through the table td to apple this acordingly!
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker)
}
