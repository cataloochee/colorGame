var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

// Easy Button Logic
easyBtn.addEventListener("click", function (){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

// Hard Button Logic
hardBtn.addEventListener("click", function (){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
});

// Reset Button Logic
resetButton.addEventListener("click", function(){
	// generate new colors
	colors = generateRandomColors(numSquares);

	// pick a new random color from array
	pickedColor = pickColor();

	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	// change color of squares (loop)
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}

	// reset the h1 background
	h1.style.background = "steelblue";

	// reset the button text
	this.textContent = "New Colors";

	// reset the messageDisplay
	messageDisplay.textContent = " "; 
});

// Color Display Code
colorDisplay.textContent = pickedColor;


// Game Logic
for(var i = 0; i < squares.length; i++) {
	// add square colors
	squares[i].style.background = colors[i];

	// add click listeners to all squares
	squares[i].addEventListener("click", function(){
		// grab color of clicked square
		var clickedColor = this.style.background;

		// compare color of clicked square & pickedColor
		if (pickedColor === clickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			reset.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

// change the color of all square backgrouds when correct
function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

// Pick color from "arr" to try and guess
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

// Push Random Colors into "arr"
function generateRandomColors(num) {
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; i++) {
		// get random color and push into arr
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

// Generate Random RGB Color
function randomColor() {
	// pick a red 0-255, green 0-255 & blue 0-255
	// red
	var r = Math.floor(Math.random() * 256);
	// green
	var g = Math.floor(Math.random() * 256);
	// blue
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}