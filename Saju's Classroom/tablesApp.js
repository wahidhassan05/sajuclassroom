let col1 = document.getElementById("col1"),
  col2 = document.getElementById("col2"),
  col3 = document.getElementById("col3"),
  col4 = document.getElementById("col4"),
  col5 = document.getElementById("col5"),
  col6 = document.getElementById("col6"),
  col7 = document.getElementById("col7"),
  col8 = document.getElementById("col8"),
  col9 = document.getElementById("col9"),
  col10 = document.getElementById("col10"),
  col11 = document.getElementById("col11"),
  col12 = document.getElementById("col12"),
  col13 = document.getElementById("col13"),
  col14 = document.getElementById("col14"),
  col15 = document.getElementById("col15"),
  col16 = document.getElementById("col16"),
  col17 = document.getElementById("col17"),
  col18 = document.getElementById("col18");

let input = document.getElementById("input");

let showBtn = document.getElementById("showBtn");
let hideBtn = document.getElementById("hideBtn");

let showMultiplesSet1 = () => {
  col7.textContent = 1;
  col8.textContent = 2;
  col9.textContent = 3;
  col10.textContent = 4;
  col11.textContent = 5;
  col12.textContent = 6;
};

let showMultiplesSet2 = () => {
  col7.textContent = 7;
  col8.textContent = 8;
  col9.textContent = 9;
  col10.textContent = 10;
  col11.textContent = 11;
  col12.textContent = 12;
};

let showTables = (num) => {
  col1.textContent = num;
  col2.textContent = num;
  col3.textContent = num;
  col4.textContent = num;
  col5.textContent = num;
  col6.textContent = num;
};

let showNum = () => {
  let userInputChoice = input.options[input.selectedIndex].value;

  if (userInputChoice === "2") {
    showMultiplesSet1();
    showTables(2);
  } else if (userInputChoice === "3") {
    showMultiplesSet2();
    showTables(2);
  } else if (userInputChoice === "4") {
    showMultiplesSet1();
    showTables(3);
  } else if (userInputChoice === "5") {
    showMultiplesSet2();
    showTables(3);
  } else if (userInputChoice === "6") {
    showMultiplesSet1();
    showTables(4);
  } else if (userInputChoice === "7") {
    showMultiplesSet2();
    showTables(4);
  } else if (userInputChoice === "8") {
    showMultiplesSet1();
    showTables(5);
  } else if (userInputChoice === "9") {
    showMultiplesSet2();
    showTables(5);
  } else if (userInputChoice === "10") {
    showMultiplesSet1();
    showTables(6);
  } else if (userInputChoice === "11") {
    showMultiplesSet2();
    showTables(6);
  } else if (userInputChoice === "12") {
    showMultiplesSet1();
    showTables(7);
  } else if (userInputChoice === "13") {
    showMultiplesSet2();
    showTables(7);
  } else if (userInputChoice === "14") {
    showMultiplesSet1();
    showTables(8);
  } else if (userInputChoice === "15") {
    showMultiplesSet2();
    showTables(8);
  } else if (userInputChoice === "16") {
    showMultiplesSet1();
    showTables(9);
  } else if (userInputChoice === "17") {
    showMultiplesSet2();
    showTables(9);
  }
  calculate();
};

let hideNum = () => {
  col13.textContent = "?";
  col14.textContent = "?";
  col15.textContent = "?";
  col16.textContent = "?";
  col17.textContent = "?";
  col18.textContent = "?";
};

let calculate = () => {
  col13.textContent = parseInt(col1.value) * parseInt(col7.value);
  col14.textContent = parseInt(col2.value) * parseInt(col8.value);
  col15.textContent = parseInt(col3.value) * parseInt(col9.value);
  col16.textContent = parseInt(col4.value) * parseInt(col10.value);
  col17.textContent = parseInt(col5.value) * parseInt(col11.value);
  col18.textContent = parseInt(col6.value) * parseInt(col12.value);
};

showBtn.addEventListener("click", showNum);
hideBtn.addEventListener("click", hideNum);
