var url = require('url');
var dataStore = require('./data-store').dataStore;
var corsHeaders = require('./cors-headers').corsHeaders;

// Private Functions
var _handleMessagesRequest = function(response) {
  // Tell the client we are sending them JSON data.
  var headers = corsHeaders;
  headers['Content-Type'] = 'application/json';
  // Send 200 OK
  response.writeHead(200, headers);

  response.end(JSON.stringify(dataStore.getAll()));
  
  return;  
};

var _handleDefaultRequest = function(response) {
  
  var headers = corsHeaders;
  headers['Content-Type'] = 'text/html';
  // Send 201 Created
  response.writeHead(200, corsHeaders);
  
  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  response.end('Hello, World!');
  return response;
};

// Public Function
var getHandler = function (request, response) {
  
  var parsedUrl = url.parse(request.url);
  if (parsedUrl.pathname === '/classes/messages') {
    _handleMessagesRequest(response);
  } else {
    _handleDefaultRequest(response);
  }
  
  return response;
};

exports.getHandler = getHandler;
