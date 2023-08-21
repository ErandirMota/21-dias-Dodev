let num1 = parseInt(prompt("Type first number: "));
let num2 = parseInt(prompt("Type second number: "));

let opcao = parseInt(prompt("\n1 - sum \n2 - subtract \n3 - multiply \n4 - divide"));
switch (opcao) {
  case 1:
    console.log(`The sum is: ${num1 + num2}`);
    break;
  case 2:
    console.log(`The subtraction is: ${num1 - num2}`);
    break;
  case 3:
    console.log(`The multiplication is: ${num1 * num2}`);
    break;
  case 4:
    console.log(`The division is: ${num1 / num2}`);
    break;
  default:
    alert("Invalid option!");
    break;
}