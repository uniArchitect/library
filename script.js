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
                hasRead: 'Not Read',
            },
            {
                name: 'The House of the Scorpion',
                author: 'Nancy Farmer',
                pages: '380', 
                hasRead: 'Has Read',
            }
        ];

        // Setting books to the array 'StoredBooks'
        const books = StoredBooks;

        // For each book called, run the addBookToList method to add it to the page
        // 'book' may need to be 'Book' based on what I've already created
        books.forEach((Book) => UI.addBookToLibrary(Book));
    }

    static addBookToLibrary(Book) {
        const list = document.querySelector('.library-background');

        // Create div element for book-card
        const bookCard = document.createElement('div');
        const bookStatus = document.createElement('button')

        // Add class book-card to created div element
        bookCard.classList.add('book-card');
        bookStatus.classList.add('book-status');

        // Should be a button that toggles off between 'Has Read' and 'Not Read'
        bookCard.innerHTML = `
        <p>Title: ${Book.name}</p>
        <p>Author: ${Book.author}</p>
        <p>Page Count: ${Book.pages}</p>
        `;

        bookStatus.innerHTML = `
        ${Book.hasRead}
        `

        list.appendChild(bookCard);
        // Added button status for 'Has Read' and 'Not Read' on book card
        bookCard.appendChild(bookStatus);
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#page-count').value = '';
        document.querySelector('#read-status').value = '';
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

    // Add the book to our library
    UI.addBookToLibrary(book);

    // Clears the form when submitting a book to library
    UI.clearFields();
})
// Event: Remove a Book

// GLOBAL SCOPE

// '#' is the id selector
// '.' is the class selector
// let myLibrary = [];

// addedBook is what will get pushed into myLibrary
// Book.prototype.addBookToLibrary = function(newBook) {
//     myLibrary = [newBook];
//     console.log(myLibrary);
// }

// Book Menu Sidebar
const bookMenu = document.querySelector("aside");
const menuBtn = document.querySelector('#book-menu-open');
const closeBtn = document.querySelector('#book-menu-close');

menuBtn.addEventListener('click', () => {
    bookMenu.style.display = 'block';
    menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    bookMenu.style.display = 'none';
    menuBtn.style.display = 'block';
})