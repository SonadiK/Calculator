//
let input = document.getElementById("input");

function clearInput() {
  input.value = "";
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}

function inputNum(num) {
  input.value += num;
}

function inputOperator(operator) {
  input.value += operator;
}

function inputDecimal() {
  if (!input.value.include(".")) {
    input.value += ".";
  }
}

function inputNegative() {
  if (input.value[0] !== "-") {
    input.value = "-" + input.value;
  } else {
    input.value = input.value.slice(1);
  }
}

// document.addEventListener("mousemove", function (event) {
//   var cursor = document.querySelector(".cursor");
//   cursor.style.left = event.clientX + "px";
//   cursor.style.top = event.clientY + "px";
// });

// document.addEventListener("mousedown", function () {
//   var cursor = document.querySelector(".cursor");
//   cursor.classList.add("mousedown");
// });

// document.addEventListener("mouseup", function () {
//   var cursor = document.querySelector(".cursor");
//   cursor.classList.remove("mousedown");
// });
