// Creating the arrays for save
let models = [];
let years = [];
let values = [];
let counter = 0;

let continuing = true;
while (continuing) {
  let model = prompt("Enter the car model: ");
  let year = parseInt(prompt("Enter the car year: "));
  let value = parseFloat(prompt("Enter the car value: "));

  models[counter] = model;
  years[counter] = year;
  values[counter] = value;
  counter++;

  let wishContinue = parseInt(prompt("Wish to continue? (1) yes or (2) no: "));
  if (wishContinue == 2) {
    continuing = false;
  }
}

// Display on screen
for (let i = 0; i < models.length; i++) {
  console.log(`car model: ${models[i]}, year: ${years[i]}, value: ${values[i]}`);
}

// Sorting by values
for (let i = 0; i < values.length - 1; i++) {
  for (let j = 0; j < values.length - i - 1; j++) {
    if (values[j] > values[j + 1]) {

      let highestValueModel = models[j];
      models[j] = models[j + 1];
      models[j + 1] = highestValueModel;

      let highestValueYear = years[j];
      years[j] = years[j + 1];
      years[j + 1] = highestValueYear

      let highestValue = values[j];
      values[j] = values[j + 1];
      values[j + 1] = highestValue;
    }
  }
}

console.log("Sorted car by value: ");
for (let i = 0; i < models.length; i++) {
  console.log(`${models[i]} - ${years[i]} - ${values[i]}`);
}

