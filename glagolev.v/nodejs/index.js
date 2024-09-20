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
  response.end("<html><body> <b>Hello world4!!!<b></body></html>");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000, function () {
  console.log("Сервер начал принимать запросы по адресу http://localhost:3000");
});

//Глава 2.7
//npm install -g nodemon

//Глава 2.8
//Чтения файла
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

//Запись файла

const dataWrite = "Hello Node.js\n";

fs.writeFile("helloWrite.txt", dataWrite, function (error) {
  if (error) {
    // если ошибка
    return console.log(error);
  }
  console.log("Файл успешно записан");
});

//Асинхронная запись

// синхронное добавление
fs.appendFileSync("helloWrite.txt", "Hello word\n");

// асинхронное добавление
fs.appendFile("helloWrite.txt", "Hello walk\n", function (error) {
  if (error) return console.log(error); // если возникла ошибка

  console.log("Запись файла завершена");
});

//В качестве альтернативы можно установить через объект конфигурации флаг на дозапись - флаг "a":

fs.writeFile("helloWrite.txt", "Hello all\n", { flag: "a" }, function (error) {
  if (error) return console.log(error); // если возникла ошибка

  console.log("Запись файла завершена");
});

//Получение информации о файле
//Для получения информации о файле в асинхронном режиме применяется функция stat()

fs.stat("helloWrite.txt", (error, stats) => {
  if (error) return console.error(error);
  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats);
});

//Синхронное считывание статистики

const stats = fs.statSync("hello.txt");
console.log(stats.isFile()); // true
console.log(stats.isDirectory()); // false
console.log(stats);

//Удаление файла

//fs.unlinkSync("hello.txt")
//fs.unlink("hello.txt", (error) => {
//   if (error) return console.log(error); // если возникла ошибка
//   console.log("File deleted");
// });

//Добавление каталога

// fs.mkdir("test", (error) => {
//   if (error) return console.log(error);
//   console.log("Folder created");
// });

// fs.readdir("test", (error, files) => {
//   if (error) return console.log(error);
//   files.forEach((file) => console.log(file));
// });

// fs.rmdir("test", (error) => {
//   if (error) return console.log(error);
//   console.log("Folder deleted");
// });

//Глава 2.9

//События на on
const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();

// имя события, которое будет обрабатываться
const eventName = "greet";

// регистрируем обработчик для события "greet"
emitter.on(eventName, function () {
  console.log("Hello World! I Event !!!");
});

// генерируем событие greet
emitter.emit(eventName);

//Генерация трех событий on

// определяем эмиттер событий
const emitter3 = new EventEmitter();

// имя события, которое будет обрабатываться
const eventName3 = "greet";

// регистрируем три обработчика для события "greet"
emitter3.on(eventName3, function () {
  console.log("Hello World!");
});
emitter3.on(eventName3, function () {
  console.log("Привет мир!");
});
emitter3.on(eventName3, function () {
  console.log("Hallo Welt!");
});

// генерируем событие greet
emitter3.emit(eventName3);

//Передача параметров событию

const emitter4 = new EventEmitter();

const eventName4 = "greet";

emitter4.on(eventName4, function (data) {
  console.log(data);
});

emitter4.emit(eventName4, "Привет пир!");

//Наследование от EventEmitter

const eventName5 = "greet";

const emitter5 = new EventEmitter();

emitter5.on(eventName5, function (data) {
  console.log(data);
});

class User5 extends EventEmitter {
  constructor(username) {
    super(); // вызываем конструктор EventEmitter
    this.name = username;
  }
  sayHi() {
    console.log("Привет. Меня зовут", this.name);
    this.emit(eventName, this.name); // генерируем событие, передаем обработчику имя
  }
}

const tom = new User5("Tom");
// добавляем к объекту tom обработку события "greet"
// обработчик ожидает получить через параметр имя пользователя
tom.on(eventName, function (username) {
  console.log("Привет,", username);
});
// при выполнении метода генерируется событие "greet"
tom.sayHi();

//Аналогичный вариант

const emitter6 = new EventEmitter();

const eventName6 = "greet";

emitter6.on(eventName6, function (username) {
  console.log("Прив", username);
});

class User6 {
  constructor(username, emitter) {
    this.name = username;
    this.emitter = emitter;
  }
  sayHi() {
    console.log("Привет. Меня зовут", this.name);
    this.emitter.emit(eventName, this.name); // генерируем событие, передаем обработчику имя
  }
}

const tom2 = new User6("Tom2", emitter);
tom2.sayHi();
