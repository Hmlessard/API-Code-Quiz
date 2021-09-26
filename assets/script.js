const start_button = document.querySelector(".start_btn")
const startPage = document.querySelector(".info-box")
var currentQ = 0
const questionEl = document.querySelector(".que_text")
const answerEl = document.querySelector(".option_list")
const quiz = document.querySelector(".quiz_box")
const timeEl = document.querySelector(".time_sec")
const next_btn = document.querySelector(".next_btn")
var timeValue = 90
var interval;
var secondsElapsed = 0
var score = 0
const messageEl = document.querySelector(".message")
const endingEl = document.querySelector(".ending")
const initialEl = document.querySelector("#initials")
const submitEl = document.querySelector("#submit-initials")
const scoreEl = document.querySelector("#score")

start_button.addEventListener("click", function() {
    hide(startPage);
    renderQuestion(currentQ);
    show(quiz);
    startTimer(timeValue);
})
function hide(element){
    element.style.display = "none";
}

function show(element){
    element.style.display = "block"
}

function renderQuestion(index){
    questionEl.textContent = questions[index].question

    let options = "";
    for (let i = 0; i < questions[index].options.length; i++) {
        options += '<button value = ' + questions[index].options[i] +'>' + (i+1) + ': ' + questions[index].options[i] + "</button>"
    }
    answerEl.innerHTML = options;
}

function startTimer(timeValue){
    timeEl.textContent = timeValue
    interval = setInterval(function(){
        secondsElapsed++;
        console.log(timeValue)
        timeEl.textContent =timeValue - secondsElapsed
    }, 1000)
}

answerEl.addEventListener("click", function(event){
    console.log(event.target.value);
    checkAnswer(event.target.value);
})
function checkAnswer(answer){
    if (answer === questions[currentQ].answer){
        score += 10
        displayMessage("Correct");
    }
    else {
        secondsElapsed += 10
        displayMessage("Wrong");
    }
}

function displayMessage(Message){
messageEl.textContent = Message
}

next_btn.addEventListener("click", function() {

      nextQuestion()   
})

function nextQuestion(){
    currentQ++
    console.log(currentQ)
    if (currentQ < questions.length) renderQuestion(currentQ);
    else {
        stopTimer()
        hide(quiz)
        show(endingEl)
        scoreEl.textContent = score
    }
}

submitEl.addEventListener("click", function(){
    let initialValue = initialEl.value.trim()
    if (initialValue){
        let userScore = {userName: initialValue,
        userScore: score}
        highScores = JSON.parse(localStorage.getItem("scores")) || [];
        highScores.push(userScore)
        localStorage.setItem("scores", JSON.stringify(highScores));
    }
})

function stopTimer(){
    clearInterval(interval)
}



