var start = document.getElementById("start");
console.log(start)
start.addEventListener("click", function() {
    document.getElementById("intro").style.display = "none"
    document.getElementById("start-quiz").innerHTML = "What does HTML stand for?"
})

var questions = 
[
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Correcting Sources Systems", "Can't Stand Seinfield"],
        answer: 1
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






















/* 
have array of questions w answer
add timer 
after test save scores w local storage 
*/