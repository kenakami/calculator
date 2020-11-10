const container = document.querySelector('.container');
const out = document.querySelector('.out');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('#clear');
const decimal = document.querySelector('#decimal');
const ce = document.querySelector('#ce');
const sign = document.querySelector('#sign');

let temp, op;
let isnew = true;
let float = false;

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (number.getAttribute('id') == "decimal" && float) {
      return;
    }
    if (isnew) {
      out.textContent = '';
      isnew = false;
    }
    out.textContent += number.getAttribute('value');
  });
});

decimal.addEventListener('click', () => {
  float = true;
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    op = window[operator.getAttribute('value')];
    if (temp == null) {
      temp = out.textContent;
    }
    else if (!isnew){
      temp = operate(op, temp, out.textContent);
      op = null;
      out.textContent = temp;
    }
    isnew = true;
    float = false;
  });
});

equals.addEventListener('click', () => {
  if (op != null && temp != null) {
    temp = operate(op, temp, out.textContent);
    out.textContent = temp;
    op = null;
    float = false;
    isnew = true;
  }
});

clear.addEventListener('click', () => {
  out.textContent = '';
  temp = null;
  op = null;
});

ce.addEventListener('click', () => {
  out.textContent = '';
});

sign.addEventListener('click', () => {
  if (isnew) {
    temp = temp * -1;
  }
  out.textContent = Number(out.textContent) * -1;
});

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
  return f(Number(a), Number(b));
}
