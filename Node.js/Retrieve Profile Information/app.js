// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

const profile = require('./profile.js'); // Requiring my own file (./ is mandatory)
const users = process.argv.slice(2); // The process.argv property returns an array containing the command line arguments passed 
users.forEach(profile.get); // Loop through each array element and call the getProfile function from profile.js
