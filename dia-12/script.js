// Arrays for to save names and passwords
let names = [];
let passwords = [];



let counter = 0;
let continuing = true;
while (continuing) {
  // Ask the user what to do
  let choice = parseInt(
    prompt(
      "Choose what to do: \n1 - Register \n2 - Login \n3 - Delete register \n4- Close program"
    )
  )

  switch (choice) {
    case 1:
      let newName = prompt("Enter your name: ")
      let newPassword = prompt("Enter a password: ")

      names[counter] = newName
      passwords[counter] = newPassword
      counter++
      break
    case 2:
      let name = prompt("Enter your name: ")
      let password = prompt("Enter the password: ")

      // Verifying name and password
      for (let i = 0; i < names.length; i++) {
        if (names[i] == name && passwords[i] == password) {
          console.log("Sucessful login!")
        }
      }
      break
    case 3:
      let deleteName = prompt("Enter the name to wish delete: ")
      let newNames = []
      let newPasswords = []

      for (let i = 0; i < names.length; i++) {
        if (deleteName == names[i]) {
          names -= names[i]
          passwords -= passwords[i]

          newNames[i] = names[i]
          newPasswords[i] = passwords[i]
        }
      }
      break
    case 4:
      console.log("Programa finalizado.")
      continuing = false
      break
    default:
      alert("Invalid option!")
      break
  }
}