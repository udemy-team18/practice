function add() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let result = parseInt(num1) + parseInt(num2);
  document.getElementById('result').innerHTML = result;
}

function sub() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let result = parseInt(num1) - parseInt(num2);
  document.getElementById('result').innerHTML = result;
}
function multi() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let result = parseInt(num1) * parseInt(num2);
  document.getElementById('result').innerHTML = result;
}
function division() {
  let num1 = document.getElementById('number1').value;
  let num2 = document.getElementById('number2').value;
  let result = parseInt(num1) / parseInt(num2);
  document.getElementById('result').innerHTML = result;
}
