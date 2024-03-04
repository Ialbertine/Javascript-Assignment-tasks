/* create a simple library management system that allows users to add books, berrow and return book, books should be 
repesented as objects with properties like title author and availability 
Requirements:
Implement functions to add books to the library.
Create a function to display the list of available books.
Develop functions for users to borrow and return books, updating their availability status.
Ensure proper validation to handle cases like trying to borrow an unavailable book. */


function Book(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;
  }

  function Library() {
    this.books = [];
    this.addBook = function (title, author) {
      const newBook = new Book(title, author);
      this.books.push(newBook);
      console.log(`${newBook.title} by ${newBook.author} has been added to the library.`);
    }; 
    this.displayAvailableBooks = function () {
        console.log("Available Books:");
        this.books.forEach((book) => {
          if (book.available) {
            console.log(`${book.title} by ${book.author}`);
          }
        });
      };
     // Function to borrow a book
  this.borrowBook = function (title) {
    const book = this.findBook(title);

    if (book) {
      if (book.available) {
        book.available = false;
        console.log(`You have successfully borrowed ${book.title} by ${book.author}.`);
      } else {
        console.log(`${book.title} is currently unavailable.`);
      }
    } else {
      console.log(`Book with title "${title}" not found.`);
    }
  };

   // Function to return a borrowed book
   this.returnBook = function (title) {
    const book = this.findBook(title);

    if (book) {
      if (!book.available) {
        book.available = true;
        console.log(`You have successfully returned ${book.title} by ${book.author}.`);
      } else {
        console.log(`This book is already in the library.`);
      }
    } else {
      console.log(`Book with title "${title}" not found.`);
    }
  };
  // Helper function to find a book by title
  this.findBook = function (title) {
    return this.books.find((book) => book.title === title);
  };
}

// Example usage
const library = new Library();

library.addBook("Harry Potter", "Joanna Rowling");
library.addBook("Rich Dad and Poor Dad", "Robert Kiyosaki");
library.addBook("Living Enlightment", "Paramahamsa Nithyananda");

library.displayAvailableBooks();

library.borrowBook("Rich Dad and Poor Dad");
library.borrowBook("Harry Potter");

library.displayAvailableBooks();

library.returnBook("Rich Dad and Poor Dad");

library.displayAvailableBooks();
