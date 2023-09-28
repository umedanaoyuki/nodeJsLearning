import * as http from "http";

const server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.write(`<a href="/result?param1=パラメータ1&param2=パラメータ2">Get Method Link</a>`);
        res.end(`
        <form action="/result" method="POST">
            <input type="text" name="title">
            <input type="submit">
        </form>
        `)
    } else {
        console.log(req.url);
        console.log(req.method);
        if (req.method === "GET") {
            //GETのパラメータを取得
            new URLSearchParams(req.url);
        res.end(req.url);
    }}
});

server.listen(8080);