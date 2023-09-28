import * as http from "http";

// http://localhost:8080/hello -> hello
// http://localhost:8080/bye -> bye

const server = http.createServer(function(req, res) {
    // console.log(req.url);
    if(req.url === '/') {
        // res.end(`<a href="/result>Get Method Link </a>`);
        res.end(`<a href="/result">Get Method Link</a>`);
    } else if(req.url === '/bye') {
        res.end('bye');
    }
});

server.listen(8080);