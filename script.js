// GLOBAL SCOPE

// '#' is the id selector
// '.' is the class selector
const NAME_INPUT = document.querySelector('#name');
const AUTHOR_INPUT = document.querySelector('#author')
const PAGE_INPUT = document.querySelector('#page-count')
const READ_INPUT = document.querySelector('#read-status')
const SUBMIT_BUTTON = document.querySelector('#book-submit')
let myLibrary = [];

function Book(name, author, pages, hasRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        return this.name + ', ' + this.author + ', ' + this.pages + ', ' + this.hasRead;
    }
}

// Defined a variable for a created new book

const newBook = new Book('NAME_INPUT', 'AUTHOR_INPUT', 'PAGE_INPUT', 'READ_INPUT')

// addedBook is what will get pushed into myLibrary

Book.prototype.addBookToLibrary = function(newBook) {
    myLibrary = [newBook];
    console.log(myLibrary);
}

// Create a function that will take the global scope variables in the constructor and define a new variable with all the variables
// Use the prototype to help??

SUBMIT_BUTTON.addEventListener('click', () => {
    Book.addBookToLibrary(newBook);
})