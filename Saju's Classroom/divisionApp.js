let divident = document.getElementById("firstNumV2"),
  divisor = document.getElementById("firstNumV9"),
  quotient = document.getElementById("firstNumV1"),
  remainder = document.getElementById("firstNumV8"),
  first = document.getElementById("firstNumV3"),
  second = document.getElementById("firstNumV4"),
  third = document.getElementById("firstNumV5"),
  fourth = document.getElementById("firstNumV6"),
  fifth = document.getElementById("firstNumV7"),
  divButton = document.getElementById("divButton");

function display() {
  quotient.textContent = parseInt(divident.value) / parseInt(divisor.value);
  remainder.textContent = 0;
  let num = quotient.value.toString();
  let num1 = divident.value.toString();

  if (num.length === 1) {
    first.textContent = parseInt(num[0]) * parseInt(divisor.value);
  } else if (num.length === 2) {
    if (parseInt(divisor.value) >= parseInt(num1[0])) {
      first.textContent = parseInt(num[0]) * parseInt(divisor.value);
      third.textContent = parseInt(num[1]) * parseInt(divisor.value);
      let num3 = parseInt(num1[0] + num1[1]) - parseInt(first.value);
      second.textContent = parseInt(num3 + num1[2]);
    } else if (parseInt(divisor.value) < parseInt(num1[0])) {
      first.textContent = parseInt(num[0]) * parseInt(divisor.value);
      third.textContent = parseInt(num[1]) * parseInt(divisor.value);
      let num4 = parseInt(num1[0]) - parseInt(first.value);
      second.textContent = parseInt(num4 + num1[1]);
    }
  } else if (num.length === 3) {
    first.textContent = parseInt(num[0]) * parseInt(divisor.value);
    third.textContent = parseInt(num[1]) * parseInt(divisor.value);
    fifth.textContent = parseInt(num[2]) * parseInt(divisor.value);
    let num2 = parseInt(num1[0]) - parseInt(first.value);
    second.textContent = parseInt(num2.toString() + num1[1]);
    let num3 =
      parseInt(num2.toString() + num1[1]) -
      parseInt(num[1]) * parseInt(divisor.value);
    fourth.textContent = parseInt(num3.toString() + num1[2]);
  }
}

divButton.addEventListener("click", display);
