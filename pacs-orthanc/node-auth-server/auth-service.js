const http = require('http');


function grantAccess(response, authToken, resourceLevel, orthancId) {

  const granted = authToken === 'doctor';

  console.log('granted: ', granted);

  var answer = {
    granted: granted,
    validity: 60 // the validity information returned is valid for 5 seconds (the Orthanc plugin will cache it for 5 seconds)
  };

  response.writeHead(200, { 'Content-Type' : 'application/json' });
  response.end(JSON.stringify(answer));
}


const server = http.createServer(function(request, response) {

  if (request.method === 'POST') { // any POST request received by this server is considered to be an auth-request coming from Orthanc
    let body = '';

    request.on('data', function (data) {
      body += data;
    });

    request.on('end', function () {
      console.log('Received authorization request: ' + body);
      console.log('HTTP headers: ' + JSON.stringify(request.headers));

      const authQuery = JSON.parse(body);

      grantAccess(response, authQuery["token-value"], authQuery["level"], authQuery["orthanc-id"]);
    });

  } else {

    response.writeHead(405);
    response.end();
  }
});


console.log('The auth-server demo has started');
server.listen(8000);