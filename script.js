// Get the input field (calculator screen)
let display = document.getElementById("display");

// Function to append value (number or operator) to the display
function append(value) {
  display.value += value;
}

// Function to clear the display (AC button)
function clearDisplay() {
  display.value = "";
}

// Function to calculate the result (= button)
function calculate() {
  try {
    // Evaluate the mathematical expression
    display.value = eval(display.value);
  } catch (error) {
    // If invalid input, show error
    display.value = "Error";
  }
}

// Function to calculate the square of the current number
function square() {
  try {
    let current = eval(display.value); // get the number
    display.value = Math.pow(current, 2); // square it
  } catch (error) {
    display.value = "Error";
  }
}
