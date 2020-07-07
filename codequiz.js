// do we link botsrap?

//variables

var score

//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);



//objects

//obejcts and folder
var questions  = [{

    question1: "1. Where was the jersey shore filmed?",
    Choices:[]
    correct: 0
}]

//click start button

//the timer starts and score counter

//first questions pops up user input

//IF  first question correct move on

//ELSE first question wrong time is subtractes

// IF when the timer is out its game over

//ELSE IF when all questions are over game is over

//save score

//return to start







function sendMessage() {
    timeEl.textContent = " ";
  
    var imgEl = document.createElement("img");
  
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);
  }
  
  setTime();
  