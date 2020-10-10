//declaring variables
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");
var resultsPage = document.getElementById("resultsPage");
var scoreEl = document.getElementById("score");
var highscoreEl = document.getElementById("highscore");
var restartEl = document.getElementById("restart");

var answerDiv = document.getElementById("choices");
var questionDisplay = document.querySelector("#question");
// var optionA = document.querySelector("#optionA");
// var optionB = document.querySelector("#optionB");
// var optionC = document.querySelector("#optionC");
// var optionD = document.querySelector("#optionD");
//condensed all my options into anto a nested array

//Arrays
// var options = [optionA, optionB, optionC, optionD];
var questionEl = document.querySelector("#question");
var myInterval;
var secondsLeft = 60;
var questionNumber = 0;
var score = 0;
var highscore = localStorage.getItem("highscore");
if (highscore === null) {
  highscore = 0;
} else {
  highscore = parseInt(highscore);
}

// var answers = [, , ];

var quiz = [
  // Q1
  {
    question: "Where in NJ was the Jersey Shore filmed?",
    answers: ["LBI", "Seaside Heights", "Cape May", "Point Pleasant"],
    correct: "Seaside Heights",
  },
  //  Q2
  {
    question: "Jenny's name on the show was",
    answers: ["Jwow", "Jmoney", "Jshore", "have no idea"],
    correct: "Jwow",
  },
  {
    // Q3
    question: "Where did the cast work while filiming in NJ",
    answers: ["Bakery", "T-shirt shop", "Pizzera", "Tatoo shop"],
    correct: "T-shirt shop",
  },
];

//declairing question number

// timer triggered by click function
startEl.addEventListener("click", startGame);

function startGame() {
  startEl.style.display = "none";
  displayQuestion();
  startTimer();
}

function startTimer() {
  myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(myInterval);
    }
  }, 1000);
}

//this function displays the question
function displayQuestion() {
  var question = quiz[questionNumber];
  answerDiv.innerHTML = "";

  questionEl.textContent = question.question;
  for (var i = 0; i < question.answers.length; i++) {
    var answer = question.answers[i];

    var button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", checkAnswer);

    answerDiv.appendChild(button);
  }
}

function checkAnswer() {
  var choice = this.textContent;
  var correct = quiz[questionNumber].correct;
  if (choice === correct) {
    score++;
  } else {
    secondsLeft -= 10;
  }
  questionNumber++;
  if (questionNumber < quiz.length) {
    displayQuestion();
    //secondsLeft -= 10;
  } else {
    showScore();
  }
}

//get and set local storage for score

function showScore() {
  resultsPage.style.display = "block";

  if (score > highscore) {
    highscore = score;
    localStorage.setItem("highscore", highscore);
  }

  scoreEl.textContent = score;
  highscoreEl.textContent = highscore;
  clearInterval(myInterval);
}

// function refreshPage() {
//   if (btn.click) {
//     location.reload();
//   }
// }

//restart quiz
restartEl.onclick = function () {
  location.reload();
};

//  score = JSON.parse(showScore);
//  console.log(score);
//  } localStorage.setItem("score", stringify)??

// function DisplayScore(score) {
//   if (questionNumber < quiz.length) return score.innerhtml(results);
// }

//timer

// function checkAnswerA() {
//   var questionData = quiz[questionNumber]["a" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   console.log("check point", questionData, correctAnswer);
//   if (questionData === correctAnswer) {
//     score++;
//     questionNumber++;
//     // displayCorrectMessage();
//   } else {
//     questionNumber++;
//     secondsLeft -= 10;
//     //displayWrongMessage();
//   }
// }
// //thesefunctiom matches the question to answer and connects with an if statement that connects with the timer and score count
// function checkAnswerB() {
//   var questionData = quiz[questionNumber]["b" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   console.log("check point!", questionData, correctAnswer);
//   if (questionData === correctAnswer) {
//     score++;
//     questionNumber++;
//   } else {
//     questionNumber++;
//     secondsLeft -= 10;
//   }
// }
// function checkAnswerC() {
//   var questionData = quiz[questionNumber]["c" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   console.log("check point", questionData, correctAnswer);
//   if (questionData === correctAnswer) {
//     score++;
//     questionNumber++;
//   } else {
//     questionNumber++;
//     secondsLeft -= 10;
//   }
// }
// function checkAnswerD() {
//   var questionData = quiz[questionNumber]["d" + questionNumber];
//   var correctAnswer = answers[questionNumber];
//   console.log("we are here!", questionData, correctAnswer);
//   if (questionData === correctAnswer) {
//     score++;
//     questionNumber++;
//   } else {
//     questionNumber++;
//     secondsLeft -= 10;
//   }
// }

// //this part is still under construction
// optionA.addEventListener("click", checkAnswerA);
// optionB.addEventListener("click", checkAnswerB);
// optionC.addEventListener("click", checkAnswerC);
// optionD.addEventListener("click", checkAnswerD);
