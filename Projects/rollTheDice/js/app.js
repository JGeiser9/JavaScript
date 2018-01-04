var button = document.getElementById("button");
var dice = new Dice(6); // new instance


// ----- Constructor Function -----

/*
function Dice (sides) {
  this.sides = sides;
  this.roll = function () {
    var randNum = Math.floor(Math.random() * this.sides) + 1;
    return randNum;
  }
} // constructor function for the roll of the dice  
*/

function Dice(sides) {
  this.sides = sides;
}

Dice.prototype.roll = function () {
  var randNum = Math.floor(Math.random() * this.sides) + 1;
  return randNum;
} /* Prototype for rolling the dice to share between all instances
     rather than creating every instance w/ the .roll method */


// ----- Functionality -----
button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}
