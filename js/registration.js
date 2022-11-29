/* 
#User registration and display greeting
    -check if the user is in local storage.
        -IF user DOES NOT exists in local storage, display registration scene.
        -IF username exists in local storage,
         hide registration scene.
*/

// Registration variables
const registrationForm = document.getElementById("registration-form");
const usernameInput = document.getElementById("registration-input");
const USERNAME_KEY = "username";
const CLASSNAME_HIDDEN = "hidden"

// Greeting message variables
const greetingMessage = document.getElementById("greeting");
const greetingScriptArray = [
    "Hello", "Good to see you", "How are you today", "Glad to see you again", "Let's do it"
]
const randomIndex = Math.floor(Math.random() * greetingScriptArray.length);

// Registration form button handler
function onRegistrationSubmit(registrationFormEvent){
    // prevent refresh
    registrationFormEvent.preventDefault();

    // set local storage key and value for username
    localStorage.setItem(USERNAME_KEY, usernameInput.value);

    // hide registration container after the submission
    registrationForm.parentElement.classList.add(CLASSNAME_HIDDEN);
    
    // display greeting 
    displayGreeting(usernameInput.value);
}

// Display Greeting Card
function displayGreeting(name){
    // Generate greeting message
    greetingMessage.innerText = `${greetingScriptArray[randomIndex]}, ${name}`;
    const greetingContainer = document.querySelector(".greeting-container");
    // Display greeting container
    greetingContainer.classList.remove(CLASSNAME_HIDDEN);
    const userinfoContainer = document.querySelector(".userinfo-container");
    const mainContainer = document.querySelector(".main-container");
    mainContainer.classList.remove(CLASSNAME_HIDDEN);
}

registrationForm.addEventListener("submit", onRegistrationSubmit);

// To check if username key is in local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) { //if user has not signed up
    registrationForm.addEventListener("submit", onRegistrationSubmit);
}
else{ //username already exists in local storage
    registrationForm.parentElement.classList.add(CLASSNAME_HIDDEN);
    displayGreeting(savedUsername);
}






