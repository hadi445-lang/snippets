export class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  displayDetails() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}`
    );
  }

  changeGenre(newGenre) {
    this.genre = newGenre;
    console.log(
      `The genre of "${this.title}" has been updated to ${this.genre}.`
    );
  }
}
import { Book } from './BookModule.js';

export class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBooks() {
    this.books.forEach(book => book.displayDetails());
  }
}
import { Book } from './BookModule.js';
import { Library } from './LibraryModule.js';

const library = new Library();

const book1 = new Book("1984", "George Orwell", "Dystopian");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
