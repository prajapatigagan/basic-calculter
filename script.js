let display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    // Numbers 0-9
    appendValue(key);
  } else if (["+", "-", "*", "/","%"].includes(key)) {
    appendValue(key);
  } else if (key === ".") {
    appendValue(".");
  } else if (key === "Enter" || key === "=") {
    event.preventDefault(); // Prevent form submission
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
