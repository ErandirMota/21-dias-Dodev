let arrayBooks = [];

class Book {
  Title
  Author
  Company
  YearPublication
  Availability
  
  constructor(title, author, company, yearPublication) {
    this.Title = title;
    this.Author = author;
    this.Company = company;
    this.YearPublication = yearPublication;
  }
}

let book1 = new Book("Rich Dad Poor Dad", "Robert Kayosaki", "Plata Publishing", "1997");
arrayBooks.push(book1);

let book2 = new Book("How to Win Friend and influence People", "Dale Carnegie", "Simon & Schuster", "1936");
arrayBooks.push(book2);

class Library {
  Name
  Address
  Telephone
  BookCollection

  constructor(name, address, telephone, bookCollection) {
    this.Name = name;
    this.Address = address;
    this.Telephone = telephone;
    this.BookCollection = [];
  }

  lookForBook(title) {
    arrayBooks.forEach(book => {
      if (book.Title === title) {
        console.log(`Book Title: ${book.Author}`);
        console.log(`Publishing Company: ${book.Company}`);
        console.log(`Year Publication: ${book.YearPublication}`);
        console.log(`Availability Book: ${book.Availability}`);
      }
    })
}