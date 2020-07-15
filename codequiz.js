//declaring variables
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");

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
var secondsLeft = 60;
var score = 0;
// var answers = [, , ];
var myInterval;

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
var questionNumber = 0;

// timer triggered by click function
startEl.addEventListener("click", function () {
  displayQuestion();
  startEl.style.display = "none";
  myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(myInterval);
    }
  }, 1000);
});

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
  }
  questionNumber++;
  if (questionNumber < quiz.length) {
    displayQuestion();
  } else {
    alert(score);
  }
}

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
