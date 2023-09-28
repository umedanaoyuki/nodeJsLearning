import * as http from "http";

// http://localhopst:8080/

//content-type:
// ブラウザとサーバーが通信しているコンテンツのフォーマットと文字コードの情報

//text/html; charset=UTF-8



const server = http.createServer(function(req, res) {
    console.log(req.url);
    
    if (req.url === '/hello') {
        res.writeHead(302, {location: '/redirected'});
        res.end(`<h1>こんにちは</h1>`)
    } else if (req.url === '/bye') {
        res.end('bye');
    } else {
        res.end(req.url);
    }
});

server.listen(8080);