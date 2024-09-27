const EventEmitter = require('events');

// Создаем класс, который расширяет EventEmitter
class MyEmitter extends EventEmitter {}

// Создаем экземпляр нашего класса
const myEmitter = new MyEmitter();

// Обрабатываем событие 'eventName'
myEmitter.on('eventName', () => {
  console.log('Событие произошло!');
});

// Создаем собственное событие
myEmitter.emit('eventName'); // Вывод: Событие произошло!