const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const tableBody = document.getElementById("libraryDisplay");
    tableBody.innerHTML = ""; // Clear table before re-displaying

    myLibrary.forEach((book, index) => {
        const row = document.createElement("tr");
        
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>
                <button class="btn-add" onclick="toggleReadStatus(${index})">
                    ${book.read ? "Read ✔" : "Not Read ❌"}
                </button>
            </td>
            <td>
                <button class="btn-add" onclick="removeBook(${index})">Delete</button>
            </td>`;
        tableBody.appendChild(row);
    });
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function addDummyBooks() {
    addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
    addBookToLibrary("1984", "George Orwell", 328, false);
    addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
}

document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);

    document.getElementById("bookForm").reset(); // Clear form
    document.getElementById("newBookModal").close(); // Close modal
});