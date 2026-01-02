const HTTP =  require('http');
const SERVER =  HTTP.createServer((res, req) => {
    console.log(req);
})

SERVER.listen(3001,() => {
    console.log('server running on http://localhost:3001');
}); 