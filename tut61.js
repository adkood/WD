const http=require('http');
const fs=require('fs');
let value=fs.readFileSync('code2.html');

const server=http.createServer((req,res)=>{
    // res.statusCode=200;
    res.writeHead(200,{'content-type':'text/html'});
    res.end(value);
});

server.listen(82,'127.0.0.1',()=>{
    console.log('listening to port 82');
});

