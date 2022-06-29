let myLibrary = [];

function book(name, author, pages, hasRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

// myLibrary will not be redeclared. Figure out why. 

book.prototype.dataEntry = function() {
    let myLibrary = [];
    myLibrary.push(this.name, this.author, this.pages, this.hasRead);
    console.log(myLibrary);
}