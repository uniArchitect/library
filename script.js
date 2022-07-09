// Book Class - Handles creating new book objects
// Instantiate - New instance of an object
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
}

// UI Class - Handles creating new UI for adding books to the library
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                // A ':' delimits properties of the book
                name: 'Lord of the Rings',
                author: 'JRR Tolkien',
                pages: '1178', 
                hasRead: 'No',
            },
            {
                name: 'The House of the Scorpion',
                author: 'Nancy Farmer',
                pages: '380', 
                hasRead: 'Yes',
            }
        ];

        // Setting books to the array 'StoredBooks'
        const books = StoredBooks;

        // For each book called, run the addBookToList method to add it to the page
        // 'book' may need to be 'Book' based on what I've already created
        books.forEach((Book) => UI.addBookToList(Book));
    }

    static addBookToList(Book) {
        const list = document.querySelector('.library-background');

        const bookCard = document.createElement('div');

        bookCard.innerHTML = `
        <p>Title: ${Book.name}</p>
        <p>Author: ${Book.author}</p>
        <p>Page Count: ${Book.pages}</p>
        <p>Has Read? ${Book.hasRead}</p>
        `;

        list.appendChild(bookCard);
    }
}

// Store Class - Handles storage (Important for later)

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('.sign-up-field').addEventListener('submit', (e) => {
    
    e.preventDefault();

    // Recording form values
    const name = document.querySelector('#name').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#page-count').value;
    const hasRead = document.querySelector('#read-status').value;

    const book = new Book(name, author, pages, hasRead);

    console.log(book.info());
    return myLibrary;
})
// Event: Remove a Book

// GLOBAL SCOPE

// '#' is the id selector
// '.' is the class selector
const NAME_INPUT = document.querySelector('#name');
const AUTHOR_INPUT = document.querySelector('#author')
const PAGE_INPUT = document.querySelector('#page-count')
const READ_INPUT = document.querySelector('#read-status')
const SUBMIT_BUTTON = document.querySelector('#book-submit')
let myLibrary = [];

// const book = new Book(NAME_INPUT.value, AUTHOR_INPUT.value, PAGE_INPUT.value, READ_INPUT.value)

// Defined a variable for a created new book
// const testBook = new Book('NAME_INPUT', 'AUTHOR_INPUT', 'PAGE_INPUT', 'READ_INPUT')

// addedBook is what will get pushed into myLibrary
// Book.prototype.addBookToLibrary = function(newBook) {
//     myLibrary = [newBook];
//     console.log(myLibrary);
// }