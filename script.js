var start = document.getElementById("start");

start.addEventListener("click", function() {
    document.getElementById("intro").style.display = "none"
    document.getElementById("start-quiz").innerHTML = "What does HTML stand for?"
})
/* 
have array of questions w answer
add timer 
after test save scores w local storage 

*\