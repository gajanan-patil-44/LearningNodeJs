const HTTP  = require("http");

const HOME = require("./home");

const SERVER = HTTP.createServer(HOME);
const PORT  = 3000;
SERVER.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});
