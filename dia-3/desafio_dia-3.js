// asking informacions and storing in variables
let name = prompt("type your name: ");
let age = parseInt(prompt("type your age: "));
let height = parseFloat(prompt("type your height: "));
let weight = parseInt(prompt("type your weight: "));

// calculating with information obtained
let birth = 2023 - age;
let imc = weight / (height * height);

// displays the information 
console.log(`Hello ${name}, you are ${age} years old, was born in ${birth}, have ${height} tall, weighs ${weight}kg your IMC is ${imc}`);