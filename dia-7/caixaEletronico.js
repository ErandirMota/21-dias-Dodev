let totalBalance = 0;
let values = 0;
let inserted = 0;
let averageValues = 0;
let highestValue = 0;
let name = prompt("Type your name: ");
let cpf = prompt("Type your cpf: ");

let continuer = true;
while (continuer) {
  let transactionValue = parseInt(prompt("What the transaction value?"));
  inserted++;
  values += transactionValue;
  let option = parseInt(prompt("Choice a option: (1) Withdraw (2) Deposit"));
  if (option === 1) {
    if (transactionValue > totalBalance) {
      console.log("Total balance insufficient! ");
    } else {
      totalBalance -= transactionValue;
    }
  } else if (option === 2) {
    totalBalance += transactionValue;
  } else {
    console.log("Invalid option!");
  }

  if (highestValue < transactionValue) {
    highestValue = transactionValue;
  }

  let wishContinuer = parseInt(prompt("Wish to continue? (1) yes or (2) no"));
  if (wishContinuer === 2) {
    continuer = false;
  }

  averageValues = values / inserted;
}

console.log(`Total balance: ${totalBalance}`);
console.log(`Highest value inserted: ${highestValue}`);
console.log(`Average values inserted: ${averageValues}`);
