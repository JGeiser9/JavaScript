var button = document.getElementById("button"); // assign the html button to the button variable
var dice = {
  sides: 6,
  roll: function () {
    var randNum = Math.floor(Math.random() * this.sides) + 1; // .floor never reaches 0, must add one to get 1 - 6
    return randNum; // return the value of the variable randNum
  } // end roll method
}

button.onclick = function() {
  var result = dice.roll(); // set the variable result to the random number
  printNumber(result); // call the function and pass the value to change the innerHTML to the random number
};

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}
