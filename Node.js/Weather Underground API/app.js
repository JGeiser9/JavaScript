const weather = require('./weather');

// Join multiple values passed as arguments and replace all spaces with underscores
const query = process.argv.slice(2).join("_").replace(' ', '_');
// query: 90210
// query: Cleaveland_OH
// query: London_England

// Send the arguments from the command line to the get function in weather.js
weather.get(query);
