// Book Class - Handles creating new book objects
// Instantiate - New instance of an object
class Book {
    constructor(name, author, pages, hasRead) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
        this.info = function() {
            return this.name + ', ' + this.author + ', ' + this.pages + ', ' + this.hasRead;
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
        const list = document.querySelector('.container');

        // Create div element for book-card
        const bookCard = document.createElement('div');
        const bookStatus = document.createElement('button')
        const cardClose = document.createElement('button')

        // Add class book-card to created div element
        bookCard.classList.add('book-card');
        bookStatus.classList.add('book-status');
        // cardClose.classList.add('card-close');
        
        // Should be a button that toggles off between 'Has Read' and 'Not Read'
        bookCard.innerHTML = `
        <button class="card-close">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
        </button>
        <h3>${Book.name}</h3>
        <p>${Book.author}</p>
        <p>${Book.pages} pages</p>
        `;

        bookStatus.innerHTML = `
        ${Book.hasRead}
        `;

        // Close Card Icon
        // cardClose.innerHTML = '<h3>X</h3>';

        list.appendChild(bookCard);
        // Added button status for 'Has Read' and 'Not Read' on book card
        bookCard.appendChild(bookStatus);
        // Added button to delete book card
        // bookCard.appendChild(cardClose);
    }

    // Change book status - In progress 220710
    // static changeBookStatus(element) {
    //     if(element.classList.contains('book-status') && (element.innerHTML = 'Has Read')) {
    //         element.innerHTML = 'Not Read';
    //     } else if (element.classList.contains('book-status') && (element.innerHTML = 'Not Read')) {
    //         element.innerHTML = 'Has Read';
    //     }
    // }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#page-count').value = '';
        document.querySelector('#read-status').value = '';
    }

    // Close sign up on submit
    static closeForm() {
        document.querySelector("aside").style.display = 'none';
        document.querySelector('#book-menu-open').style.display = 'block';
    }

    // Remove book from library
    static removeBookfromLibrary(element) {
        if(element.classList.contains('card-close')) {
            element.parentElement.remove();
        }
    }
}

// Store Class - Handles storage (Important for later)

// GLOBAL SCOPE

// '#' is the id selector
// '.' is the class selector
// let myLibrary = [];

const bookMenu = document.querySelector("aside");
const menuBtn = document.querySelector('#book-menu-open');
const closeBtn = document.querySelector('#book-menu-close');

// Event: Open up Add Book Menu
menuBtn.addEventListener('click', () => {
    bookMenu.style.display = 'block';
    menuBtn.style.display = 'none';
})

// Event: Close Add Book Menu
closeBtn.addEventListener('click', () => {
    bookMenu.style.display = 'none';
    menuBtn.style.display = 'block';
})

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

    // Close sign up on submit
    UI.closeForm();
})

// Event: Remove a Book
document.querySelector('.container').addEventListener('click', (e) => {
    // console.log(e.target);
    // The 'target' is needed here to specifically choose the html element
    UI.removeBookfromLibrary(e.target);
})

// Event: Change Has Read Status
document.addEventListener('click', (e) => {
    let readStatus = e.target;
    const hasRead = 'Has Read';

    // Specify if statement to target elements with class 'book-status'
    if(readStatus.textContent.toLowerCase().includes(hasRead.toLowerCase()) && readStatus.classList.contains('book-status')) {
        readStatus.innerHTML = 'Not Read';
    } else if(readStatus.classList.contains('book-status')){
        readStatus.textContent = hasRead;
    }
})
