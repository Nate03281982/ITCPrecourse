var lang = ["HTML", "CSS", "Javascript"];
let endString = "";


if (lang.length > 1) {
    //lang.pop() = JavaScript
    //console.log(lang) = (2) HTML and CSS  
    const lastEntry = lang.pop();
    endString = lang.join(", ") + " and " + lastEntry;
    }else{
    /* endstring is equal to "HTML"*/
    endString += lang[0]
    }

document.getElementById("array").innerText = endString;