//declaring variables
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");

var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
//Array of Options

function displayQuestion() {
  question.textContent = quiz[questionNumber]["q" + questionNumber];
  optionA.value = "";
  optionA.innerHTML = quiz[questionNumber]["a" + questionNumber];
  optionB.value = "";
  optionB.innerHTML = quiz[questionNumber]["b" + questionNumber];
  optionC.value = "";
  optionC.innerHTML = quiz[questionNumber]["c" + questionNumber];
  optionD.value = "";
  optionD.innerHTML = quiz[questionNumber]["d" + questionNumber];
}

function checkAnswerA() {
  var questionData = quiz[questionNumber]["a" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("check point", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    // displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    //displayWrongMessage();
  }
  //displayQuestion();
}
function checkAnswerB() {
  var questionData = quiz[questionNumber]["b" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("check point!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    // displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    // displayWrongMessage();
  }
  //displayQuestion();
}
function checkAnswerC() {
  var questionData = quiz[questionNumber]["c" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("check point", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    //displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    // displayWrongMessage();
  }
  // displayQuestion();
}
function checkAnswerD() {
  var questionData = quiz[questionNumber]["d" + questionNumber];
  var correctAnswer = answers[questionNumber];
  console.log("we are here!", questionData, correctAnswer);
  if (questionData === correctAnswer) {
    score++;
    questionNumber++;
    //displayCorrectMessage();
  } else {
    questionNumber++;
    secondsLeft -= 10;
    // displayWrongMessage();
  }
  //displayQuestion();
}
optionA.addEventListener("click", checkAnswerA);
optionB.addEventListener("click", checkAnswerB);
optionC.addEventListener("click", checkAnswerC);
optionD.addEventListener("click", checkAnswerD);

//Arrays
var options = [optionA, optionB, optionC, optionD];
var question = document.querySelector("#question");
var secondsLeft = 60;
var score = 0;
var answers = ["Seaside Heights", "Jwow", "T-shirt shop"];

var quiz = [
  // Q1
  {
    q1: "Where in NJ was the Jersey Shore filmed?",
    a1: "LBI",
    b1: "Seaside Heights",
    c1: "Cape May",
    d1: "Point Pleasant",
  },
  //  Q2
  {
    q2: "Jenny's name on the show was",
    a2: "Jwow",
    b2: "Jmoney",
    c2: "Jshore",
    d2: "have no idea",
  },
  {
    // Q3
    q3: "Where did the cast work while filiming in NJ",
    a3: "Bakery",
    b3: "T-shirt shop",
    c3: "Pizzera",
    d3: "Tatoo shop",
  },
];

var questionNumber = 0;
//declairing question number

//When we click on Start, timer countdown starts
startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  var myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    displayQuestion();
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(myInterval);
      //   displayQuestions;
    }
  }, 1000);
});
