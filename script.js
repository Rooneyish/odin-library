const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked ? "Read" : "Not Read";

  if (name === "" || author === "" || pages === "") {
    alert("Please fill the form to add a book!!");
  } else {
    const newBook = new Book(name, author, pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
    updateHtml();
    document.getElementById("bookForm").reset();
  }
}

function updateHtml() {
  const books = document.getElementById("books");
  books.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h4 class="title">${book.name}</h4>
        <h4 class="writer">By ${book.author}</h4>
        <h4 class="no-pages">Pages: ${book.pages}</h4>
        <h4 class="book-read">${book.read}</h4>
        <h4><button onclick="removeBook(${index})">Remove</button></h4>
        `;
    books.appendChild(card);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  updateHtml();
}

document
  .getElementById("bookForm")
  .addEventListener("submit", addBookToLibrary);
