const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    let filePath;

    if (request.url === "/home" || request.url === "/") {
        filePath = path.join(__dirname, "index.html");
    } else if (request.url === "/about") {
        filePath = path.join(__dirname, "about.html");
    } else if (request.url === "/contact") {
        filePath = path.join(__dirname, "contact.html");
    } else {
        filePath = path.join(__dirname, "404.html");
    }

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Ошибка сервера");
            return;
        }
        response.writeHead(200);
        response.end(data);
    });
}).listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
