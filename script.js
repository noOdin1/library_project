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

const bookInfoElements = ["uuid", "title", "author", "pages", "status"];

function addBookToLibrary(book) {
  myLibrary.push(book);

  // console.log("[addBookLibrary] ")
  console.log(myLibrary);
}

const book1 = new Book(
  self.crypto.randomUUID(),
  "The Lord of the Rings",
  "Tolkien",
  1216,
  "Read",
);

const book2 = new Book(
  self.crypto.randomUUID(),
  "The Lost Symbol",
  "Brown",
  624,
  "Read",
);

const book3 = new Book(
  self.crypto.randomUUID(),
  "Sword of Destiny",
  "Sapkowski",
  416,
  "Unread",
);

function createCardDiv(bookInfo) {
  let libCard = document.createElement("div");
  libCard.classList.add("libraryCard");

  bookInfoElements.forEach((infoElements) => {
    let tmpDiv = document.createElement("div");
    tmpDiv.classList.add("cardRow");
    tmpDiv.classList.add(infoElements);
    let lbl = document.createElement("p");
    lbl.classList.add("infoLabel");
    lbl.textContent = infoElements + ": ";
    let val = document.createElement("p");
    val.classList.add("infoValue");
    val.textContent = bookInfo[infoElements];
    tmpDiv.appendChild(lbl);
    tmpDiv.appendChild(val);

    libCard.appendChild(tmpDiv);
  });
  let tmpDiv = document.createElement("div");
  tmpDiv.classList.add("cardRow");
  tmpDiv.classList.add("buttonRow");

  let emptyLbl = document.createElement("p");
  emptyLbl.textContent = " ";
  emptyLbl.classList.add("infoLabel");
  const tmpBtn = document.createElement("button");
  tmpBtn.textContent = "Remove";
  tmpBtn.classList.add("button");
  tmpBtn.classList.add("infoValue");
  tmpBtn.setAttribute("id", bookInfo["uuid"]);
  tmpBtn.addEventListener("click", removeCard);
  tmpDiv.appendChild(emptyLbl);
  tmpDiv.appendChild(tmpBtn);

  libCard.append(tmpDiv);

  console.log(libCard);

  return libCard;
}

function displayInfo() {
  let content = document.getElementsByClassName("content");

    console.log(bookEntry);
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
  e.preventDefault();

  const data = new FormData(form);
  let tmpBook = new Book();
  tmpBook.uuid = self.crypto.randomUUID();
  for (const [name, value] of data) {
    console.log(name, ":", value);
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
  addBookToLibrary(tmpBook);
  displayInfo();
  form.reset();
  let para = document.getElementById("bookStat");
  para.textContent = "Unread";
});

displayInfo();
