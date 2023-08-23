

// checks if element is empty
function notEmpty(elementName, iterator){
	
	getValue = document.getElementsByName(elementName)[iterator].value;
	
	if( getValue == ''){
		
		return false;
	}else {
		
		return true;
	}
	
	
}

// changes colour of text input
function changeColour(elementName, color, iterator) {
	
	
		
		change = document.getElementsByName(elementName)[iterator];
		change.style.backgroundColor = color;
		
	
	}
	


// displays specific part of html when its button is pressed

function displayStart() {
	
	document.getElementById('peopleDwelling').style.display = 'block'
    document.getElementById('theDwelling').style.display='none' 
}

function changePerson (prev, next) {
	ii = 0;
	i = prev;
	if(notEmpty('gName', prev) == false){
		ii += 1;
		changeColour('gName','#FFCCCB', prev)
	} else {
		changeColour('gName','white', prev);
	}
	
	if(notEmpty('lName', i) == false){
		ii += 1;
		changeColour('lName','#FFCCCB',i)
	} else {
		changeColour('lName','white',i);
	}
	
	if(notEmpty('yearArrived', i) == false){
		ii += 1;
		changeColour('yearArrived','#FFCCCB', i)
	} else {
		changeColour('yearArrived','white', i);
	}
	
	if(notEmpty('mainField', i) == false){
		
		ii += 1;
		changeColour('mainField', '#FFCCCB', i)
	} else {
		ii -= 1;
		changeColour('mainField','white', i);
  }
   if(ii < 0){
	document.getElementById('person'+next+'').style.display ='block';
	document.getElementById('person'+prev+'').style.display ='none';
   }
	}



// Creates input for the number on animals entered
function animalsInDwelling(){
	document.getElementById("animalInfo").innerHTML = ''
	
	animalType = '<br><label for="animalType">Animal Type:</label><br> <input type="text" id="animalType" name="animalType" required minlength="4" maxlength="8" size="10"/><br>'
	animalAmount = '<br><label for="animalAmount">How many of this type of animal are present?:</label><br> <input type="number" id="animalAmount" name="animalAmount" min="2" max="4"/><br>'
	
	animalValue = document.getElementById("animal").value;
	for(i = 0; i < animalValue; i++ ){
	 
	 document.getElementById("animalInfo").innerHTML += animalType;
	 document.getElementById("animalInfo").innerHTML += animalAmount;
	}
	
	
}


// displays extra content based on the radio button clicked
function evDwelling() {
	
	
	checkedYes = document.getElementById("yesEvAtDwelling");
	checkedNo = document.getElementById("noEvAtDwelling");
	if(checkedYes.checked){
		
		document.getElementById("evType").style.display = 'block';
	}
	if(checkedNo.checked){
		
		document.getElementById("evType").style.display = 'none';
	}
}

// validates the user has filled in each section properly and displays the dwelling section
function displayTheDwelling() {
  
  
  peopleValue = document.getElementById("people").value;
  for(i =0; i < peopleValue; i++ ){
	
	ii = 0;
	if(notEmpty('gName', i) == false){
		ii += 1;
		changeColour('gName','#FFCCCB', i)
	} else {
		changeColour('gName','white', i);
	}
	
	if(notEmpty('lName', i) == false){
		ii += 1;
		changeColour('lName','#FFCCCB',i)
	} else {
		changeColour('lName','white',i);
	}
	
	if(notEmpty('yearArrived', i) == false){
		ii += 1;
		changeColour('yearArrived','#FFCCCB', i)
	} else {
		changeColour('yearArrived','white', i);
	}
	
	if(notEmpty('mainField', i) == false){
		
		ii += 1;
		changeColour('mainField', '#FFCCCB', i)
	} else {
		ii -= 1;
		changeColour('mainField','white', i);
  }}
	
	if(ii < 0){
		
		document.getElementById('peopleDwelling').style.display = 'none'
		document.getElementById('theDwelling').style.display='block' 
		document.getElementById('formProgress').value=50
		
		}
		
}



// validates input in the dwelling section and then displays the animal section

function displayAnimals() {
	
	for(i=0; i < 1; i++){
		ii = 0;
	  if(notEmpty('numBedrooms', i) == false){
		ii += 1;
		changeColour('numBedrooms','#FFCCCB', i)
	} else {
		changeColour('numBedrooms','white', i);
		ii -= 1;
	}
	
	  if(notEmpty('averageDownload', i) == false){
		ii += 1;
		changeColour('averageDownload','#FFCCCB',i)
	} else {
		changeColour('averageDownload','white',i);
		ii -= 1;
	}
		
	}
	
	if(ii < 0){
	document.getElementById('animals').style.display = 'block'
    document.getElementById('theDwelling').style.display='none'
	document.getElementById('formProgress').value=75}
}


