function Information() {
  var name = window.localStorage.getItem("fullname");
  var id = JSON.parse(window.localStorage.getItem("ID"));
  var user = window.localStorage.getItem("Username");
  var prog = window.localStorage.getItem("Program");

  document.getElementById("header").innerHTML += `
        <b>SYST24444 / Assignment #2 / Fall 2022 </b><br>
        <b>${name}/ ${id}</b>
     <hr >

      
        `;

  document.getElementById("footer").innerHTML += `
        
        <b><hr>
        My Sheridan User Name: ${user}
          <br>
           My Sheridan Program: ${prog}
         </b>`;

  rowID = localStorage.getItem("rowID");
  cat = JSON.parse(localStorage.getItem("category"));
  bookDetails = JSON.parse(localStorage.getItem("Books"));

  let bk = cat[rowID].categoryGroup;
  document.getElementById("ppara").innerHTML += `
    <h3>Books from the ${bk} Category</h3>
    `;

  for (let i = 0; i < bookDetails.length; i++) {
    let w1 = bookDetails[i].category;
    let w2 = bookDetails[i].pageCount;
    let w3 = bookDetails[i].title;
    let w4 = bookDetails[i].authors;
    let w5 = bookDetails[i].longDescription;
    let w6 = bookDetails[i].thumbnailUrl;
    let w7 = bookDetails[i].isbn;
    let w8 = bookDetails[i].bookID;

    if (w1 == bk) {
      let Descriptionid = `longDescription - ${i}`;
      document.getElementById("java").innerHTML += `
      <div style="font-size:20px ; margin-bottom: 20px">
           <table style="margin-bottom: 10px">
           <tr ><b>Title: ${w3}</b></tr>
           <tr>
           
           <th style="padding:15px">ISBN  </th>
           <th style="padding:15px">Book ID</th>
           <th style="padding:15px">Page </th>
           <th style="padding:15px">Category </th>
           </tr>
           <tr >
           <td>${w7}</td>
           <td>${w8}</td>
           <td>${w2}</td>
           <td>${w1}</td>
           </tr>
           </table>
           <a href="../a2-images/${w6}" target="_blank" ><i>Click  to  view the  thumbnail image in a new tab</i></a>
      
                <section id="backHead" class="bhead" onclick="backHead('${Descriptionid}')"><button>
        Click to toggle long description</button>
      </section>
      <section id="${Descriptionid}" style="display:none"  >${w5}</section>
          
          </div>
          `;
      // if (w5 == bk) {
      //   document.getElementById("background").style.display = "";
      //   document.getElementById("background").innerHTML = `${w5}`;
      // }
    }
  }
}

function backHead(id) {
  let x = document.getElementById(id);
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    //x.innerText = "Hide Description";
  } else {
    x.style.display = "none";
    //x.innerText = "Click to toggle long description ";
  }
}
