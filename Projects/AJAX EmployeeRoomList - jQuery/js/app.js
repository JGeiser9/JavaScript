/* Create a request for the JSON files. In this project the JSON files are local and preset rather than a response from
   a server. The .each loop builds the html for each employee based on if they are in the office or not. The string 
   statusHTML is then placed in an empty div "employeeList". The same process is used for the second .getJSON request
   for meeting rooms */

$(document).ready(function () {

  $.getJSON("../data/employees.json", function (response) {
    var statusHTML = '<ul class="bulleted">'; //create list
    $.each(response, function (index, employee) {
      //if statement to check the JSON data for inoffice status
      if (employee.inoffice === true) {
        statusHTML += '<li class="in">'; //add list element w/ in class
      } else {
        statusHTML += '<li class="out">';//add list element w/ out class
      }
      statusHTML += employee.name + '</li>'; //add employee name to list
    }); //end .each
    statusHTML += '</ul>'; //add closing tag
    $('#employeeList').html(statusHTML); //insert the statusHTML into the div
  }); //end getJSON


  $.getJSON("../data/rooms.json", function (response) {
    var statusHTML = '<ul class="rooms">'; //create list
    $.each(response, function (index, room) {
      //if statement to check the JSON data for inoffice status
      if (room.available === true) {
        statusHTML += '<li class="empty">'; //add list element w/ in class
      } else {
        statusHTML += '<li class="full">';//add list element w/ out class
      }
      statusHTML += room.room + '</li>'; //add employee name to list
    }); //end .each
    statusHTML += '</ul>'; //add closing tag
    $('#roomList').html(statusHTML); //insert the statusHTML into the div
  }); //end getJSON

}); //end ready - wait until HTML loads to browser
