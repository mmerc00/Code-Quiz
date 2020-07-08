//Starting/init Data
//declaring variables
var timerEl = document.querySelector(".timer");
var startEl = document.querySelector("#start");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");
var optionD = document.querySelector("#optionD");
//Array of Options
var options = [optionA, optionB, optionC, optionD];
var question = document.querySelector("#question");
var secondsLeft = 10;
var score = 0;
//Questions in an array
var quiz =
  // Q1
  {
    q1: "Where in NJ was the Jersey Shore filmed?",
    a1: "LBI",
    b1: "Seaside Heights",
    c1: "Cape May",
    d1: "Point Pleasant",
    //  Q2
    q2: "Jenny's name on the show was",
    a2: "Jwow",
    b2: "Jmoney",
    c2: "Jshore",
    d2: "have no idea",
    // Q3
    q3: "Where did the cast work while filiming in NJ",
    a3: "Bakery",
    b3: "T-shirt shop",
    c3: "Pizzera",
    d3: "Tatoo shop",
  };
//Event Click first Function
// var hOne = document.createElement("h1")
// hOne.textContent = "This is the hOne element"
// document.body.append(hOne)
// hOne.setAttribute("style", "text-align:center")
var displayQuestions = function () {
  optionA.textContent = quiz.a1;
  document.append(optionA);
};
displayQuestions;
// console.log(displayQuestions);
//Array of Answers

var answers = []; //"Seaside Heights", "Jwow", "T-shirt Shop"];
//User interaction
//When start is clicked timer countdown begins
startEl.addEventListener("click", function () {
  startEl.style.display = "none";
  var myInterval = setInterval(function () {
    timerEl.textContent = secondsLeft;
    secondsLeft--;
    if (secondsLeft === -1) {
      clearInterval(myInterval);
      displayQuestions;
    }
  }, 1000);
});

// when first question is displayed timer starts

//call on some DOMS
//Handler Functions===============================================================================
// Check answer - use answer array and .include
//if it is correct
//alert yay!
//then move to the next question
// Else if it is wrong
// alert wrong,
//ten seconds taken away,
// move to the next question
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//Display Input===============================================================================
//WHEN the game is over
//Clear screen
//Reset Timer
//Submit Button appears
//THEN I can save my initials and score
//When click submit button
//Return to the beginning of quiz
