const http = require("http");
const mysql = require("mysql");
const url = require("url");
const querystring = require("querystring");
const fs = require("fs");
const path = require("path");

const connection = mysql.createConnection({
  host: "91.219.194.4",
  user: "bh35910_student1711",
  password: "",
  database: "bh35910_mbr",
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
  } else if (req.method === "POST" && req.url === "/add-student") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // Преобразуем Buffer в строку
    });

    req.on("end", () => {
      const postData = querystring.parse(body);
      const studentName = postData.student_name;

      const sql =
        "INSERT INTO Student (name, patronymic, date_of_birth) VALUES (?, ?, ?)";
      const values = [name, patronymic, date_of_birth]; // Замените на ваши переменные
      connection.query(sql, values, (error, results) => {
        if (error) {
          res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("Ошибка при добавлении студента: " + error.message);
          return;
        }
        // Обработка успешного добавления
      });
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Факультет добавлен с ID: " + results.insertId);
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Не найдено");
  }
});

server.listen(3000, () => {
  console.log("Сервер запущен на http://localhost:3000");
});
