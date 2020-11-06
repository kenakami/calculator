const container = document.querySelector('.container');
const out = document.querySelector('.out');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');

let decimal = document.querySelector('#decimal');

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    out.textContent += number.getAttribute('value');
  });
});

operators.forEach((operator) => {
});

clear.addEventListener('click', () => {
  out.textContent = '';
});

function refresh() {
  out.textContent = outText;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(f, a, b) {
  return f(a, b);
}
