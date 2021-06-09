console.log("Y");

//Constructor
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//Display Constructor
function Display() {}

//Add methods to display prototype
Display.prototype.add = function (book) {
  console.log("Success");
  tableBody = document.getElementById("tableBody");
  let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                  </tr>`;
  tableBody.innerHTML += uiString;
};

// Implement the Clear Function
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};

// Implement the Validate function
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};

// Implement the Show function
Display.prototype.show = function (type, givenMessage) {
  let message = document.getElementById("message");
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${givenMessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  setTimeout(function () {
    message.innerHTML = "";
  }, 2000);
};

//Add submit event listener to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
  console.log("Success");
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  // fiction,coding,cooking
  let fiction = document.getElementById("fiction");
  let coding = document.getElementById("coding");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (coding.checked) {
    type = coding.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  let book = new Book(name, author, type);
  console.log(book);

  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("success", "book added");
  } else {
    // Show Error
    display.show("failure", "try again");
  }
  e.preventDefault();
}
