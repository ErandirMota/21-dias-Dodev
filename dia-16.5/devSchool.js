let students = [];

class Student {
  Name
  Age
  Note

  constructor(name, age, note) {
    this.Name = name
    this.Age = age
    this.Note = note
  }
}

function registerStudent(name, age, bote) {
  let student = new Student(name, age, note);
  let index = students.indexOf(student);
  if (index !== -1) {
    console.log("Student already exist!");
  } else {
    students.push(student)
  }

  return student;
}

function orderByNote(array) {
  array.sort((a, b) => a.Note - b.Note)
  return array  
}

function orderByAge(array) {
  array.sort((a, b) => b.Age - a.Age)
}

function orderByName(array) {
  array.sort((a, b) => {
    const nameA = a.Name.toUpperCase();
    const nameB = b.Name.toUpperCase();
    
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  return array;
}

function calculateAverage(array) {
  if (array.length === 0) {
    return 0
  }
  let sumNotes = 0;

  array.forEach((student) => {
    sumNotes += Number(student.Note)
  });

  const media = sumNotes / array.length;
  return media;
}