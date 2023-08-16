/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.sum = function () {
  return this.num1 + this.num2;
};

Calculator.prototype.subtraction = function () {
  return this.num1 - this.num2;
};

Calculator.prototype.multiplication = function () {
  return this.num1 * this.num2;
};

Calculator.prototype.division = function () {
  return this.num1 / this.num2;
};

const numbers = new Calculator(4, 5);

console.log(numbers.sum());
console.log(numbers.subtraction());
console.log(numbers.multiplication());
console.log(numbers.division());
