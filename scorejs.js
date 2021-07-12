
//-------Page 1 style set -------------------------------------------

var x = localStorage.getItem(Score)
console.log(x); 
document.getElementById("demo").innerHTML = x;

var quizCompleteEl = document.querySelector("#quiz-complete");
quizCompleteEl.setAttribute("style", "text-align:center; margin: 100px auto 0 auto; padding-bottom: 20px;");

var currentScoreEl = document.querySelector("#current-score");
currentScoreEl.textContent = 'Your Score is :' + Score;
currentScoreEl.setAttribute("style", "margin: auto; text-align:center; padding-bottom: 40px;");

var btnSubmit = document.querySelector("#btn-submit");
btnSubmit.setAttribute("style", "margin: 50px auto 0 900px; background-color: blue; color: white; font-size: 40px;");



