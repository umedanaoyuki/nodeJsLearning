import * as http from "http";

// http://localhopst:8080/

//content-type:
// ブラウザとサーバーが通信しているコンテンツのフォーマットと文字コードの情報

//text/html; charset=UTF-8



const server = http.createServer(function(req, res) {
    console.log(req.url);
    res.writeHead(200, {'content-Type':'text/html; charset=UTF-8'});
    if (req.url === '/hello') {
        res.end('<h1>こんにちは</h1>')
    } else if (req.url === '/bye') {
        res.end('bye');
    }
});

server.listen(8080);