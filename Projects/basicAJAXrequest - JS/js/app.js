var xhr = new XMLHttpRequest(); //Step 1: Create an XMLHTTP Request object
xhr.open('GET', 'sidebar.html'); //Step 3: Open a request
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    document.getElementById('ajax').innerHTML = xhr.responseText;
  }
}; //Step 2: Create a callball function that runs when the response is sent back

function sendAJAX() {
  xhr.send();
  document.getElementById('load').style.display = "none";
}; //Step 4: Send the request...In this case when the button is clicked
