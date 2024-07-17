class Category {
  constructor(categoryGroup, logo) {
    this.categoryGroup = categoryGroup;
    this.logo = logo;
  }
}
var cat = new Array();
var rowID;
class Books {
  constructor(
    bookID,
    title,
    isbn,
    pageCount,
    thumbnailUrl,
    longDescription,
    authors,
    category
  ) {
    this.bookID = bookID;
    this.title = title;
    this.isbn = isbn;
    this.pageCount = pageCount;
    this.thumbnailUrl = thumbnailUrl;
    this.longDescription = longDescription;
    this.authors = authors;
    this.category = category;
  }
}
var bookDetails = new Array();
function MainInfo() {
  fetch("./JSON/A2-JSON.json")
    .then((res) => res.json())
    .then((dataJSON) => {
      console.log(dataJSON);
      loadPage(dataJSON);
    });
}

function loadPage(dataJSON) {
  localStorage.setItem("fullname", dataJSON.SheridanData.FullName);
  localStorage.setItem("ID", dataJSON.SheridanData.StudentID);
  localStorage.setItem("Username", dataJSON.SheridanData.UserName);
  localStorage.setItem("Program", dataJSON.SheridanData.Program);

  document.getElementById("head").innerHTML += `
        <b>SYST24444 / Assignment #2 / Fall 2022 </b><br>
        <b> ${dataJSON.SheridanData.FullName} /
       ${dataJSON.SheridanData.StudentID}</b>
     <hr >
        `;

  document.getElementById("foot").innerHTML += `
      <b><hr>
      My Sheridan User Name: ${dataJSON.SheridanData.UserName}
        <br>
         My Sheridan Program: ${dataJSON.SheridanData.Program}
       </b>
        `;
  document.getElementById("div").innerHTML = "";
  for (let [index, value] of dataJSON.Category.entries()) {
    cat.push(new Category(value.categoryGroup, value.logo));

    document.getElementById("div").innerHTML += `
      <div>
      <a>${value.categoryGroup}</a><br>
      <a onclick='findIndex(${index})'
      href='otherPages/page.html'><img src="./a2-images/${value.logo}" onclick /></a><br>
      </div>
      `;
  }
  console.log(cat);

  document.getElementById("main").innerHTML = "";

  for (let [index, value] of dataJSON.BookDetails.entries()) {
    bookDetails.push(
      new Books(
        value.bookID,
        value.title,
        value.isbn,
        value.pageCount,
        value.thumbnailUrl,
        value.longDescription,
        value.authors,
        value.category
      )
    );
  }
  console.log(bookDetails);
}
function findIndex(index) {
  localStorage.setItem("rowID", index);
  localStorage.setItem("category", JSON.stringify(cat));
  localStorage.setItem("Books", JSON.stringify(bookDetails));
}
