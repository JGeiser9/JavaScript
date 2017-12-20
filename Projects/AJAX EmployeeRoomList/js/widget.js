//Create the employee list of who is in the office or not
var employeeRequest = new XMLHttpRequest();
employeeRequest.open('GET', 'data/employees.json');
employeeRequest.send();
employeeRequest.onreadystatechange = function () {
  if (employeeRequest.readyState === 4) {
    var statusHTML = '<ul class="bulleted">'
      var employees = JSON.parse(employeeRequest.responseText);
      // .responseText is a JSON file of all employees, use JSON.parse
      // to convert the the JSON text file to a JS object

      //Loop through each object and build up the HTML string 'statusHTML'
      for (var i = 0; i < employees.length; i += 1) {
        if (employees[i].inoffice === true) {
          statusHTML += '<li class="in">';
        } else {
          statusHTML += '<li class="out">';
        }
        statusHTML += employees[i].name;
        statusHTML += '</li>';
      }
      statusHTML += '</ul>';
      document.getElementById('employeeList').innerHTML = statusHTML;
      // prints the string of HTML we built up in statusHTML to the page
  }
};

//Create the meeting room list of the open or taken rooms
var roomRequest = new XMLHttpRequest();
roomRequest.open('GET', 'data/rooms.json');
roomRequest.send();
roomRequest.onreadystatechange = function () {
  if (roomRequest.readyState === 4) {
      var statusHTML = '<ul class="rooms">'
      var rooms = JSON.parse(roomRequest.responseText);
      // .responseText is a JSON file of all employees, use JSON.parse
      // to convert the the JSON text file to a JS object

      //Loop through each object and build up the HTML string 'statusHTML'
      for (var i = 0; i < rooms.length; i += 1) {
        if (rooms[i].available === true) {
          statusHTML += '<li class="empty">';
        } else {
          statusHTML += '<li class="full">';
        }
        statusHTML += rooms[i].room;
        statusHTML += '</li>';
      }
      statusHTML += '</ul>';
      document.getElementById('roomList').innerHTML = statusHTML;
      // prints the string of HTML we built up in statusHTML to the page
  }
};
