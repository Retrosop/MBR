const http = require("http");
http
  .createServer(function (require, response) {
    response.end("Hello Nodejs");
  })
  .listen(3000, "127.0.0.1", function () {
    console.log("Сервер успешно запушены");
  });
