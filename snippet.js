class Book {
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

const book1 = new Book("1984", "George Orwell", "Dystopian");
book1.displayDetails();
book1.changeGenre("Classic");
