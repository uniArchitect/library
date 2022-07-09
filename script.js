// Book Class
class Book {
    constructor(name, author, pages, hasRead) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
        this.info = function() {
            return this.name + ', ' + this.author + ', ' + this.pages + ', Has read? ' + this.hasRead;
        }
    }

    addBookToLibrary() {
        let newBook = new Book(NAME_INPUT.value, AUTHOR_INPUT.value, PAGE_INPUT.value, READ_INPUT.value);
        myLibrary = [newBook];
        console.log(newBook.info());
        return myLibrary;
    }
}

// GLOBAL SCOPE

// '#' is the id selector
// '.' is the class selector
const NAME_INPUT = document.querySelector('#name');
const AUTHOR_INPUT = document.querySelector('#author')
const PAGE_INPUT = document.querySelector('#page-count')
const READ_INPUT = document.querySelector('#read-status')
const SUBMIT_BUTTON = document.querySelector('#book-submit')
let myLibrary = [];

const book = new Book(NAME_INPUT.value, AUTHOR_INPUT.value, PAGE_INPUT.value, READ_INPUT.value)

// Defined a variable for a created new book
// const testBook = new Book('NAME_INPUT', 'AUTHOR_INPUT', 'PAGE_INPUT', 'READ_INPUT')

// addedBook is what will get pushed into myLibrary
// Book.prototype.addBookToLibrary = function(newBook) {
//     myLibrary = [newBook];
//     console.log(myLibrary);
// }

SUBMIT_BUTTON.addEventListener('click', () => {
    book.addBookToLibrary();
})

// Create a new class to receive stored books after they have been input by the user