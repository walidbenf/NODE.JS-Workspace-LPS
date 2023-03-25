var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var page = url.parse(req.url).pathname;
  console.log(page);
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  if (page == '/') {
    res.write('ceci est la page principale facebook');
  } else if (page == '/amazon') {
    res.write("ceci est la page d'Amazon");
  } else if (page == '/street4fit') {
    res.write("ceci est la page d'Amazon sur street4fit");
  } else {
    res.write("La demandée n'existe pas");
  }
  res.end();
});

server.listen(8080);
