// This profile.js will retireve and handle any errors in the process of gaining the information of treehouse student profiles

// Reqiure https
const https = require('https');
// Require http module for status codes
const http = require ('http');

// Function to print Any Error Messages
function printError (error) {
  console.error(error.message);
}

// Function to print out the message to the console
function printMessage(username, badgeCount, point) {
  const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript;`
  console.log(message);
}

function getProfile(username) {
  try {
    // Connect to the API URL (https://teamtreehouse.com/username.json) with https request
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      
      // Create a If statement to return profile info is statusCode from server is 200 - OK
      if (response.statusCode === 200) {
        // console.dir(response.statusCode); Returns if the connection was successful or not
        let body = "";
        
        // Read the data
        response.on('data', data => {
          body += data.toString();
        });
       
        response.on('end', () => {
            try {
              // Parse the data
              const profile = JSON.parse(body);
              //console.dir(profile); This shows you the profile object containing all profile information
            
              // Print the data to the console with the printMessage function
              printMessage(username, profile.badges.length, profile.points.JavaScript);
            } catch (error) {
                printError(error); // Log a cleaner error message               
            }
        });
      } // Else create a error message containing the status code returned by the server
        else {
          const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
          const statusCodeError = new Error(message);
          printError(statusCodeError);
        }
    }); // End Https Resquest
  
    request.on('error', printError); // If there is an error in the URL (typo) print the error 

  } catch (error) {
    printError(error); // If the URL does not containe https:// print the error
  }
}

module.exports.get = getProfile; // Need this in order to require the 'getProfile' function to be accessible in the app.js file
