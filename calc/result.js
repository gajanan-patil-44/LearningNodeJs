// const { buffer } = require("stream/consumers");

const RESULT = (req, res) => {
  const BODY = [];
  req.on("data", (chunk) => {
    BODY.push(chunk);
  });
  req.on("end", () => {
    const BODYSTR = Buffer.concat(BODY).toString();
    const PARSED = new URLSearchParams(BODYSTR);
    const BODYOBJ = Object.fromEntries(PARSED);
    // const RES = Number(BODYOBJ.first) + Number(BODYOBJ.second);

    const NUM1 = parseFloat(PARSED.get("num1"));
    const NUM2 = parseFloat(PARSED.get("num2"));
    const RES = NUM1 + NUM2;
    console.log(RES);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<html lang="en">
            <head>
    
                 <title>Result</title>
            </head>
            <body>
                <h1>The RESULT of ${NUM1} + ${NUM2} = ${RES}</h1>
                <a href = '/calculator'> go to calculator</a> <br>
                <a href = '/'> go to Home Page</a>
            </body>
            </html>`
          
          );
          return res.end();
            
            });
    
};

module.exports = RESULT;
