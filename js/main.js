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
       
  /* this toggles the anaimation of spinning the card */  
  document.getElementById('color').onclick = function() {
      this.classList.toggle('cardactive');
  }   
    

 
