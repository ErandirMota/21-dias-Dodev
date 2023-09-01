// Creating array for save the numbers
let array = [];
let reverseArray = [];

let askingNumber = parseInt(prompt("How many numbers do you want to enter?"))

// Asking five numbers
for (let i = 0; i < askingNumber; i++) {
  let numbers = parseInt(prompt(`Type the ${i + 1} number`));
  array.push(numbers);
}
// Displays the array
console.log("Original array: " + array);

// Reverse positions in the array
let counter = askingNumber - 1;
for (let i = 0; i < askingNumber; i++) {
  reverseArray[i] = array[counter];
  counter--;
}

console.log("Reverse array: " + reverseArray);


