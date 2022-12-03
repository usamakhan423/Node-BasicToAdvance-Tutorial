const http = require('http');
const { hostname } = require('os');
const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }),
    res.write('Hello from Uk creater...!')
    res.end();
})

server.listen(port, hostname, () =>{
    console.log(`Server running at http://${hostName}:${port}/`)
}) 