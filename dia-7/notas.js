let note = 0;
let sex;
let overallAverage = 0;
let sumNotes = 0;
let men = 0;
let womenNoteAboveSeven = 0;
let higherGradeMen = 0;
let students = 0;

let continuer = true;
while (continuer) {
  note = parseInt(prompt("Type the student grade: "));
  sex = prompt("Type the student gender: (m) or (f)");
  students++;
  sumNotes += note;
  overallAverage = sumNotes / students;

  if (sex === "m") {
    men++;
    if (higherGradeMen < note) {
      higherGradeMen = note;
    }
  } else if (sex === "f") {
    if (note > 7) {
      womenNoteAboveSeven++;
    }
  }

  let wishContinue = parseInt(prompt("do you wish to continue? (1) yes or (2) no"));
  if (wishContinue === 2) {
    continuer = false;
  }
}

console.log(`The overall average is: ${overallAverage}`);
console.log(`Men sent the notes are: ${men}`);
console.log(`Women with note above seven: ${womenNoteAboveSeven}`);
console.log(`The highest men notes: ${higherGradeMen}`);



