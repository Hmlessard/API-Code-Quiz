const start_button = document.querySelector(".start_btn")
const startPage = document.querySelector(".info-box")
const currentQ = 0
const questionEl = document.querySelector(".que_text")
const answerEl = document.querySelector("option_list")
start_button.addEventListener("click" function() {
    hide(startPage);
    renderQuestion();
    show(quiz);
    startTimer();
})
function hide(element){
    element.style.display = "none";
}

function show(element){
    element.style.display = "block"
}

function renderQuestion(){
    questionEl.textContent = questions[currentQ].questions
}
