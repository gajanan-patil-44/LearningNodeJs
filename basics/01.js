const HTTP = require('http');
const SERVER = HTTP.createServer((req,res) => {
    console.log(req);
})

const PORT = 3000;
SERVER.listen(PORT,() => {
    console.log(`server running on address http://localhost:${PORT}`);
    
})