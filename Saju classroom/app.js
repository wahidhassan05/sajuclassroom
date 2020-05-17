let res,
  firstNum = document.getElementById("firstNumV1"),
  firstNumV2 = document.getElementById("firstNumV2"),
  secNum = document.getElementById("secNumV1"),
  secNumV2 = document.getElementById("secNumV2"),
  result1 = document.getElementById("res1"),
  result2 = document.getElementById("res2"),
  multButton1 = document.getElementById("multButton1"),
  multButton2 = document.getElementById("multButton2"),
  firstSemiRes,
  secondSemiRes,
  semiRes1 = document.getElementById("semiRes1"),
  semiRes2 = document.getElementById("semiRes2"),
  moddedNum,
  anotherNum;

function multiplication1() {
  res = parseInt(firstNum.value) * parseInt(secNum.value);
  result1.textContent = res;
}

function multiplication2() {
  res = parseInt(firstNumV2.value) * parseInt(secNumV2.value);
  result2.textContent = res;
}

function secMultOne() {
  moddedNum = parseInt(secNumV2.value) % 10;
  firstSemiRes = parseInt(firstNumV2.value) * moddedNum;
  semiRes1.textContent = firstSemiRes;
}

function secMultTwo() {
  anotherNum =
    (parseInt(secNumV2.value) - (parseInt(secNumV2.value) % 10)) / 10;
  secondSemiRes = anotherNum * parseInt(firstNumV2.value);
  semiRes2.textContent = secondSemiRes;
}

function doubleMult() {
  secMultOne();
  secMultTwo();
  multiplication2();
}

multButton1.addEventListener("click", multiplication1);
multButton2.addEventListener("click", doubleMult);
