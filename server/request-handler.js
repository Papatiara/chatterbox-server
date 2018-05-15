var getHandler = require('./get-handler').getHandler;
var postHandler = require('./post-handler').postHandler;
var corsHeaders = require('./cors-headers').corsHeaders;

/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/
var requestHandler = function(request, response) {
  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  switch (request.method) {
  case 'GET':
    getHandler(request, response);
    break;
  case 'POST':
    postHandler(request, response);
    break;
  case 'OPTIONS':
    response.writeHead(200, corsHeaders);
    response.end('OPTIONS REQUEST SERVED');
  default:  
    response.writeHead(404, corsHeaders);
    response.end('BAD REQUEST');
  }
  
  return response;
};

exports.requestHandler = requestHandler;

