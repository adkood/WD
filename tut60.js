// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const fs = require("fs");
let text=fs.readFileSync('help.txt', 'utf-8');

console.log(text);

text=text.replace('me','us');

console.log(text);

fs.writeFileSync('helped.txt',text);