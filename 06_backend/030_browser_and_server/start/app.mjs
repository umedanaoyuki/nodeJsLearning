import * as http from "http";

// http://localhost:8080/hello -> hello
// http://localhost:8080/bye -> bye

const server = http.createServer(function(req, res) {
    // console.log(req.url);
    if(req.url === '/') {
        // res.end(`<a href="/result>Get Method Link </a>`);
        res.write(`<a href="/result">Get Method Link</a>`);
        res.end(`
        <form action="/result" method="POST">
            <input type="text" name="title">
            <input type="submit">
        </form>
        `)
    } else if(req.url === '/bye') {
        res.end(req.url);
    }
});

server.listen(8080);