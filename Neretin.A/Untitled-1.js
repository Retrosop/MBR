const fs = require('fs');

// Чтение файла
fs.readFile('numbers.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Ошибка при чтении файла:', err);
        return;
    }

    // Разделяем данные на числа
    const numbers = data.split(/\s+/).map(Number); // Преобразуем строки в числа
    console.log(numbers)
    // Проверяем, что в файле два числа
    if (numbers.length !== 2 || numbers.some(isNaN)) {
        console.log('Пожалуйста, убедитесь, что в файле два числа.');
        return;
    }

    const sum = numbers[0] + numbers[1]; // Сумма двух чисел
    console.log(`Сумма ${numbers[0]} и ${numbers[1]} равна ${sum}`);
});