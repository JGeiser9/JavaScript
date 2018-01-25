// Need a way to look at a user's badge count and JavaScript points
// Connect to Treehouse's API to get profile information to print out to console

// Reqiure https
const https = require('https');

// Function to print out the message to the console
function printMessage(username, badgeCount, point) {
  const message = `${username} has ${badgeCount} total badge(s) and ${point} points in JavaScript;`
  console.log(message);
}

function getProfile(username) {
  
  // Connect to the API URL (https://teamtreehouse.com/username.json) with https request
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    // console.dir(response.statusCode); Returns if the connection was successful or not
    let body = "";
    
    // Read the data
    response.on('data', data => {
      body += data.toString();
    });
   
    response.on('end', () => {
        // Parse the data
        const profile = JSON.parse(body);
        //console.dir(profile); This shows you the profile object containing all profile information
      
        // Print the data to the console with the printMessage function
        printMessage(username, profile.badges.length, profile.points.JavaScript);
    });
  });
}

const users = process.argv.slice(2); // The process.argv property returns an array containing the command line arguments passed 
users.forEach(getProfile); // Loop through each array element and get the profile of the username passed through Node.js Command Line
