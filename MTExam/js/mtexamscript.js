// SYST24444 Mid-Term Exam Script

var data;

function startup() {
  fetch("./mtdata/mtexam.json")
    .then((res) => res.json())
    .then((dataReceived) => {
      //console.log(dataReceived);
      data = dataReceived; /* so data is available for a later function */
      director(data);
    });
}

function director(data) {
  /* READ ALL QUESTION DATA CAREFULLY AND YOU MUST INCLUDE YOUR CODING WHERE INDICATED */
  /* Part #01 - This question contains 2 instructions:
	 Data: 
			Using the personal data from the JSON file, create the following output
			in two(2) h2 tags in the Part #01 output area in the index.html file;
		
			Template literals MUST be used to create output

			Line 1 output:		Director: <first name> <last name>
			Line 2 output:	  Director Contact Email: <email>

			<>s denote data that must come from the JSON file. 
			You will have to look in JSON file to determine the data to pull
	 


	 CSS: 
			Create a CSS class (YOUR USER NAME as the name of the CSS class) in the mtexam.css file that 
			includes the following formatting:
			- darkgreen text colour
			- lemonchiffon background colour
			- align text to the center
			- underline text
 
			- Add the class formatting to the Part #01 output area so both lines show the CSS using JavaScript
*/
  /* ------------------ Include Part #01 code here ----------------------*/
  const output = document.getElementById("directorInfo");

  output.innerHTML += `
   <h2>
   Director: ${data.museumDirector.nameFirst} ${data.museumDirector.nameLast}<br>
	Director Contact Email: ${data.museumDirector.dirEmail}</h2>
  `;

  output.classList.add("kaharkee");
  /* ------------------    end of Part #01 code     --------------------*/
} /* end of chairInfo function */

/*--------------------------------------------------------------------*/

/* Part #02 - This question contains 2 parts:

		Code the functions for both buttons in Part02 button area that updates the list area based
		on the criteria listed in the button text (see index.html); buttons do not have to toggle

*/

/* ------------------ Include Part #02 code here ----------------------*/

/* Button 1 */
function search01() {
  document.querySelectorAll("li").forEach((x) => {
    if (x.querySelector("img")) {
      x.style.backgroundColor = "hotpink";
    }
  });
}

/* Button 2 */
function search02() {
  document.querySelectorAll("li[id ^='Paper']").forEach((x) => {
    x.style.color = "yellowgreen";
  });
}

/* -------------------- end of Part #2 code ------------------------*/

/* Part #3:
	Once the Part #3 button is clicked, display all data that matches the criteria stated in the button text 
	(see index.html) in the output area specified in index.html. 
	
	Be sure to clear the output area before starting the output loop. 

	Include data that meets the criteria in 3 separate <div> tags followed by 
	a horizontal line separating each match
	MUST use Template Literals to build output and a For/Of loop to traverse the list

	Include output per item:
	- Object Name / Material Type (bold this line using <strong> tags)
	- Section
	- Image (width of 35px)

	You will need to look in the JSON file to find the corresponding data identifier 
	(data shown in line above is not the exact data identifier from the JSON file but 
	 you should be able to determine which is the correct match. )

	NOTE: The JSON file has already been loaded and is included in a variable called data
*/

/* ------------------ Include Part #3 code here ----------------------*/

function listMuseumData() {
  document.getElementById("grid03").innerHTML = "";
  for (let MuseumUnits of data.MuseumUnits) {
    if (MuseumUnits.cultureDesc === "Japanese") {
      document.getElementById("grid03").innerHTML += `
		
		 <div><strong> ${MuseumUnits.objectName}/${MuseumUnits.materialType}</strong></div>
		 <div>${MuseumUnits.section}</div>
		 <div><img src ="images/${MuseumUnits.image}" width= "35px"</div><hr>
		`;
    }
  }
}
/* -------------------- end of Part #03 code ------------------------*/
