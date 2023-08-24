/*
// Counting to the desired number
let value = parseInt(prompt("Type a number: "));

for (let i = 0; i <= value; i++) {
  console.log(i);
}

// Counting to 50 jumping 5 by 5
for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}

// Counting in the reverse order
for (let i = 50; i > 0; i -= 5) {
  console.log(i);
}
*/
// Display on screen what the result table number received
let number = parseInt(prompt("Type a number: "));
for (let i = 0; i <= number + 2; i++) {
  console.log(`Number table: ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
