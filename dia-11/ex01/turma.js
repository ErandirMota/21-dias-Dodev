let names = [];
let notes = [];
let counter = 0;
let sumNotes = 0;
let students = 0;
let studentsMedia = 0;

let continuing = true;
while (continuing) {
  let name = prompt("Enter the student's name: ");
  let note = parseFloat(prompt("Enter the student's note: "));
  students++;
  sumNotes += note;

  names[counter] = name;
  notes[counter] = note;
  counter++;

  studentsMedia = sumNotes / students;

  let wishContinue = parseInt(prompt("Wish to continue? (1) yes or (2) no: "));
  if (wishContinue === 2) {
    continuing = false;
  }
}

console.log(`The student's note: ${notes}`);
console.log(`The sum notes: ${sumNotes}`);
console.log(`The general media: ${studentsMedia}`);