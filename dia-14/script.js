let newWage = 0;
let increase = 0;

function askIformation() {
  let name = prompt("Enter your name: ");
  let wage = parseFloat(prompt("Enter your wage: "));

  increaseWage(name, wage);
}

function increaseWage(name, wage) {
  if (wage <= 1500) {
    increase = 1.20;
    newWage = wage * increase;
  } else if (wage <= 2000) {
    increase = 1.15;
    newWage = wage * increase;
  } else if (wage <= 3000) {
    increase = 1.10;
    newWage = wage * increase;
  } else {
    increase = 1.05;
    newWage = wage * increase;
  }

  console.log(`Nome: ${name}`);
  console.log(`Wage: ${wage}`);
  console.log(`Increase: ${increase}`);
  console.log(`New wage: ${newWage}`);

  calculateAgain();
}

function calculateAgain() {
  let toAsk = parseInt(prompt("Wish to calculate again with new information? (1) yes or (2) no: "));

  if (toAsk == 1) {
    askIformation();
  } else {
    console.log("Finalized program.");
  }
}

askIformation();


