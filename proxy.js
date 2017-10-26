var http = require('http');

http.createServer(onRequest).listen(8001);

function onRequest(client_req, client_res) {
  var options = {
    hostname: 'www.google.com',
    port: 443,
    path: client_req.url,
    method: 'GET'
  };

  var proxy = http.request(options, function (res) {
    res.pipe(client_res, {
      end: true
    });
  });

  client_req.pipe(proxy, {
    end: true
  });
}
