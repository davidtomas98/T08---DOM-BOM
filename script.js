let decimalAdded = false; // Variable para controlar si ya se ha agregado un punto decimal

// Función para agregar un número al display
function appendNumber(number) {
  const display = document.getElementById('display'); // Obtenemos el elemento del display
  const currentValue = display.value; // Obtenemos el valor actual del display

  if (currentValue === '0') {
    display.value = number; // Si el valor actual es '0', reemplazamos el valor con el número seleccionado
  } else {
    display.value += number; // Si el valor actual no es '0', concatenamos el número seleccionado al valor actual
  }
}

// Función para agregar un punto decimal al display
function appendDecimal(decimal) {
  const display = document.getElementById('display'); // Obtenemos el elemento del display
  const currentValue = display.value; // Obtenemos el valor actual del display

  if (!decimalAdded) { // Si aún no se ha agregado un punto decimal
    display.value += decimal; // Concatenamos el punto decimal al valor actual del display
    decimalAdded = true; // Marcamos que se ha agregado un punto decimal
  }
}

// Función para realizar operaciones matemáticas en el display
function operate(operator) {
  const display = document.getElementById('display'); // Obtenemos el elemento del display
  const currentValue = display.value; // Obtenemos el valor actual del display
  const lastChar = currentValue[currentValue.length - 1]; // Obtenemos el último carácter del valor actual

  if (['+', '-', '*', '/'].includes(lastChar)) { // Si el último carácter es un operador matemático
    display.value = currentValue.slice(0, -1) + operator; // Reemplazamos el último operador por el operador seleccionado
  } else {
    display.value += operator; // Si no, simplemente concatenamos el operador seleccionado al valor actual
  }

  decimalAdded = false; // Marcamos que aún no se ha agregado un punto decimal después de la operación
}

// Función para limpiar el display
function clearDisplay() {
  const display = document.getElementById('display'); // Obtenemos el elemento del display
  display.value = '0'; // Establecemos el valor del display a '0'
  decimalAdded = false; // Marcamos que aún no se ha agregado un punto decimal después de la limpieza
}

// Función para realizar el cálculo matemático
function calculate() {
  const display = document.getElementById('display'); // Obtenemos el elemento del display
  display.value = eval(display.value); // Evaluamos la expresión matemática y mostramos el resultado en el display
  decimalAdded = false; // Marcamos que aún no se ha agregado un punto decimal después del cálculo
}
