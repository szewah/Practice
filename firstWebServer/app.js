const http = require('http');

const hostname = '127.0.0.01'
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain')
	res.end('Hello World, great to meet you')
})

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}: ${port}/`)
})

