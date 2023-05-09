//
let input = document.getElementById("input");

// Function to clear the input field.
function clearInput() {
  input.value = "";
}

// Function to delete the last character from the input field.
function backspace() {
  input.value = input.value.slice(0, -1);
}

// Function to calculate the result of the input expression.
function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = "Error";
  }
}

// Function to add a number or operator to the input field.
function inputNum(num) {
  input.value += num;
}

// Function to add an operator to the input field.
function inputOperator(operator) {
  input.value += operator;
}

// Function to add a decimal point to the input field.
function inputDecimal() {
  if (!input.value.include(".")) {
    input.value += ".";
  }
}

// Function to toggle the sign of the input field.
function inputNegative() {
  if (input.value[0] !== "-") {
    input.value = "-" + input.value;
  } else {
    input.value = input.value.slice(1);
  }
}
