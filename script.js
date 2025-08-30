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
/*
 * NOTE: The example solution suggested attaching the event listener
 *       to 'input' with 'name=checkbox',
 *         let checkbox = document.querySelector("input[name=checkbox]");
 *       Here, the requirement is to return a value of either 'Unread' or 'Read'.
 *       Checkbox will show a value if it is 'checked', otherwise no value
 *       will be shown.
 *       One way to workaround this is to have a type='hidden' input with the
 *       same name as the checkbox intended for. That way if the original checkbox
 *       is 'unchecked' then the hidden input will show up. But if the original
 *       checkbox is 'checked' then the 'hidden' input must be disabled.
 *       Therefore in the html,
 *         <input type="hidden" id="statCheckHidden" name="checkbox" value="Unread">
 *         <input type="checkbox" id="statCheck" name="checkbox" value="Read">
 *       and the eventListenter is attached to the 'id' not the 'name'.
 **/
//
let checkbox = document.getElementById("statCheck");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    readBook.textContent = "Read";
    document.getElementById("statCheckHidden").disabled = true;
  } else {
    readBook.textContent = "Unread";
    document.getElementById("statCheckHidden").disabled = false;
  }
});

/* source: https://stackoverflow.com/questions/10955745/get-values-from-submitted-form
 * NOTE: The solution pointed out above does solve the problem of missing data from
 *       checkbox, if the checkbox weren't 'checked'. But this would not solve the
 *       problem of displaying those changes on the webpage. For that I reverted back
 *       to using the 'change' event above. The 2 'input' is still retained and the
 *       'statCheckHidden' will be disabled when the checkbox is 'checked'.
 *       The values captured will be 'checkbox' or 'checkbox1'.
 **/
let form = document.getElementById("addBookForm");
form.addEventListener("submit", function (e) {
  // if (document.getElementById("statCheck").checked) {
  //   document.getElementById("statCheckHidden").disabled = true;
  //   console.log("[eventListener] checkbox is checked.");
  //   readBook.textContent = "Read";
  // }
  //
  // if (document.getElementById("statCheck").unchecked) {
  //   // document.getElementById("statCheckHidden").disabled = false;
  //   console.log("[eventListener] checkbox is unchecked.");
  //   readBook.textContent = "Unread";
  // }

  e.preventDefault();
  const data = new FormData(form);
  for (const [name, value] of data) {
    console.log(name, ":", value);
  }
});
