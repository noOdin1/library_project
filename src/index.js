/* library_project */

import "./style.css";
const myLibrary = [];

class Book {
  constructor(uuid, title, author, pages, status) {
    this.uuid = uuid;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  get uuid() {
    return this._uuid;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  get status() {
    return this._status;
  }

  get info() {
    return (
      "uuid: " +
      this._uuid +
      ", title: " +
      this._title +
      ", author: " +
      this._author +
      ", pages: " +
      this._pages +
      ", status: " +
      this._status
    );
  }

  set uuid(bookUuid) {
    this._uuid = bookUuid;
  }
  set title(bookTitle) {
    this._title = bookTitle;
  }
  set author(bookAuthor) {
    this._author = bookAuthor;
  }
  set pages(bookPages) {
    this._pages = bookPages;
  }
  set status(stat) {
    this._status = stat;
  }
}

const bookInfoElements = ["uuid", "title", "author", "pages", "status"];

function addBookToLibrary(book) {
  myLibrary.push(book);

  // console.log("[addBookLibrary] ")
  // console.log(myLibrary);
}

function createElement(elemType, class_list, unique_id, text_content) {
  let element = document.createElement(elemType);

  /* Add class to the element */
  if (!(class_list instanceof Array) && class_list != "") {
    class_list = [class_list];
  }
  if (class_list != "") {
    class_list.forEach((elem) => element.classList.add(elem));
  }

  /* Add id to the element */
  if (unique_id !== "" && !(unique_id === undefined || unique_id === null)) {
    element.setAttribute("id", unique_id);
  }

  /* Add textContent/innerHTML/innerText value */
  if (
    text_content !== "" &&
    text_content !== undefined &&
    text_content !== null
  ) {
    element.textContent = text_content;
  }

  return element;
}

const book1 = new Book(
  self.crypto.randomUUID(),
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  1216,
  "Read",
);

const book2 = new Book(
  self.crypto.randomUUID(),
  "The Lost Symbol",
  "Dan Brown",
  624,
  "Read",
);

const book3 = new Book(
  self.crypto.randomUUID(),
  "Sword of Destiny",
  "Andrzej Sapkowski",
  416,
  "Unread",
);

const book4 = new Book(
  self.crypto.randomUUID(),
  "Angels and Demons",
  "Dan Brown",
  396,
  "Read",
);

const book5 = new Book(
  self.crypto.randomUUID(),
  "Harry Potter",
  "J.K. Rowling",
  437,
  "Unread",
);

const book6 = new Book(
  self.crypto.randomUUID(),
  "Hunger Games Book 1",
  "Suzanne Collins",
  362,
  "Unread",
);

function createCardDiv(bookInfo) {
  let libCard = createElement("div", "libraryCard");

  bookInfoElements.forEach((infoElements) => {
    // Adding the labels for each card
    let tmpDiv = createElement("div", ["cardRow", infoElements]);

    let lbl = createElement("p", "infoLabel", "", infoElements + ": ");

    // Adding the 'value'/'info' for each card
    let val = 0;
    if (infoElements === "status") {
      val = createElement(
        "button",
        ["button", "infoValue"],
        bookInfo["uuid"],
        bookInfo[infoElements],
      );
      val.addEventListener("click", changeBookStat);
    } else {
      val = createElement("p", "infoValue", "", bookInfo[infoElements]);
    }

    tmpDiv.appendChild(lbl);
    tmpDiv.appendChild(val);

    libCard.appendChild(tmpDiv);
  });

  let tmpDiv = createElement("div", ["cardRow", "buttonRow"]);

  let emptyLbl = createElement("p", "infoLabel", "", " ");

  const tmpBtn = createElement(
    "button",
    ["infoValue"],
    bookInfo["uuid"],
    "Remove",
  );
  tmpBtn.addEventListener("click", removeCard);

  tmpDiv.appendChild(emptyLbl);
  tmpDiv.appendChild(tmpBtn);

  libCard.append(tmpDiv);

  // console.log(libCard);

  return libCard;
}

function changeBookStat(event) {
  // create a handle for button with matching id
  let tmpBtn = document.getElementById(event.target.id);

  let toggleVar = tmpBtn.innerHTML === "Unread" ? "Read" : "Unread";

  tmpBtn.innerHTML = toggleVar;
  // finding object in array that matches certain criteria
  //   src: https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
  myLibrary.find((book, index) => {
    if (book.uuid == event.target.id) {
      myLibrary[index].status = toggleVar;
      console.table(myLibrary[index]);
    }
  });

  // Determine if the book has been 'read' or 'unread'
  // if (tmpBtn.innerHTML == "Unread") {
  //   tmpBtn.innerHTML = "Read";
  //
  //   myLibrary.find((book, index) => {
  //     if (book.uuid == event.target.id) {
  //       myLibrary[index].status = "Read";
  //       console.log(myLibrary[index]);
  //     }
  //   });
  //   return;
  // }
  // if (tmpBtn.innerHTML == "Read") {
  //   tmpBtn.innerHTML = "Unread";
  //
  //   myLibrary.find((book, index) => {
  //     if (book.uuid == event.target.id) {
  //       myLibrary[index].status = "Unread";
  //       console.log(myLibrary[index]);
  //     }
  //   });
  //   return;
  // }
}

function removeCard(event) {
  console.log("[removeCard] id: " + event.target.id);

  let pos = 0;

  for (; pos < myLibrary.length; pos++) {
    if (myLibrary[pos].uuid == event.target.id) {
      break;
    }
  }
  console.log(`[removeCard] item found in position ${pos}`);
  myLibrary.splice(pos, 1);
  displayInfo();
}

function displayInfo() {
  let content = document.getElementsByClassName("content");

  let child = content[0].lastElementChild;

  while (child) {
    content[0].removeChild(child);
    child = content[0].lastElementChild;
  }

  myLibrary.forEach((bookEntry) => {
    let libCard = createCardDiv(bookEntry);
    content[0].appendChild(libCard);
  });
}

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);

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
  inputValidatorCustomError();
  e.preventDefault();

