  function removeTransition(event) {
    if (event.propertyName !== 'transform') {
      return;  
    } else {
       event.target.classList.remove('playSound'); 
    }
  }

function playSound(event) {
    //Using template literals to set the audio file corresponding to the keycode of the key pressed
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    
    //Using template literals to set the key var to div with the keycode pressed
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    
    //If no audio is being selected by a keypress or the key pressed has no audio
    if (!audio){
        return; //Do nothing
    } else {
        //Otherwie...
        key.classList.add('playSound'); //Add the class playing to get different styling
        audio.currentTime = 0; //Start the audio file at the beginning
        audio.play(); //Play the selected audio file 
    }
  }

//Setting the var 'keys' to the array returned by selecting all elements with a class of 'key'
const keys = Array.from(document.querySelectorAll('.key'));

//Listening for the end of the css transition then removing the class 'playSound' 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//Runs the playSound function on keypress
window.addEventListener('keydown', playSound);