function displayRating() {
  animalValue = document.getElementById("animal").value;
  if(animalValue == 0){
	document.getElementById('rating').style.display = 'block';
    document.getElementById('animals').style.display='none';
    document.getElementById('formProgress').value=100}
  else{
   for(i =0; i < animalValue; i++ ){
	
    ii = 0;
	if(notEmpty('animalType', i) == false){
		ii += 1;
		changeColour('animalType','#FFCCCB', i)
	}else {
		changeColour('animalType','white', i);
		ii -= 1;
	}
	
	if(notEmpty('animalAmount', i) == false){
		ii += 1;
		changeColour('animalAmount','#FFCCCB',i)
	}else {
		changeColour('animalAmount','white',i);
		ii -= 1;
	}
	}
	if(ii < 0){
	document.getElementById('rating').style.display = 'block';
    document.getElementById('animals').style.display='none';
    document.getElementById('formProgress').value=100}};
}


// This section allows the user to go to previous sections
function backToDwelling(){
	
	document.getElementById('animals').style.display = 'none'
    document.getElementById('theDwelling').style.display='block';
	
}

function backToAnimals(){
	document.getElementById('rating').style.display = 'none'
    document.getElementById('animals').style.display='block';
	
	
}


// generates a form for each person based on number of people
function peopleFromDwelling(){
	document.getElementById("peopleInDwelling").innerHTML = '';
				
	buttons = `<br><input id="Button" type="button" value="Next" onclick="displayTheDwelling();"/>
				`
	hrLine = `	<hr class="hline">`;

	peopleValue = document.getElementById("people").value;
	// the form template for a person
	peopleForm = 
	`    <br><label for="givenName">Given Name:</label><br>
		  <input type="text" id="givenName" name="gName" required
			minlength="4" maxlength="8" size="10"/><div class="help"><img src="qm.png" alt="question mark" id="qm">
			<span class="helptext">Only enter your first name, not any middle names</span>
		  </div><br>
		
		  <br><label for="firstName">Last Name:</label><br>
		  <input type="text" id="lastName" name="lName" required
			minlength="4" maxlength="8" size="10"/><div class="help"><img src="qm.png" alt="question mark" id="qm">
			<span class="helptext">Only enter your last name</span>
		  </div><br>
		
		  <br><label for="gender">Gender:</label><br>
		  <select id="gender" name="gender">
			<option value="Male">Male</option>
			<option value="Female">Female</option>
			<option value="Other">Other</option>
			
		  </select><br>
		
		  <br><label for="country">Country of Birth:</label><br>
		  <select id="country" name="country">
			<option value="Australia">Australia</option>
			<option value="New Zealand">New Zealand</option>
			<option value="Fiji">Fiji</option>
			<option value=""></option>
			<option value=""></option>
			<option value=""></option>
		   </select><br>
		 
		  <br><label for="yearArrived">What year did you arrive:</label><br>
		  <input type="number" id="yearArrived" name="yearArrived"
			min="2" max="4"/><div class="help"><img src="qm.png" alt="question mark" id="qm">
			<span class="helptext">Enter the year you arrived e.g. 2002</span>
		  </div><br>
	
		  <br><legend>Are you an Australina Citizen?:</legend>

		  <div>
		  <input type="radio" id="citizenYes" name="citizen" value="yes"
             checked/>
		  <label for="yes">yes</label>
		  </div>

		 <div>
		 <input type="radio" id="citizenNo" name="citizen" value="no"/>
		 <label for="no">no</label>
		 </div>
		
		 <br><legend>Do you speak another language other than English:</legend><br>

		 <div>
		 <input type="checkbox" id="scales" name="English"
             checked/>
		 <label for="English">English</label>
		 </div>

		 <div>
		 <input type="checkbox" id="mandarin" name="mandarin"/>
		 <label for="mandarian">Mandarin</label>
		 </div>
		
		 <div>
		 <input type="checkbox" id="italian" name="italina"/>
		 <label for="italian">Italian</label>
		 </div>
		
		 <div>
		 <input type="checkbox" id="arabic" name="arabic"/>
		 <label for="arabic">Arabic</label>
		 </div>
		
		 <div>
		 <input type="checkbox" id="cantonese" name="cantonese"/>
		 <label for="cantonese">Cantonese</label>
		 </div>
		
		 <div>
		 <input type="checkbox" id="greek" name="greek"/>
		 <label for="greek">Greek</label>
		 </div>
		
		 <div>
		 <input type="checkbox" id="other" name="other"/>
		 <label for="other">other</label>
		 </div><br>
	
		 <br><label for="speakEnglish">How well do you speak English:</label><br>
		 <br><select id="speakEnglish" name="speakEnglish">
			<option value="veryWell">Very Well</option>
			<option value="well">Well</option>
			<option value="notWell">Not Well</option>
			<option value="notAll">Not at All</option>
		  </select><br>
		 
		  <br><legend>Highest  year of Secondary School:</legend>

		 <div>
		 <input type="radio" id="year7" name="secondSchool" value="year7"
             checked>
		 <label for="year7">year 7</label>
		 </div>

		 <div>
		 <input type="radio" id="year8" name="secondSchool" value="year8"/>
		 <label for="year8">year 8</label>
		 </div>
		
		 <div>
		 <input type="radio" id="year9" name="secondSchool" value="year9"/>
		 <label for="year9">year 9</label>
		 </div>
		
		 <div>
		 <input type="radio" id="year10" name="secondSchool" value="year10"/>
		 <label for="year10">year 10</label>
		 </div>
		
		 <div>
		 <input type="radio" id="year11" name="secondSchool" value="year11"/>
		 <label for="year11">year 11</label>
		 </div>
		
		 <div>
		 <input type="radio" id="year12" name="secondSchool" value="year12"/>
		 <label for="year12">year 12</label>
		 </div>
		
		 <div>
		 <input type="radio" id="didntGo" name="secondSchool" value="didntGo"/>
		 <label for="didntGo">Did not go to High School</label>
		 </div><br>
		
		 <br><label for="qualification">Highest Quaification recieved:</label><br>
		 <select id="qualification" name="qualification">
			<option value="cert1">Cert I </option>
			<option value="cert2">Cert II</option>
			<option value="cert3">Cert III</option>
			<option value="cert4">Cert IV</option>
			<option value="bacehlor">Bachelors</option>
			<option value="associateDiploma">Associate Diploma</option>
			<option value="diploma">Diploma</option>
			<option value="master">Masters</option>
			<option value="phd">PhD</option>
		  </select><br>
		 
		  <br><label for="mainField">What is your main field of Study :</label><br>
		 <input type="text" id="mainFieldOfStudy" name="mainField" required
			minlength="5" maxlength="8" size="30"/><div class="help"><img src="qm.png" alt="question mark" id="qm">
			<span class="helptext">Enter the name of your field e.g. Networking</span>
		</div><br>
	`; 
   
   // prints the form for each person
   printOut = peopleValue
   if (peopleValue == 1){
	  document.getElementById("peopleInDwelling").innerHTML += '<div class="person'+0+'" id="person'+0+'"  style="display: block;" ><br> <h3> Person'+ ' ' +1+' </h3><br> '+peopleForm+' '+buttons+' </div>'
	  
	   
   }
   else if (peopleValue > 1){
	for(i = 0; i < peopleValue; i++ ){
	  count = i + 1
	  
	  if(printOut == 1){
	  
	   document.getElementById("peopleInDwelling").innerHTML += '<div class="person'+i+'" id="person'+i+'"  style="display: none;" ><br> <h3> Person'+ ' ' +count+' </h3><br> '+peopleForm+' '+buttons+' </div>'
	  }
	  if(printOut > 1){
		 document.getElementById("peopleInDwelling").innerHTML += '<div class="person'+i+'" id="person'+i+'"  style="display: none;" ><br> <h3> Person'+ ' ' +count+' </h3><br> '+peopleForm+' <br> <input id="Button" type="button" value="Next Person" onclick="changePerson('+i+','+count+');"/> </div>'
		 
		 
	  }
	  if(i == (peopleValue - 1 )){
		  document.getElementById('person0').style.display ='block';
	  }
	  printOut -= 1;
   } }

	
	document.getElementById("peopleInDwelling").innerHTML += hrLine;
}








// validates user input and lets the user submit the form

function submitForm() {
  if(notEmpty('email', 0) == true || notEmpty('phone', 0) == true){	
	
	changeColour('phone', 'white', 0)
    changeColour('email', 'white', 0)
	document.getElementById
    document.getElementById("mainForm").submit();}
  else {
		changeColour('phone', '#FFCCCB', 0)
		changeColour('email', '#FFCCCB', 0)
	}
}


function aboutUs(){
	document.getElementById('main').style.display ='none';
	document.getElementById('contactUs').style.display ='none';
	document.getElementById('aboutUs').style.display ='block';
	
}

function contactUs(){
	document.getElementById('main').style.display ='none';
	document.getElementById('aboutUs').style.display ='none';
	document.getElementById('contactUs').style.display ='block';
	
}

function toMain(){
	document.getElementById('main').style.display ='block';
	document.getElementById('aboutUs').style.display ='none';
	document.getElementById('contactUs').style.display ='none';
}