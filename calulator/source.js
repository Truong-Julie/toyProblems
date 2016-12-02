const numbers = document.getElementsByClassName('number');

const symbols = document.getElementsByClassName('symbol');
const screen =  document.getElementById('screen');
const enter =  document.getElementById('enter');
const clear =  document.getElementById('clear');

let currentValue = '';
let currentCalculation = '';

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener('click', (e) => {
    currentValue += e.target.innerText;
    screen.innerHTML = currentValue;
  })
}

for (let i = 0; i < symbols.length; i++) {
  symbols[i].addEventListener('click', (e) => {
    currentCalculation += currentValue + e.target.innerHTML;
    console.log(currentCalculation);
    currentValue = '';
  })
}

screen.innerHTML = currentValue;

clear.addEventListener('click', () => {
  currentValue = '';
  currentCalculation = '';
  screen.innerHTML = '';
});

enter.addEventListener('click', () => {
  currentCalculation += currentValue;
  currentValue = '';
  currentCalculation = eval(currentCalculation);
  screen.innerHTML =  currentCalculation;

});
