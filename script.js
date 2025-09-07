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
  // console.log(myLibrary);
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
  let libCard = document.createElement("div");
  libCard.classList.add("libraryCard");

  bookInfoElements.forEach((infoElements) => {
    // Adding the labels for each card
    let tmpDiv = document.createElement("div");
    tmpDiv.classList.add("cardRow");
    tmpDiv.classList.add(infoElements);
    let lbl = document.createElement("p");
    lbl.classList.add("infoLabel");
    lbl.textContent = infoElements + ": ";

    // Adding the 'value'/'info' for each card
    let val = 0;
    if (infoElements === "status") {
      // console.log("put button here");
      val = document.createElement("button");
      val.textContent = bookInfo[infoElements];
      val.classList.add("button");
      val.classList.add("infoValue");
      val.setAttribute("id", bookInfo["uuid"]);

      val.addEventListener("click", changeBookStat);
    } else {
      val = document.createElement("p");
      val.classList.add("infoValue");
      val.textContent = bookInfo[infoElements];
    }

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
      console.log(myLibrary[index]);
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
  addBookToLibrary(tmpBook);
  displayInfo();
  form.reset();
  let para = document.getElementById("bookStat");
  para.textContent = "Unread";
});

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
    return;
  }
}

var formContainer = document.getElementById("formContainer");
let addBookbtn = document.getElementById("addBookBtn");
addBookBtn.addEventListener("click", bookFormEvent);

displayInfo();
