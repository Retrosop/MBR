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