var lang = ["HTML", "CSS", "Javascript"];
var _html = "";
let endString = "";


if (lang.length > 1) {
    /*if you do not pop the last part of the lang array the last item in the array will be printed twice*/
    const lastEntry = lang.pop();
    endString = lang.join(", ") + " and " + lastEntry;
    }else{
    /* endstring is equal to "HTML"*/
    endString += lang[0]
    }

document.getElementById("array").innerText = endString;