var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "What is the original name of JavaScript?",
    choices: ["Lotus", "EScript", "Mocha", "JavaScript"],
    answer: "Mocha",
  },
  {
    question:
      "Which company developed JavaScript?",
    choices: ["Netscape", "Microsoft", "Sun Microsystems", "Apple"],
    answer: "Netscape",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<scripting>", "<script>", "<javascript>"],
    answer: "<script>",
  },
  {
    question:
      "Which of the following is not considered a JavaScript operator?",
    choices: ["new", "typeof", "this", "delete"],
    answer: "this",
  },
  {
    question: "Using ________ statement is how you test for a specific condition.",
    choices: ["Select", "For", "switch", "if"],
    answer: "if",
  },
  {
    question:
      " _______________ is the tainted property of a window object.",
    choices: ["Host", "Defaultstatus", "Protocol", "Pathname"],
    answer: "Defaultstatus",
  },
  {
    question: "Is it possible to nest function in Javascript?",
    choices: ["Yes", "No"],
    answer: "Yes",
  },
  {
    question:
      "What is mean by - this - keyword in javascript?",
    choices: ["It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
    answer: "It refers current object",
  },
];

//-------Page 1 style set -------------------------------------------
var btnStart = document.querySelector("#btn-start");
btnStart.setAttribute("style", "margin: 0 100px 0 900px; background-color: blue; color: white; font-size: 40px;");

var mainEl = document.querySelector("#main");
mainEl.setAttribute("style", "text-align:center; padding-bottom: 20px;");

var instructionEl = document.querySelector("#instruction");
instructionEl.setAttribute("style", "margin: auto; text-align:center; padding-bottom: 40px;");

//------Question, Answers and Question Result style set---------------
var questionEl = document.querySelector("#question");
questionEl.setAttribute("style", "margin: auto; text-align:center; font-size: 60px; font-weight: bold; padding: 100px 0 50px 0;");

var optionListEl = document.querySelector("#option-list");
optionListEl.setAttribute("style", "margin: 30px auto 30px auto; width: 50%; text-align:center; font-size: 50px; padding: 20px 0 20px 0;");

var questionResultEl = document.querySelector("#question-result");
questionResultEl.setAttribute("style", "text-align:center; color: red; font-size: 30px; padding: 5px 0 20px 0; margin: 30px;");

//-----------------------------------------------------------------
var startingPage = document.querySelector("#starting-page");

var questionIndex = 0;
var correctCount = 0;


//-------------------------------------------------------------
function hidePage1()  {
   renderQuestion();
   mainEl.hidden = true;
   instructionEl.hidden = true;
   btnStart.hidden = true;
   startTimer();
  
}
//------Timer Set -------------------------------------------------
var timeLeft;
var timerEl;
function startTimer() {
  var timeLeft = questions.length * 6;
  var timerEl = document.querySelector("#timer");
  timerEl.setAttribute("style", "margin: 50px 150px 0 0; text-align: right; font-size: 40px; font-weight: bold;");


    var timeInterval = setInterval(function() {
       if (timeLeft > 0) {
        timerEl.textContent = 'Time : ' + timeLeft + ' second(s)';
      timeLeft--;
         
    } else {
       timerEl.textContent = '';
       clearInterval(timeInterval);
       timerEl.hidden = true;
        
      }
  }, 1000);
}



// ---- How to subtract 5 seconds for wrong answer and also stop timer after last question  ----
//function toscorePage(){
//  if (questions.length == questionIndex ) {
//      timeLeft == 
    
//       }
//}



 // if they clicked correct answer

 //if answer is correct, increment score and if not then subtract 5 seconds from timer

 // upon completion of 10 questions, go to score page





//--------------------------------------------------------------
function renderQuestion() {
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;
  

  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.setAttribute("style", "border-style: solid; background: LightGray; text-align:center; font-size: 50px; padding: 5px 0 20px 0; margin: 30px;");
    questionListItem.textContent = choices[i];
   
    optionListEl.append(questionListItem);
      }
}

//-------------------------------------------------------------
function trueFalse(event) {
 var selectedChoice = event.target.textContent;
 var answer = questions[questionIndex].answer;
 console.log(selectedChoice);
 console.log(answer);
  if (selectedChoice == questions[questionIndex].answer) {
     questionResultEl.textContent = "Correct Answer!!";
    console.log("Your answer is correct");
  }
  else {
    questionResultEl.textContent = "Wrong Answer!!";
    console.log("Wrong Answer");
    timeLeft -= 5;
       };
 questionIndex++;
 console.log(questionIndex);
 renderQuestion();

}

optionListEl.addEventListener('click', trueFalse);

btnStart.addEventListener('click', hidePage1);









/*
WHEN I click the start button

THEN a timer starts and I am presented with a question

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/