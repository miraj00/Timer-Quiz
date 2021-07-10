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
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
var questionIndex = 0;
var correctCount = 0;
var btnStart = document.querySelector("#btn-start");
var timecount = questions.length * 6;

var startingPage = document.querySelector("#starting-page");

function hidePage1()  {
   renderQuestion();
   btnStart.hidden = true;
   startTimer();
}

function startTimer () {
  console.log("timer-started");  
  
}


function renderQuestion() {
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;

  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
      }

    
}


function trueFalse(event) {
 var selectedChoice = event.target.textContent;
 var answer = questions[questionIndex].answer;
 console.log(selectedChoice);
 console.log(answer);
  if (selectedChoice == questions[questionIndex].answer) {
    
    console.log("Your answer is correct");
  }
  else {
    console.log("Wrong Answer"), 2000;
     
  };
 // if they clicked correct answer

 //if answer is correct, increment score and if not then subtract time from timer

 //go to next question
 questionIndex++;
 console.log(questionIndex);
 renderQuestion();

}

optionListEl.addEventListener('click', trueFalse);

btnStart.addEventListener('click', hidePage1);



/*
GIVEN I am taking a code quiz

WHEN I click the start button

THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/