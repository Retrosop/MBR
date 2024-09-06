// const http = require("http");
// http
//   .createServer(function (require, response) {
//     response.end("Hello Nodejs");
//   })
//   .listen(3000, "127.0.0.1", function () {
//     console.log("Сервер успешно запушены");
//   });

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8"); // Устанавливаем кодировку UTF-8
  const currentDate = new Date().toLocaleString(); // Получаем текущую дату
  res.end(`Текущая дата: ${currentDate}\n`);
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
