created buttons because its clickable and it fills with inner html

created variables

created buttons to link with onclick event

tried to created functions (main function with populate) and including a forloop

Collaborated code with James Kim, Jessica Perez, Cammryne , jo and Justin Ramirez

var displayQuestions = function () {
optionA.textContent = quiz.a1;
document.append(optionA);
};
displayQuestions;
// console.log(displayQuestions);
//Array of Answers
var answers = ["b1", "a2", "b3"];

//start button
//When start is CLICKED timer countdown begins
//hopefully button goes away and countdown starts

startEl.addEventListener("click", function () {
startEl.style.display = "none";
populate();
var myInterval = setInterval(function () {
timerEl.textContent = secondsLeft;
secondsLeft--;
if (secondsLeft === -1) {
clearInterval(myInterval);
// displayQuestions;
}
}, 1000);
});

//Event Click first Function
// var hOne = document.createElement("h1")
// hOne.textContent = "This is the hOne element"
// document.body.append(hOne)
// hOne.setAttribute("style", "text-align:center")

// console.log(displayQuestions);

//populate buttons by creating forloop

//pulling key and pulling key
console.log((question.textContent = quiz[0]["q" + "${0}"]));
console.log((optionA.value = ""));
console.log((optionA.innerHTML = quiz[0]["a1" + "${0}"]));
console.log((optionB.value = ""));
console.log((optionB.innerHTML = quiz[0]["b2" + "${0}"]));
console.log((optionC.value = ""));
console.log((optionC.innerHTML = quiz[0]["c3" + "${0}"]));
console.log((optionD.value = ""));
console.log((optionD.innerHTML = quiz[0]["d1" + "${0}"]));

function close() {
modalEl.style.display = "none";
}

function handleClick() {
// Use event delegation to handle when the user clicks "edit"
event.preventDefault();
if(event.target.matches("button")
var item = document.(create)
}
\*/

//add questions to buttons
function populate(event) {
//event.stopPropagation();
//main event
//optionA.addEventListener("click", function (event) {
/_ for
var i = 0;
if (i < quiz.length) {
question.textContent = quiz [i]["q" + '${i}'];
optionA.value = "";
optionA.innerHTML = quiz[i]["a" + "${i}"];
optionB.value = "";
optionB.innerHTML = quiz[i]["b" + "${i}"];
optionC.value = "";
optionC.innerHTML = quiz[i]["c" + "${i}"];
optionD.value = "";
optionD.innerHTML = quiz[i]["d" + "${i}"];
i++;
}
}
_/

function displayQuestion() {
question.textContent = quiz[questionNumber]["q" + questionnumber];
optionA.value = "";
optionA.innerHTML = quiz[questionNumber]["a" + questionnumber];
optionB.value = "";
optionB.innerHTML = quiz[questionNumber]["b" + questionnumber];
optionC.value = "";
optionC.innerHTML = quiz[questionNumber]["c" + questionnumber];
optionD.value = "";
optionD.innerHTML = quiz[questionNumber]["d" + questionnumber];
}
// for (var i = 0; i < quiz.length; i++) {
// question.textContent = quiz[i]["q" + `${i}`];
// optionA.value = "";
// optionA.innerHTML = quiz[i]["a" + `${i}`];
// optionB.value = "";
// optionB.innerHTML = quiz[i]["b" + `${i}`];
// optionC.value = "";
// optionC.innerHTML = quiz[i]["c" + `${i}`];
// optionD.value = "";
// optionD.innerHTML = quiz[i]["d" + `${i}`];
// }

//User interaction

//function checkAnswers
//this function would take user input and match it use .inlude
//result of check answers is score increase

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
