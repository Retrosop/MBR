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

const greeting = require("./greeting");
console.log(greeting);

const { Date } = require("./greeting");
console.log(Date);

const User = require("./user.js");
const vladimir = new User("Vladimir", 40);
vladimir.print();
vladimir.sayHi();

const Goods = require("./goods.js");
const tv = new Goods(10000, 54, 40);
tv.print();

//Глава 2.3 Объект global
const greeting23 = require("./greeting23");
global.username = "Eugene";
global.console.log(date);
greeting23.printMessage();

//Глава 2.4 Передача параметров приложения
//node index.js Tom 18
const nodePath = process.argv[0];
const appPath = process.argv[1];
const username = process.argv[2];
const userage = process.argv[3];

console.log("nodePath:", nodePath);
console.log("appPath:", appPath);
console.log();
console.log("name:", username);
console.log("age:", userage);

//Глава 2.5 Установка сторонних модулей
//npm info lodash
const lodash = require("lodash");

const people = ["Tom", "Sam", "Bob"];
const employees = ["Tom", "Alice", "Sam"];

// объединение массивов - в результате только уникальные значения
const result1 = lodash.union(people, employees);
console.log(result1); // [ "Tom", "Sam", "Bob", "Alice" ]

// пересечение массивов - в результате только общие значения
const result2 = lodash.intersection(people, employees);
console.log(result2); // [ "Tom", "Sam" ]

//Глава 2.6 Конфигурация
const express = require("express"); // получаем модуль express
// создаем приложение express
const app = express();

// устанавливаем обработчик для маршрута "/"
app.get("/", function (_, response) {
  response.end("<html><body> <b>Hello world3!!!<b></body></html>");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000, function () {
  console.log("Сервер начал принимать запросы по адресу http://localhost:3000");
});

//Глава 2.7
//npm install -g nodemon

//Глава 2.8
const fs = require("fs");

fs.readFile("hello.txt", function (error, data) {
  if (error) {
    // если возникла ошибка
    return console.log(error);
  }
  console.log(data.toString()); // выводим считанные данные
});
console.log("Асинхронное чтение файлов");

const data = fs.readFileSync("hello.txt");
console.log(data.toString()); // выводим считанные данные
console.log("Синхронное чтение файлов");
