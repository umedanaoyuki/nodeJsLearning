import * as http from "http";

const server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.write(`<a href="/result?param1=1&param2=2">Get Method Link</a>`);
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
            const queryString = req.url.split("?")[1];
            const params = new URLSearchParams(queryString);
            console.log("ぱらむすs");
            console.log(params);    
        }
        res.end(req.url);
    }
    });

server.listen(8080);