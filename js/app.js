let calc = false;

function insertValues(num) {

  if (calc == true) {

    clearInput();
    calc = false;
  }

  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = input + num

  /* console.log(input); */

};

function calculate() {

  calc = true;

  const input = document.getElementById('input-value').value

  document.getElementById('input-value').value = eval(input);

}

function clearInput() {

  document.getElementById('input-value').value = "";

}

function invertValue() {

  calculate();

  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = input * -1;

}

function percent() {
/*   clicks++;

  console.log(clicks); */

  const input = document.getElementById('input-value').value;
  document.getElementById('input-value').value = parseFloat((input * 0.01));
}