/* library_project */

const myLibrary = [];

function Book(uuid, title, author, pages, status) {
  if (!new.target) {
    throw Error(
      "[Book] Constructor error. You must use the 'new' operator to call the constructor.",
    );
  }
  this.uuid = uuid;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;

  this.info = function () {
    // console.log(
    //   "[Book:bookInfo] title: " +
    //     this.title +
    //     ", author: " +
    //     this.author +
    //     ", pages: " +
    //     this.pages,
    // );
    return (
      "uuid: " +
      this.uuid +
      ", title: " +
      this.title +
      ", author: " +
      this.author +
      ", pages: " +
      this.pages +
      ", status: " +
      this.status
    );
  };
}

function addBookToLibrary() {}

/* Assuming that self.crypto.randomUUID() is available */

let uuid = self.crypto.randomUUID();
console.log("Sample of uuid: " + uuid); // for example "36b8f84d-df4e-4d49-b662-bcde71a8764f"

const book1 = new Book(
  self.crypto.randomUUID(),
  "The Lord of the Rings",
  "Tolkien",
  1216,
  "read",
);
const book2 = new Book(
  self.crypto.randomUUID(),
  "The Lost Symbol",
  "Brown",
  624,
  "read",
);
const book3 = new Book(
  self.crypto.randomUUID(),
  "Sword of Destiny",
  "Sapkowski",
  416,
  "unread",
);

console.log("Book1 = " + book1.info());
console.log("Book2 = " + book2.info());
console.log("Book3 = " + book3.info());

/* Test code for appending new element to "content"*/
let content = document.getElementsByClassName("content");

let libCard = document.createElement("div");
libCard.classList.add("libraryCard");
let bookTitle = document.createElement("p");
let bookAuthor = document.createElement("p");
bookTitle.textContent = book1.title;
bookAuthor.textContent = book1.author;

libCard.appendChild(bookTitle);
libCard.appendChild(bookAuthor);

content[0].appendChild(libCard);

let readBook = document.getElementById("bookStat");
let checkbox = document.querySelector("input[name=checkbox]");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    readBook.textContent = "Read";
  } else {
    readBook.textContent = "Unread";
  }
});

/* source: https://stackoverflow.com/questions/10955745/get-values-from-submitted-form */
let form = document.getElementById("addBookForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(form);
  for (const [name, value] of data) {
    console.log(name, ":", value);
  }
});
