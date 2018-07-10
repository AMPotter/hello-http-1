const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);
const port = 8080;

server.listen(port, () => {
    // eslint-disable-next-line
    console.log('server listening on port', port);
});