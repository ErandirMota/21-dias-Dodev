let option = parseInt(prompt("Choice: \n1 - to fuel with gasoline \n2 - to fuel with alcohol \n3 - calibrate the tires"));

switch (option) {
  case 1:
    let valueGasoline = parseFloat(prompt("What the value wish to fuel?"));
    let amountLiters = valueGasoline / 5;
    console.log(`The amount of liters is: ${amountLiters}L`);
    break;
  case 2:
    let valueAlcohol = parseFloat(prompt("What the value wish to fuel?"));
    let amountAlcohol = valueAlcohol / 3;
    console.log(`The amount of liters is: ${amountAlcohol}L`);
    break;
  case 3:
    console.log("Successfully calibrated tires");
    break;
  default:
    alert("Invalid option!");
    break;
}