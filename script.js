/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(sum, subtraction, multiplication, division) {
  this.sum = function sum(num1, num2) {
    console.log(num1 + num2);
  };

  this.subtraction = function subtraction(num1, num2) {
    console.log(num1 - num2);
  };

  this.multiplication = function multiplication(num1, num2) {
    console.log(num1 * num2);
  };

  this.division = function division(num1, num2) {
    console.log(num1 / num2);
  };
}

const Gintas = new Calculator(10, 10);
Gintas.sum(10, 10);
Gintas.subtraction(10, 10);
Gintas.multiplication(10, 10);
Gintas.division(10, 10);
