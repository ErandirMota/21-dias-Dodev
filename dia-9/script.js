let continuing = true;
while (continuing) {
    // Getting personal informations and saving
  let name = prompt("Type your name: ");
  let age = parseInt(prompt("Type you age: "));
  let weight = parseInt(prompt("Type your weight: "));
  let height = prompt("Type your height: ");
  let profession = prompt("Type your profession: ");

  // Displaying the personal informations
  console.log(`Hello ${name}, you're ${age} years old, is a ${profession}, have ${height}m and weighs ${weight}kg.`);

  // Checking if the person can to drink
  if (age >= 18) {
    console.log("You're released to drink some cold ones!");
  } else {
    console.log("No some cold ones for you dude.");
  }

  // Transferring age in months, weeks and days
  let ageMonths = age * 12;
  let ageWeeks = age * 48;
  let ageDays = age * 365;

  // Displaying the informations
  console.log(`Your age in months: ${ageMonths}, weeks: ${ageWeeks}, days: ${ageDays}`);

  // Calculating the person's IMC
  let imc = weight / (height * height);

  // Checking the IMC result
  console.log("------ IMC ------");
  if (imc < 18.5) {
    console.log("Thinness");
  } else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal");
  } else if (imc >= 24.9 && imc <= 30) {
    console.log("Overweight");
  } else {
    console.log("Obesity");
  }

  console.log("------------------------")
  console.log("All the vivid years: ");

  let year = 2023 - age
  for (let i = 0; i <= age; i++) {
    console.log(`${year} - ${i} years old`);
    year++;
  }

  let wishContinue = parseInt(prompt("Wish to continue? (1) yes or (2) no"));
  if (wishContinue === 2) {
    continuing = false;
  }
}




