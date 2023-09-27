import * as http from 'http';

const server = http.createServer(function(req, res) {
  console.log(req.url);
  res.end('byeeeee');
});

server.listen(8080);