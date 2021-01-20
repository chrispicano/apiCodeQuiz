var intro = document.getElementById("intro");
var start = document.getElementById("start");
var choices = document.getElementById("choices");
var questions = document.getElementById("questions");
console.log(start)
start.addEventListener("click", function() {
    intro.style.display = "none"
    document.getElementById("start-quiz").textContent = questions[0].question;
    textContent = choices[0];
})


var 
var questions = 

[
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Correcting Sources Systems", "Can't Stand Seinfield"],
        answer: 1
    },

    {
        question: "What does HTML stand for?",
        choices: ["Ham, Turkey, Mayo, Lettuce", "Hypertext Markup Language", "How to meet ladies"],
        answer: 2
    },

    {
        question: "Displays a specific message with an OK button generally used to make sure the user gets the information.",
        choices: ["Alert","Prompt","Confirm"],
        answer: 1
    },

    {
        question: "Displays a dialog box along with an OK and cancle button. Used to verify or accept something.",
        choices: ["Alert", "Prompt", "Confirm"],
        answer: 3
    },

    {
        question: "Displays a dialog box along with an optional message asking the user to input some text.",
        choice: ["Alert","Prompt","Confirm"],
        answer: 2
    }
];



console.log(questions)


 for ( var i = 0; i < questions.length; i++ ) {
     var question = questions[i].question;
     document.write; ( question );
 }
 //timer start
var currentTime = document.querySelector("#currentTime");
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#start");
var datadiv = document.querySelector("#datadiv");
var container = document.querySelector("#container");
// user starts with 100 seconds 

var secondsLeft = 100;
var holdInterval = 0;

 if (holdInterval === 0) {
    holdInterval = setInterval(function () {
        secondsLeft--;
        currentTime.textContent = "Time: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(holdInterval);
            alldone();
            currentTime.textContent = "Sorry time has run out !!!";
        }
    }, 1000);
}