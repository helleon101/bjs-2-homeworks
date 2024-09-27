"use strict";
function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    return [];
  } else if (d === 0) {
    return [-b / (2 * a)];
  } else {
    let x = (-b + Math.sqrt(d)) / (2 * a);
    let y = (-b - Math.sqrt(d)) / (2 * a);
    return [x, y];
  }
}
let a = 5;
let b = -3;
let c = 6;

let roots = solveEquation(a, b, c);
console.log(roots);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyPercent = percent / 100 / 12;
  let loanBody = amount - contribution;

  let monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));

  let totalAmount = monthlyPayment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}

let percent = 10;
let contribution = 100000;
let amount = 1000000;
let countMonths = 12;

let totalMortgage = calculateTotalMortgage(
  percent,
  contribution,
  amount,
  countMonths
);
console.log(totalMortgage);
