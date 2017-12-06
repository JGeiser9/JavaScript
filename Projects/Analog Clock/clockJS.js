setInterval(function(){
  const date = new Date();
    
  updateTime(date);
  updateClock(date);
    
}, 1000);

function updateClock(date){
  //Set variables to corresponding ID's
  const secHand = document.getElementById("second-hand").style,
        minHand = document.getElementById("minute-hand").style,
        hrHand = document.getElementById("hour-hand").style;
  
  //Setting the hands to transform with the conversion to degrees
  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

//returns the given time 
function updateTime(date){
  const time = date.getHours() + date.getMinutes() + date.getSeconds();
  return time;
} 

