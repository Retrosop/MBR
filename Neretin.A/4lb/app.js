const http = require("http");

http.createServer(function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    // Общий стиль для всех страниц
    const style = `
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #e9ecef;
            }
            h2 {
                color: #343a40;
                text-align: center;
            }
            ul {
                list-style-type: none;
                padding: 0;
            }
            li {
                margin: 10px 0;
            }
            a {
                text-decoration: none;
                color: #007BFF;
            }
            a:hover {
                text-decoration: underline;
            }
            .container {
                background: white;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                max-width: 600px;
                margin: auto;
            }
            .hero {
                background-image: url('https://example.com/car-image.jpg');
                background-size: cover;
                height: 300px;
                border-radius: 5px;
                margin-bottom: 20px;
            }
            .hero h1 {
                color: white;
                text-align: center;
                padding-top: 100px;
                font-size: 2.5em;
            }
        </style>
    `;

    // Контент страниц
    let content = '';

    if (request.url === "/home" || request.url === "/") {
        content = `
            <div class="container">
                <h2>Главная страница</h2>
                <p>Добро пожаловать в нашу автомобильную компанию!</p>
                <ul>
                    <li><a href="/about">О компании</a></li>
                    <li><a href="/contact">Контакты</a></li>
                    <li><a href="/models">Модели автомобилей</a></li>
                    <li><a href="/services">Услуги</a></li>
                    <li><a href="/testimonials">Отзывы клиентов</a></li>
                </ul>
            </div>
        `;
    } else if (request.url === "/about") {
        content = `
            <div class="container">
                <h2>О компании</h2>
                <p>Мы - ведущий производитель автомобилей с 20-летним опытом.</p>
            </div>
        `;
    } else if (request.url === "/contact") {
        content = `
            <div class="container">
                <h2>Контакты</h2>
                <p>Свяжитесь с нами по телефону: +8 (800) 355-35-35</p>
                <form action="/submit" method="POST">
                    <label for="name">Имя:</label><br>
                    <input type="text" id="name" name="name" required><br>
                    <label for="message">Сообщение:</label><br>
                    <textarea id="message" name="message" required></textarea><br>
                    <input type="submit" value="Отправить">
                </form>
            </div>
        `;
    } else if (request.url === "/models") {
        content = `
            <div class="container">
                <h2>Модели автомобилей</h2>
                <div class="car">
                    <h3>Модель A</h3>
                    <p>Эта модель предлагает отличную экономию топлива и комфорт.</p>
                </div>
                <div class="car">
                    <h3>Модель B</h3>
                    <p>Спортивный автомобиль с высокой производительностью и стильным дизайном.</p>
                </div>
                <div class="car">
                    <h3>Модель C</h3>
                    <p>Семейный внедорожник с большим пространством и безопасностью.</p>
                </div>
            </div>
        `;
    } else if (request.url === "/services") {
        content = `
            <div class="container">
                <h2>Услуги</h2>
                <p>Мы предлагаем широкий спектр услуг, включая:</p>
                <ul>
                    <li>Обслуживание автомобилей</li>
                    <li>Ремонт и диагностика</li>
                    <li>Продажа запчастей</li>
                </ul>
            </div>
        `;
    } else if (request.url === "/testimonials") {
        content = `
            <div class="container">
                <h2>Отзывы клиентов</h2>
                <p>"Отличный сервис и качественные автомобили!" - Иван П.</p>
                <p>"Я очень доволен своей покупкой!" - Анна С.</p>
            </div>
        `;
    } else {
        content = `
            <div class="container">
                <h2>404 - Страница не найдена</h2>
                <p>Извините, запрашиваемая страница не найдена.</p>
            </div>
        `;
    }

    // Отправка ответа
    response.write(`
        <!DOCTYPE html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Автомобильная компания</title>
            ${style}
        </head>
        <body>
            ${content}
        </body>
        </html>
    `);
    
    
    response.end();
}).listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
