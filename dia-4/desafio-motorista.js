let name = prompt("Type your name: ");
let age = parseInt(prompt("Type your age: "));
let cnh = prompt("Do you have driver's license? (s) or (n): ");
let car = prompt("Do you have a car? (s) or (n): ");

if (age < 18 || cnh === "n") {
  console.log(`${name}, you can't to drive.`);
} else if (age >= 18 && cnh === "s" && car === "n") {
  console.log(`${name}, you can to drive, but you don't have a car.`);
} else if (age >= 18 && cnh === "s" && car === "s") {
  console.log(`${name}, you will be the driver!`);
}