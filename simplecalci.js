let x = prompt("enter operator(+,-,*,/,%):");
let a = parseFloat(prompt("enter the first operand:"));
let b = parseFloat(prompt("enter the second operand:"));
let c;
switch (x) {
  case "+":
    c = a + b;
    break;
  case "-":
    c = a - b;
    break;
  case "*":
    c = a * b;
    break;
  case "/":
    c = a / b;
    break;
  case "%":
    c = a % b;
    break;
  default:
    c = "invalid";
}
