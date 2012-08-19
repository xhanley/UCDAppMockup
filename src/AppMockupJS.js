function loadScript(){
var img = document.createElement('IMG');
img.setAttribute('id', 'screenImage');
var screenDiv = document.getElementById("screen");
screenDiv.appendChild(img);
loadHomeScreen();
}

function displayDate()
{
/* Must use innerHTML for non-input nodes*/
//document.getElementById('b').innerHTML = document.getElementById('a').innerHTML;
document.getElementById("a").innerHTML=Date();
}

function displayDate()
{
/* Must use innerHTML for non-input nodes*/
document.getElementById('loginButton') = document.getElementById('a').innerHTML;
}

function clearField(id)
{
document.getElementById(id).value = "";
}

function loadHomeScreen() 
{
if(document.getElementById("userNameField")){
    cleanUpLoginScreen();
    }
var img = document.getElementById("screenImage");
img.setAttribute('src', '../resources/iosHomeScreen.png');
img.setAttribute('onclick', 'loadLoginScreen()');
}

function cleanUpHomeScreen()
{
var img = document.getElementById("screenImage");
img.removeAttribute('onclick');
}

function loadLoginScreen() 
{
if(document.getElementById("userNameFieldR"))
    cleanUpRegistrationScreen();
else
    cleanUpHomeScreen();
var img = document.getElementById("screenImage");
img.setAttribute('src', '../resources/loginPageScreen.png');
createFieldInput('userNameField', 'Username..');
createFieldInput('passwordField', 'Pass..');
createButtonInput('loginButton', 'loadExperimentFeedScreen()');
createButtonInput('registerButton', 'loadRegistrationScreen()');
createButtonInput('exitButton', 'loadHomeScreen()');
}

function cleanUpLoginScreen()
{
destroyInput('userNameField');
destroyInput('passwordField');
destroyInput('loginButton');
destroyInput('registerButton');
destroyInput('exitButton');
}

function loadRegistrationScreen() 
{
cleanUpLoginScreen();
var img = document.getElementById("screenImage");
img.setAttribute('src', '../resources/registrationPageScreen.png');
createFieldInput('userNameFieldR', 'Username..');
createFieldInput('passwordFieldR', 'Pass..');
createFieldInput('passwordFieldAgainR', 'Pass again..');
createButtonInput('registerButtonR', 'loadLoginScreen()');
createButtonInput('backButtonR', 'loadLoginScreen()');
}

function cleanUpRegistrationScreen()
{
destroyInput('userNameFieldR');
destroyInput('passwordFieldR');
destroyInput('passwordFieldAgainR');
destroyInput('registerButtonR');
destroyInput('backButtonR');
}


function loadExperimentFeedScreen() 
{
cleanUpLoginScreen();
var img = document.getElementById("screenImage");
img.setAttribute('src', '../resources/experimentFeedScreen.png');
}

function createFieldInput(id, value)
{
var input = document.createElement('INPUT');
input.setAttribute('id', id);
input.setAttribute('type', 'text');
input.setAttribute('value', value);
input.setAttribute('onclick', "clearField(id);");
var screenDiv = document.getElementById("screen");
screenDiv.appendChild(input);
}

function createButtonInput(id, onClickCommand)
{
var input = document.createElement('INPUT');
input.setAttribute('id', id);
input.setAttribute('onclick', onClickCommand);
input.setAttribute('type', 'image');
input.setAttribute('width', 57);
input.setAttribute('height', 29);
input.setAttribute('src', '../resources/alphaButton.png');
var screenDiv = document.getElementById("screen");
screenDiv.appendChild(input);
return input;
}

function destroyInput(id)
{
var screenDiv = document.getElementById("screen");
screenDiv.removeChild(document.getElementById(id));
}