//События на on
const EventEmitter = require("events");
// определяем эмиттер событий
const emitter = new EventEmitter();

// имя события, которое будет обрабатываться
const eventName = "greet";

// регистрируем обработчик для события "greet"
emitter.on(eventName, function () {
  console.log("Hello World!");
});

// генерируем событие greet
emitter.emit(eventName);
