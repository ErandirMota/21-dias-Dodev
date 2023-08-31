 let clientName;
 let clientAge = 0;
 let clientWage = 0;
 
 let continuing = true;
 while (continuing) {
  clientName = prompt("Type your name: ");
  clientAge = parseInt(prompt("Type your age: "));
  clientWage = parseFloat(prompt("Type your wage: "));

  console.log(`Hello ${clientName}, you're ${clientAge} years old, your wage is ${clientWage}.`)

  let wishContinue = parseInt(prompt("The informations are correct? (1) yes or (2) no: "));
  if (wishContinue === 1) {
    continuing = false;
  }
 }

 // Calculating the wage forecast for next years
 let increase = 0.015
 console.log("Forecast for next years: ");

 for (let year = 1; year <= 10; year++) {
  clientWage += clientWage * increase;
  increase *= 2;

  console.log(`${2024 + year} - R$ ${clientWage}`);
 }



