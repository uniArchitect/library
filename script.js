let myLibrary = [];

function book(name, author, pages, hasRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

// Defined a variable for a created new book

let newBook1 = new book('LotR','Tolkien', '1000', 'Yes')

// addedBook is what will get pushed into myLibrary

book.prototype.addBookToLibrary = function(addedBook) {
    myLibrary = [addedBook];
    console.log(myLibrary);
}

const SUBMIT_BUTTON = document.querySelector('[book-submit]')