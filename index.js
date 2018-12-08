var http = require('http');
var HOST = '0.0.0.0';
var PORT = 8080;

var server = http.createServer((req, res) => {
    console.log(`Request From ${req.socket.remoteAddress}:${req.socket.remotePort}`);
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({"status": `hello from ${req.socket.localAddress}:${req.socket.localPort} v1`}));
});

server.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);