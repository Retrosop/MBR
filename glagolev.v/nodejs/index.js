// const http = require("http");
// http
//   .createServer(function (require, response) {
//     response.end("Hello Nodejs");
//   })
//   .listen(3000, "127.0.0.1", function () {
//     console.log("Сервер успешно запушены");
//   });

// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain; charset=utf-8"); // Устанавливаем кодировку UTF-8
//   const currentDate = new Date().toLocaleString(); // Получаем текущую дату
//   res.end(`Текущая дата: ${currentDate}\n`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
// });

// const os = require("os");
// const userName = os.userInfo().username;
// console.log(userName);

// const greeting = require("./greeting");
// console.log(greeting);

// const { Date } = require("./greeting");
// console.log(Date);

// const User = require("./user.js");
// const vladimir = new User("Vladimir", 40);
// vladimir.print();
// vladimir.sayHi();

// const Goods = require("./goods.js");
// const tv = new Goods(10000, 54, 40);
// tv.print();

// const http = require("http");
// const fs = require("fs");
// const cors = require("cors");

// http
//   .createServer((request, response) => {
//     response.setHeader("Access-Control-Allow-Origin", "*"); // Разрешаем все источники
//     response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Разрешаем указанные методы
//     response.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Разрешаем указанные заголовки

//     if (request.url === "/user") {
//       response.setHeader("Content-Type", "text/html; charset=utf-8");
//       let data = "";
//       request.on("data", (chunk) => {
//         data += chunk;
//       });
//       request.on("end", () => {
//         console.log(data);
//         console.log("Данные успешно получены");
//         response.end("Данные успешно получены");
//       });
//     } else {
//       fs.readFile("index.html", (error, data) => response.end(data));
//     }
//   })
//   .listen(3000, () =>
//     console.log("Сервер запущен по адресу http://localhost:3000")
//   );

const http = require("http");
const mysql = require("mysql");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");
const path = require("path");

const connection = mysql.createConnection({
  host: "91.219.194.4",
  user: "bh35910_stipendiy",
  password: "",
  database: "bh35910_stipendiy",
});

connection.connect((err) => {
  if (err) {
    console.error("Ошибка подключения к базе данных: " + err.stack);
    return;
  }
  console.log("Подключено к базе данных как id " + connection.threadId);
});

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Отправляем HTML форму
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Ошибка при загрузке страницы");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else if (req.method === "POST" && req.url === "/add-faculty") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // Преобразуем Buffer в строку
    });

    req.on("end", () => {
      const postData = querystring.parse(body);
      const facultyName = postData.faculty_name;

      const sql = "INSERT INTO faculty (faculty_name) VALUES (?)";
      connection.query(sql, [facultyName], (error, results) => {
        if (error) {
          res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("Ошибка при добавлении факультета: " + error.message);
          return;
        }
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Факультет добавлен с ID: " + results.insertId);
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Не найдено");
  }
});

server.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});
