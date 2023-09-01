// Creating variables
let array = [];
let indexesFound = [];

// Populating array
for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt(`Type the ${i + 1} number: `));
  array[i] = number;
}

// Looking for number
let wantedNumber = parseInt(prompt("Enter a number you want to search for in the array: "));

let counter = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] === wantedNumber) {
    indexesFound[counter] = 1;
    counter++;
  }
}

console.log(`The inserted number appears in the indexes ${indexesFound}`);

