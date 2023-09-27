import * as http from "http";

// http://localhopst:8080/

//content-type:
// ブラウザとサーバーが通信しているコンテンツのフォーマットと文字コードの情報

//text/html; charset=UTF-8



const server = http.createServer(function(req, res) {
    console.log(req.url);
    // res.writeHead(200, {'content-Type':'text/html; charset=UTF-8'});
    if (req.url === '/hello') {
        res.end(`<!DOCTYPE html>
        <html lang="ja">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <h1>こんにちは</h1>
        </body>
        </html>`)
    } else if (req.url === '/bye') {
        res.end('bye');
    }
});

server.listen(8080);