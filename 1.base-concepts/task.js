"use strict";

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let roots = [];

  if (discriminant < 0) {
    return roots;
  } else if (discriminant === 0) {
    let singleRoot = -b / (2 * a);
    roots.push(singleRoot);
    return roots;
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
    return roots;
  }
}
console.log(solveEquation(1, -3, 2));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 0, 1));

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
