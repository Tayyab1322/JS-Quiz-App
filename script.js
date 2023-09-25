const questions = [

    {
        question: "What does DOM stand for in JavaScript?",
        answers: [
            {text: "Document Object Model",correct: true},
            {text: "Document Oriented Module",correct: false},
            {text: "Data Object Model",correct: false},
            {text: "Document Order Model",correct: false}

            


        ]
    },
    {
        question: "Which keyword is used to declare variables in JavaScript?",
        answers: [
            {text: "string",correct: false},
            {text: "int",correct: false},
            {text: "var",correct: true},
            {text: "declare",correct: false}


        ]
    },
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        answers: [
            {text: "It checks if a variable is undefined.",correct: false},
            {text: "It returns the data type of a variable.",correct: true},
            {text: "It checks if a variable is undefined.",correct: false},
            {text: "It performs type coercion.",correct: false}


        ]
    },
    {
        question: "What is an example of a falsy value in JavaScript?",
        answers: [
            {text: '""', correct: false},
            {text: "true", correct: false},
            {text: "[ ]", correct: false},
            {text: "0", correct: true}


        ]
    }

];

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + " " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
 

function selectAnswer(e){

    const selectBtn = e.target;
    const iscorrect  = selectBtn.dataset.correct === "true";
    if(iscorrect){
        selectBtn.classList.add("correct");
    }else{
        selectBtn.classList.add("incorrect");
    }

}


startQuiz();