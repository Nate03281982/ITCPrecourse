const GITHUB_URL = "http://github.com/Nate03281982";




fetch('https://api.github.com/users/Nate03281982')
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const name_elm = document.getElementById("myName");
    name_elm.innerText = data.name;
  });


 
 /* this stops the links to my Linkin Github and stack overflow accounts from making the animation also start, there is a onClick linkHandler(event) on each of the a tags*/ 
  function linkHandler(event) {
    event.stopPropagation()
  }
       

var element = document.getElementById("color");
  /* this toggles the anaimation of spinning the card */  
element.onclick = function() {
element.classList.toggle('cardactive')
element.classList.remove("cardactive"); 
// trigger a DOM reflow 
void element.offsetWidth;
element.classList.add("cardactive");
}

 
