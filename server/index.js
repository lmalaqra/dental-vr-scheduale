const http = require("http");
const app = require("./app");
const server = http.createServer(app);
server.listen(4002, () => {
  console.log("server is listening on 4000");
});


