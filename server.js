var dispatcher = require('httpdispatcher');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080);

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest); {
	console.log("Welcome to your website on port 8080");
};


