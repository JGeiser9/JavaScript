setInterval(function(){
  const date = new Date();
    
  updateTime(date);
  updateClock(date);
    
}, 1000);

function updateClock(date){
  const secHand = document.getElementById("second-hand").style,
        minHand = document.getElementById("minute-hand").style,
        hrHand = document.getElementById("hour-hand").style;
  
  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

function updateTime(date){
  date.getHours() + date.getMinutes() + date.getSeconds();
}
