let names = [];
let passwords = [];

function askWhatDo() {
  let choice = parseInt(prompt("\n1 - Register \n2 - Login \n3 - Delete a register \n4- End program"));

  return choice;
}

function toRegister() {
  let name = prompt("Enter a name to register: ");
  let password = prompt("Enter a password to register: ");

  names.push(name);
  passwords.push(password);
}

function toLogin(name, password) {
  let index = names.indexOf(name);
  if (index !== -1 && passwords[index] == password) {
    return true;
  } else {
    return false;
  }
}

function toDelete(deleteName) {
  let index = names.indexOf(deleteName);
  if (index !== -1) {
    names.splice(index, 1);
    passwords.splice(index, 1);
    console.log("The register to delete sucessfuly!");
  } else {
    console.log("User not found");
  }
}

// Operating flow
let continuing = true;
while (continuing) {
  let choice = askWhatDo();

  switch (choice) {
    case 1:
      toRegister();
      break;
    case 2:
      let name = prompt("Enter tthe name: ");
      let password = prompt("Enter the password: ");
      let login = toLogin(name, password);
      if (login) {
        console.log("Login successfully!");
      } else {
        console.log("Name or password incorrects");
      }
      break;
    case 3:
      let deleteName = prompt("Enter the name account to remove: ");
      toDelete(deleteName);
      break;
    case 4:
      console.log("Finalized program.");
      continuing = false;
      break;
    default:
      alert("Invalid option!");
      break;
    }
  }