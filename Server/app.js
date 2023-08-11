const http = require('http');
const router = require('./routes');
// creating a server to listen requests made to server
const server = http.createServer(router);
server.listen(3000);
