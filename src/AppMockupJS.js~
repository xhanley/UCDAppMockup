/* 
* This is the JavaScript function page for the App Mockup project. 
* Donnchadh O h-Ainle 
* D11128288 
* donnchadh.oh-ainle@webelevate.ie 
* App Stream
* WebElevate 1.2 
* Aug 20th 2012
*/

/* Screen load functions -----------------------------------
*/

// This is the set script which creates the screen image element
// It is inserted into the DOM in the screenDIV
function loadScript(){
	
	// Set up the image element to be used by all screens
	var img = document.createElement('IMG');
	img.setAttribute('id', 'screenImage');

	// Place the image element in the DOM	
	var screenDiv = document.getElementById("screen");
	screenDiv.appendChild(img);

	// Load the first screen
	loadHomeScreen();
}

// Create the home screen by dynamically inserting into the DOM
function loadHomeScreen() {
	
	// Logic to determine where the user has come from, before calling clean up on that screen	
	if(document.getElementById("userNameField"))
   		cleanUpLoginScreen();
	
	// Set the new screen image
	var img = document.getElementById("screenImage");
	img.setAttribute('src', '../resources/iosHomeScreen.png');
	
	// This is a special case where a onclick event will be used to 'start' the application
	img.setAttribute('onclick', 'loadLoginScreen()');
}

// Load the login screen
function loadLoginScreen() {

	// Logic to determine where the user has come from, before calling clean up on that screen
	if(document.getElementById("userNameFieldR"))
   		cleanUpRegistrationScreen();
	else if(document.getElementById("experimentButton1"))
		cleanUpExperimentFeedScreen();	
	else
   		cleanUpHomeScreen();
	
	// Set the new screen image	
	var img = document.getElementById("screenImage");
	img.setAttribute('src', '../resources/loginPageScreen.png');
	
	// Create fields		
	createFieldInput('userNameField', 'Username..');
	createFieldInput('passwordField', 'Pass..');
	
	// Create buttons	
	createButtonInput('loginButton', 'loadExperimentFeedScreen()');
	createButtonInput('registerButton', 'loadRegistrationScreen()');
	createButtonInput('exitButton', 'loadHomeScreen()');
}

// Load the registration screen
function loadRegistrationScreen() {
	cleanUpLoginScreen();
	var img = document.getElementById("screenImage");
	img.setAttribute('src', '../resources/registrationPageScreen.png');

	// Create fields	
	createFieldInput('userNameFieldR', 'Username..');
	createFieldInput('passwordFieldR', 'Pass..');
	createFieldInput('passwordFieldAgainR', 'Pass again..');
	
	// Create buttons
	createButtonInput('registerButtonR', 'loadLoginScreen()');
	createButtonInput('backButtonR', 'loadLoginScreen()');
}

// Load the experiment feed screen
function loadExperimentFeedScreen() {

	// Logic to determine where the user has come from, before calling clean up on that screen
	if(document.getElementById("userNameField"))
		cleanUpLoginScreen();
	else if(document.getElementById("backButtonE1"))
		cleanUpExperimentScreen_1();
	else if(document.getElementById("takePictureButton"))	
		cleanUpCameraScreen();
	else
		alert("Error: The previous screen is not reckognised?");

	// Set the new screen image	
	var img = document.getElementById("screenImage");
	img.setAttribute('src', '../resources/experimentFeedScreen.png');

	// Create buttons
	createButtonInput('homeButton', 'loadLoginScreen()');
	createButtonInput('experimentButton1', 'loadExperimentScreen_1()');
}

function loadExperimentScreen_1() {
	
	// Clean up the feed screen
	cleanUpExperimentFeedScreen();

	// Set the new sceen image
	var img = document.getElementById("screenImage");
	img.setAttribute('src', '../resources/experimentScreen_1.png');

	// Create buttons
	createButtonInput('backButtonE1', 'loadExperimentFeedScreen()');	
	createButtonInput('doExperiment1', 'loadCameraScreen()'); 
}


function loadCameraScreen(){
	
	// Clean up the previous screen
	cleanUpExperimentScreen_1();
	
	// Set the new screen image	
	var img = document.getElementById("screenImage");
	img.setAttribute('src', '../resources/cameraScreen.png');

	// Create buttons
	createButtonInput('takePictureButton', 'loadExperimentFeedScreen()');
}

/* End screen load functions -----------------------------------
*/

/* Clean up functions -----------------------------------
*/

// Clean up elements of the home screen
function cleanUpHomeScreen(){
	
	// The general onclick event is not needed for the rest of the screens
	var img = document.getElementById("screenImage");	
	img.removeAttribute('onclick');
}

// Clean up the elements used in the login screen
function cleanUpLoginScreen(){
	
	destroyInput('userNameField');
	destroyInput('passwordField');
	destroyInput('loginButton');
	destroyInput('registerButton');
	destroyInput('exitButton');
}

// Clean up the elements of the regisration screen
function cleanUpRegistrationScreen(){
	
	destroyInput('userNameFieldR');
	destroyInput('passwordFieldR');
	destroyInput('passwordFieldAgainR');
	destroyInput('registerButtonR');
	destroyInput('backButtonR');
}

// Clean up the elements of the experiment feed screen
function cleanUpExperimentFeedScreen(){
	
	destroyInput('homeButton');
	destroyInput('experimentButton1');
}

// Clean up the elements of the experiment 1 screen
function cleanUpExperimentScreen_1(){

	destroyInput('backButtonE1');
	destroyInput('doExperiment1');
}

// Clean up the elements of the camera screen
function cleanUpCameraScreen(){
	
	destroyInput('takePictureButton');
}

/* End clean up functions -----------------------------------
*/

/* Utility functions -----------------------------------
*/

// A paramaterised function to create a text input field
function createFieldInput(id, value){
		
	// Setup the field element and its attributes	
	var input = document.createElement('INPUT');
	input.setAttribute('id', id);
	input.setAttribute('type', 'text');
	input.setAttribute('value', value);
	// Use a custom funtion to clear the text from the field when clicked
	input.setAttribute('onclick', "clearField(id);");	

	// Place in the DOM
	var screenDiv = document.getElementById("screen");
	screenDiv.appendChild(input);
}

// A paramaterised function to button input field
// The id parameter should be the id of the button (a string)
// The onClickCommand value should be a string with the JavaScript function to execute when clicked
function createButtonInput(id, onClickCommand){
	
	var input = document.createElement('INPUT');
	input.setAttribute('id', id);
	input.setAttribute('onclick', onClickCommand);
	input.setAttribute('type', 'image');
	input.setAttribute('src', '../resources/alphaButton.png');

	var screenDiv = document.getElementById("screen");
	screenDiv.appendChild(input);
	return input;
}

// Display the date and time
function displayDate()
{
document.getElementById("a").innerHTML=Date();
}

// Used to clear the contents of the text field, when the user clicks to type
function clearField(id)
{
document.getElementById(id).value = "";
}


function destroyInput(id)
{
var screenDiv = document.getElementById("screen");
screenDiv.removeChild(document.getElementById(id));
}

/* End utility functions -----------------------------------
*/
