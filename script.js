const container = document.querySelector('.container');

reset.addEventListener('click', onReset);
populate(16,16);
refreshBoxes();

function populate(height, width) {
  for (let i=0; i<height; i++) {
    const row = document.createElement('div');
    row.setAttribute('id', 'row'+i);
    row.classList.add('row');
    
    for (let j=0; j<width; j++) {
      const box = document.createElement('div');
      box.setAttribute('id', 'box'+j);
      box.classList.add('box');
      row.appendChild(box);
    }
    main.appendChild(row);
  }
}

function refreshBoxes() {
  boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.classList.add('box-hover');
    });
  });
}

function remove() {
  while(main.firstChild) {
    main.removeChild(main.firstChild);
  }
}

function onReset() {
  boxes.forEach((box) => {
    box.classList.remove('box-hover');
  });

  let dim = prompt("Choose the dimention (max 100):");
  if (dim > 100) {
    dim = 100;
  }
  if (dim === '' || dim === null) {
    dim = 16;
  }

  remove();
  populate(dim, dim);
  refreshBoxes();
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
