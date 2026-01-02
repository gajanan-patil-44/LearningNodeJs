const HTTP = require("http");
const SERVER = HTTP.createServer((req, res) => {

    if (req.url === "/home") {
        res.write("<h1>Welcome to Myntra Home Page</h1>");
        return res.end();
    }else if (req.url === '/men') {
        res.write("<h1>Welcome to Myntra Men's Section</h1>");
        return res.end();
    } else if (req.url === '/women') {
        res.write("<h1>Welcome to Myntra women's Section</h1>");
    } else if (req.url === '/cart') {
        res.write("<h1>Your cart is empty</h1>");
    }

  res.write(`
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>myntra</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">women</a></li>
            <li><a href="/cart">cart</a></li>
            </ul>
    </nav>
    </body>
</html>
`);
res.end()
});

SERVER.listen(3001, () => {
  console.log("server running on http://localhost:3001");
});
