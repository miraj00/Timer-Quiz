
//-------Page 1 style set -------------------------------------------

var highScoresEl = document.querySelector("#high-scores");
highScoresEl.setAttribute("style", "text-align:center; margin: 100px auto 0 auto; padding-bottom: 20px;");

var goBackEl = document.querySelector("#btn-goBack");
goBackEl.setAttribute("style", "margin: 50px auto 0 700px; background-color: blue; color: white; font-size: 40px;");

var btnClear = document.querySelector("#btn-clear");
btnClear.setAttribute("style", "margin: 50px auto 0 50px; background-color: blue; color: white; font-size: 40px;");


function clearStorage() {
    localStorage.clear();  
}

btnClear.addEventListener('click', clearStorage);

