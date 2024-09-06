// Класс «Товар» с полями цена, количество, скидка. Реализовать ввод и вывод полей данных, вычисление суммарной стоимости со скидкой и без, а также вывод информации об объекте.

function Goods(cost, count, skidka) {
  this.cost = cost;
  this.count = count;
  this.skidka = skidka;

  this.print = function () {
    console.log(
      `Стоимость товара на складе ${
        (this.cost * this.cost * 100) / this.skidka
      }`
    );
  };
}

module.exports = Goods;
