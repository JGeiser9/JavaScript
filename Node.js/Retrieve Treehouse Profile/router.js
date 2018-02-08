var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");
var fs = require("fs");
var commonHeaders = {'Content-Type': 'text/html'}; // 'text/plain' returns plain text to view everything


// Create a function to serve the CSS file
function style(request, response) {
  if (request.url.indexOf(".css") !== -1){
    renderer.css("main", response);
    response.end();
  }
}

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {
      //show search
      response.writeHead(200, commonHeaders);
      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      //if url == "/" && POST
        // get the post data from body
        request.on("data", function(postBody) {
          // extract the username from the ost query string
          var query = querystring.parse(postBody.toString());
          //redirect to /:username (Give a 303 code - force GET request to new url even if it was a POST request)
          response.writeHead(303, {"Location": "/" + query.username});
          response.end();
        })
      }
    }
}

//Handle HTTP route GET /:username i.e. /jake
function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if(username.length > 0 && request.url.indexOf('.css') === -1) {
    response.writeHead(200, commonHeaders);
    renderer.view("header", {}, response);

    //get json from Treehouse
    var studentProfile = new Profile(username);

    //on "end"
    studentProfile.on("end", function(profileJSON){
      //show profile
      //Store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript,
        recentBadge: profileJSON.badges[profileJSON.badges.length-1].name,
        badgeIcon: profileJSON.badges[profileJSON.badges.length-1].icon_url
      }

      //Simple response
      renderer.view("profile", values, response);
      renderer.view("footer", {}, response);
      response.end();
    });

    //on "error"
    studentProfile.on("error", function(error){
      //show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });

  }
}
