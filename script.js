// GLOBAL SCOPE

// '#' is the id selector
const NAME_INPUT = document.querySelector('#name') 
const AUTHOR_INPUT = document.querySelector('#author')
const PAGE_INPUT = document.querySelector('#page-count')
const READ_INPUT = document.querySelector('#read-status')
const SUBMIT_BUTTON = document.querySelector('#book-submit')
let myLibrary = [];

function book(NAME_INPUT, AUTHOR_INPUT, PAGE_INPUT, READ_INPUT) {
    this.name = NAME_INPUT;
    this.author = AUTHOR_INPUT;
    this.pages = PAGE_INPUT;
    this.hasRead = READ_INPUT;
}

// Defined a variable for a created new book

let newBook1 = new book('LotR','Tolkien', '1000', 'Yes')

// addedBook is what will get pushed into myLibrary

book.prototype.addBookToLibrary = function(addedBook) {
    myLibrary = [addedBook];
    console.log(myLibrary);
}

// SUBMIT_BUTTON.addEventListener('click', () => {

// })