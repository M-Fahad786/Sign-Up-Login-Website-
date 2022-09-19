// Creating Constructor For Shapes
function Shapes(width, height, color, border, borderRadius , transform) {
  this.width = width;
  this.height = height;
  this.color = color;
  this.border = border;
  this.borderRadius = borderRadius;
  this.transform = transform
}
// Constructor Ended
// Declaring Variables for Shapes
let rectangle = new Shapes("300px", "200px", "yellow", "5px solid black");
let circle = new Shapes("200px", "200px", "orange", "5px solid black", "50%");
let square = new Shapes("200px", "200px", "red" , "5px solid black");
let parallelogram = new Shapes("250px" , "200px" , "lightBlue" , "5px solid black" , undefined ,"skew(20deg)" )
// Declaration Ended
// Targeting Element
let box = document.getElementById("box");
// Targeting Ended
// Creating Shapes (Rectangle)
let rectangleBox = document.createElement("div");
rectangleBox.style.width = rectangle.width;
rectangleBox.style.height = rectangle.height;
rectangleBox.style.backgroundColor = rectangle.color;
rectangleBox.style.border = rectangle.border;
box.appendChild(rectangleBox);
// Creating Shapes (Circle)
let circleBox = document.createElement("div");
circleBox.style.width = circle.width;
circleBox.style.height = circle.height;
circleBox.style.backgroundColor = circle.color;
circleBox.style.border = circle.border;
circleBox.style.borderRadius = circle.borderRadius;
box.appendChild(circleBox);
// Creating Shapes (Square)
let squareBox = document.createElement("div");
squareBox.style.width = square.width;
squareBox.style.height = square.height;
squareBox.style.backgroundColor = square.color;
squareBox.style.border = square.border;
box.appendChild(squareBox);
// Creating Shapes (Parallelogram)
let parallelBox = document.createElement("div");
parallelBox.style.width = parallelogram.width;
parallelBox.style.height = parallelogram.height;
parallelBox.style.backgroundColor = parallelogram.color;
parallelBox.style.border = parallelogram.border;
parallelBox.style.transform = parallelogram.transform;
box.appendChild(parallelBox);