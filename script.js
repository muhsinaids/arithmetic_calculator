const expressionElement = document.getElementById('expression');
const resultElement = document.getElementById('result');
const keys = Array.from(document.querySelectorAll('.key'));

let expression = '';

function updateDisplay() {
  expressionElement.textContent = expression || '0';
  resultElement.textContent = expression ? evaluateExpression(expression) : '0';
}

function appendValue(value) {
  if (value === '.' && expression.slice(-1) === '.') return;
  if (/[+\-*/%]/.test(value) && expression === '') return;
  if (/[+\-*/%]/.test(value) && /[+\-*/%]$/.test(expression)) {
    expression = expression.slice(0, -1) + value;
  } else {
    expression += value;
  }
  updateDisplay();
}

function clearAll() {
  expression = '';
  updateDisplay();
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function evaluateExpression(expr) {
  const sanitized = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');
  const valid = /^[0-9.+\-*/%() ]+$/;

  if (!valid.test(sanitized)) {
    return 'Error';
  }

  try {
    const value = Function(`"use strict"; return (${sanitized})`)();
    if (typeof value === 'number' && Number.isFinite(value)) {
      return Number.isInteger(value) ? value : value.toFixed(8).replace(/\.0+$|(?<=(\d)\d)0+$/g, '');
    }
    return 'Error';
  } catch {
    return 'Error';
  }
}

function commitResult() {
  const output = evaluateExpression(expression);
  if (output !== 'Error') {
    expression = String(output);
  }
  updateDisplay();
}

keys.forEach((key) => {
  key.addEventListener('click', () => {
    const value = key.dataset.value;
    const action = key.dataset.action;

    if (action === 'clear') {
      clearAll();
      return;
    }

    if (action === 'delete') {
      deleteLast();
      return;
    }

    if (action === 'equals') {
      commitResult();
      return;
    }

    if (value) {
      appendValue(value);
    }
  });
});

window.addEventListener('keydown', (event) => {
  const { key } = event;

  if (/^[0-9]$/.test(key) || key === '.') {
    appendValue(key);
    return;
  }

  if (['+', '-', '*', '/', '%'].includes(key)) {
    appendValue(key);
    return;
  }

  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    commitResult();
    return;
  }

  if (key === 'Backspace') {
    deleteLast();
    return;
  }

  if (key === 'Escape' || key === 'Delete') {
    clearAll();
    return;
  }
});

clearAll();
