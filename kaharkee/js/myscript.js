function information() {
  var name = window.localStorage.getItem("Name");
  var id = JSON.parse(window.localStorage.getItem("ID"));
  var user = window.localStorage.getItem("Login");
  var prog = window.localStorage.getItem("Program");
  var cot = window.localStorage.getItem("Country");
  var Img = JSON.parse(localStorage.getItem("Image"));

  document.getElementById("cname").innerHTML += `<h1>My Name is ${name}</h1>
   <h2 text-align="center">My Student ID is ${id}</h2>
   <h3>My Sheridan Login is ${user}</h3>
   <h4>My Sheridan Program is ${prog}</h4>
   <h5>My Home Country is ${cot}</h5>
   <h6><img src="../images/${Img}" width="150px"  bobox-shadow= "0 0 2px 1px rgba(0, 140, 186, 0.5)" border= "1px solid #ddd"; /></h6>
<hr />

   
  `;

  document.querySelector("h1").style.color = "purple";
  document.querySelector("h2").style.color = "green";
  document.querySelector("h3").style.color = "hotpink";
  document.querySelector("h4").style.color = "darkgreen";
  document.querySelector("h5").style.color = "red";
  document.querySelector("h3").style.text = "red";
  document.querySelector("img").style.borderRadius = "50%";
}
