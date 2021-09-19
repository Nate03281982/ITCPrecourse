const GITHUB_URL = "http://github.com/Nate03281982";
const element = document.getElementById("color");

fetch('https://api.github.com/users/Nate03281982')
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    // shows what data we fetched and conveted to a jason  
    //handels the jason data in the console
    console.log(data);
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const name_elm = document.getElementById("myName");
    name_elm.innerText = data.name;
  });

 // this stops the links to my Linkin Github and stack overflow accounts from making the animation also start
 // there is a onClick to start the function linkHandler(event) on each of the a tags
  function linkHandler(event) {
    event.stopPropagation()
  }
       
/* this toggles the anaimation of spinning the card */  
element.onclick = function() {
element.classList.toggle('cardactive')
element.classList.remove("cardactive"); 
// trigger a DOM reflow
//reflow on an element is the calculation of its dimensions and position in the document
//updates the properties of the elements in the DOM and they are then reinitialised
//animation will run again like it’s the first time the animated element has been rendered
void element.offsetWidth;
element.classList.add("cardactive");
}

 
