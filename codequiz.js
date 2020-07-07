// do we link bootsrap?

//variables

var score = 0;

//timer
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 10000);



//objects

//obejcts and folder
var questionAndAnswer  = [{

    question: "1. Where was the jersey shore filmed?",
    options:[.btn1("LBI, NJ"), btn2("Seaside Heights, NJ"), .btn("Cape May, NJ")],
    correct: 2
}, {
question: "2. Jenny's nick-name on the show was?",
options:[.btn1("Jmoney"), btn2("J420"), .btn3("Jwow")],
correct: 3
}
, {
  question: "3. Where did the cast work while in Seaside Heights?",
  options:[.btn1("Bakery"), btn2("T-shirt Shop"), .btn3("Pizzeria")],
  correct: 3
  }
]

  
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
  