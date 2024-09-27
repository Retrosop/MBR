const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Генерация события каждую секунду
const intervalId = setInterval(() => {
    myEmitter.emit('tick');
}, 1000);

// Обработчик события
myEmitter.on('tick', () => {
    console.log('Событие сгенерировано:');
});

// Останавливаем событие через 10 секунд
setTimeout(() => {
    clearInterval(intervalId);
    console.log('События остановлены.');
}, 10000);