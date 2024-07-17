function CreateMain() {
  fetch("./JSON/A1-JSON.json")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      // localStorage.clear();

      localStorage.setItem("Name", data.StudentData.studentName);
      localStorage.setItem("ID", data.StudentData.studentID);
      localStorage.setItem("Login", data.StudentData.studentLogin);
      localStorage.setItem("Program", data.StudentData.studentProgram);
      localStorage.setItem("Country", data.StudentData.studentHome);

      localStorage.setItem(
        "Image",
        JSON.stringify(data.StudentData.studentImage)
      );

      document.getElementById("main").innerHTML += `
        <i>Fall 2022 Assignment #1</i> for <a href="./OtherPages/report.html">
        ${data.StudentData.studentName}
        </a> from ${data.StudentData.studentHome}
        `;

      document.getElementById(
        "content"
      ).innerHTML += `<b>My Login: ${data.StudentData.studentLogin}
        / My ID: ${data.StudentData.studentID}
        / My Program: ${data.StudentData.studentProgram}
        ... <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" >CITE</a></b>
        `;
      let animal = data.zooAnimals;

      let result = "";
      animal.forEach((y) => {
        let { aID, aName, aClass, aImg } = y;
        result += `<p id='${aID}' class='${aClass}'>${aID} / ${aName} / ${aClass} <img src="../images/${aImg}" height="25px" weight="25px" /> </p>`;
      });

      document.getElementById("context").innerHTML += `
        ${result}`;
    });
}

function panel() {
  document.querySelectorAll("section").forEach((x) => {
    if (x.querySelector("button")) {
      if (
        x.style.textDecoration === "underline" ||
        x.style.fontStyle === "italic"
      ) {
        x.style.textDecoration = "none";
        x.style.fontStyle = "normal";
      } else {
        x.style.textDecoration = "underline";
        x.style.fontStyle = "italic";
      }
    } else {
      x.style.textDecoration = "none";
      x.style.fontStyle = "normal";
    }
  });
}

/* function animal() {
  let sn = [11, 22, 33, 44, 55, 66];

  sn.forEach((id) => {
    let m = document.getElementById(id);

    if (m.classList.contains("Mammal")) {
      if (
        m.className === "Mammal" ||
        m.className === "Mammal backgroundColor" ||
        m.className === "Mammal italicUnderlined"
      ) {
        m.className = `${m.className} borderToMammal`;
      } else {
        m.classList.remove("borderToMammal");
      }
    }
  }); 
}*/
/* 
function animal() {
  document.querySelectorAll("Mammal").forEach((x) => {
    if (x.textContent.includes("Mammal")) {
      x.style.borderStyle = " dotted";
    }
  });
} */

function animal() {
  let n = [11, 22, 33, 44, 55, 66];

  n.forEach((id) => {
    let x = document.getElementById(id);

    if (x.classList.contains("Mammal")) {
      if (x.style.borderStyle === "dotted") {
        x.style.borderStyle = "none"; // Toggle off
        x.style.borderColor = "";
      } else {
        x.style.borderColor = "black"; // Toggle on
        x.style.borderStyle = "dotted";
      }
    } else {
      x.style.borderStyle = "none";
      x.style.borderColor = "";
    }
  });
}

function colour() {
  let n = [11, 22, 33, 44, 55, 66];

  n.forEach((id) => {
    let x = document.getElementById(id);

    if (x.className === "Bird" || x.className === "Reptile") {
      if (x.style.backgroundColor === "lightsteelblue") {
        x.style.backgroundColor = ""; // Toggle off
      } else {
        x.style.backgroundColor = "lightsteelblue"; // Toggle on
      }
    }
  });
}
