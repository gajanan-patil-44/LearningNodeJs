const CALCULATE = require("./calculator");
const RESULT = require("./result");
const HOME = (req, res) => {
  if (req.url === "/") {
    res.write(`
        <html lang="en">
        <head>
        <title>Calculator</title>
        </head>
        <body>
            <h1>This was Home Page</h1>
            <a href = '/calculator'> go to calculator</a>
        </body>
        </html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator" && req.method === "GET") {
    return CALCULATE(req, res);
    // return res.end();
  } else if (req.url.toLowerCase() === "/result" ) {
    
    RESULT(req, res);
    return res.end();
  }

  res.write(`<html lang="en">
        <head>
        <title>kkkkkkkkkk</title>
        </head>
        <body>
            <h1>Page not found</h1>
            <a href = '/calculator'> go to calculator</a> <br>
            <a href = '/'> go to Home Page</a>
            
        </body>
        </html>
        `);
  return res.end();
};
module.exports = HOME;
