var inputFirstName = document.getElementById('firstname');
var inputLastName = document.getElementById('lastname');
var inputEmail = document.getElementById('email');
var inputComment = document.getElementById('comment');
var inputList = document.getElementById ('list');
var button = document.getElementById('btSubmit');

 


// this function is called every time a required element input is changed
// if all required inputs are filled then the submit button is enabled
function myFunction(){
    if (inputFirstName.value !== "" && inputEmail.value !== "" && inputComment.value !== "" && inputList.value !== "Select One"){
    button.disabled = false;
} else {
    button.disabled = true;
}}