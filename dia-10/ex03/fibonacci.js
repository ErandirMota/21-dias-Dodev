// Creating valuables
let number = parseInt(prompt("Enter a number: "));
let fibonacci = [];
fibonacci[0] = number - 1;
fibonacci[1] = number;

// Creating loops
for (let i = 2; i < 10; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Fibonacci: " + fibonacci);