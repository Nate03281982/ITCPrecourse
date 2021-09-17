const mapArray = ["https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5925.974755921467!2d-87.793183!3d42.043451!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc8bc49e8795f%3A0xe49ea52de3078f24!2s8917%20Cherry%20Ave%2C%20Morton%20Grove%2C%20IL%2060053%2C%20USA!5e0!3m2!1sen!2sil!4v1629981471309!5m2!1sen!2sil","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.607056869526!2d-88.23453168532046!3d40.10647308237524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd739591517e1%3A0x769bc1badfe8e942!2s409%20E%20Chalmers%20St%2C%20Champaign%2C%20IL%2061820%2C%20USA!5e0!3m2!1sen!2sil!4v1629981673057!5m2!1sen!2sil","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.158468602236!2d34.87355531441903!3d32.092002525904455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d36102219b02f%3A0xcb7def076105ece6!2sAharon%20Katsnelson%20St%206%2C%20Petah%20Tikva!5e0!3m2!1sen!2sil!4v1629981883781!5m2!1sen!2sil", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.573867382631!2d34.79840551441793!3d32.05372392781966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b123e66787b%3A0x4ded0ef662d39e97!2sMoshe%20Dayan%20Rd%2052%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1631279130844!5m2!1sen!2sil"];
const map = document.getElementById("iframeMap");
map.src = mapArray[0];
mapArrayIndex = 0;
prevBtn = document.getElementById("bot prev");
nextBtn = document.getElementById("bot next");

/* call this function when prev button is clicked, button listens for onClick in HTML*/
function prev(){
    if (mapArrayIndex == 0) {
    prevBtn.disabled = true;
    

    }else{
    mapArrayIndex --;
    nextBtn.disabled = false;
    map.src = mapArray[mapArrayIndex];
    }}

/* call this function when the next button is clicked, button listens for onClick in HTML */
    function next(){
    if (mapArrayIndex == (mapArray.length - 1)) {
    nextBtn.disabled = true;
    
    } else {
    mapArrayIndex ++;
    prevBtn.disabled = false;
    map.src = mapArray[mapArrayIndex];
    }}
    