  const data = new FormData(form);
  let tmpBook = new Book();
  tmpBook.uuid = self.crypto.randomUUID();
  for (const [name, value] of data) {
    // console.log(name, ":", value);
    if (name == "title") {
      tmpBook.title = value;
    }
    if (name == "author") {
      tmpBook.author = value;
    }
    if (name == "pages") {
      tmpBook.pages = value;
    }
    if (name == "checkbox") {
      tmpBook.status = value;
    }
  }
  console.log("[submit button]");
  console.table(tmpBook);
  addBookToLibrary(tmpBook);
  displayInfo();
  form.reset();
  let para = document.getElementById("bookStat");
  para.textContent = "Unread";
});

// function to check on all the inputs for the form
function inputValidatorCustomError() {
  let errors = [];
  if (bookTitle.validity.tooShort) {
    /* This sets the text to be shown to the user when 'submit' button is
     * pressed.
     */
    bookTitle.setCustomValidity("Book Title too short");
    console.log("[inputValidatorCustomError] Book title too short");
  }
  if (bookAuthor.validity.tooShort) {
    bookTitle.setCustomValidity("Book Author too short");
    console.log("[inputValidatorCustomError] Book author too short");
  }
}

function bookFormEvent(event) {
  // console.dir(this);
  var isOpen = formContainer.classList.contains("slide-in");

  formContainer.setAttribute("class", isOpen ? "slide-out" : "slide-in");
  if (this.textContent === "Show Book Form") {
    document.getElementById("addBookBtn").innerHTML = "Hide Book Form";
    return;
  }
  if (this.textContent === "Hide Book Form") {
    this.innerHTML = "Show Book Form";
    // form.reset();
    document.getElementById("addBookForm").reset();
    return;
  }
}

let bookTitle = document.getElementById("booktitle");
let bookAuthor = document.getElementById("bookauthor");
// bookTitle.addEventListener("click", inputValidatorCustomError);
// bookAuthor.addEventListener("click", inputValidatorCustomError);

var formContainer = document.getElementById("formContainer");
let addBookbtn = document.getElementById("addBookBtn");
addBookBtn.addEventListener("click", bookFormEvent);

displayInfo();
