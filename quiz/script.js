const questions = [
    {
        question : "Which is the largest animal in the world?",
        answers: [
            {text:"Shark", correct:false},
            {text:"Blue Whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false},
            
        ]
    },
    {
        question : "Which is the smallest continent in the world?",
        answers: [
            {text:"Antartica", correct:true},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Kalahari", correct:false},
        ]
    },
    {
        question : "Which is the largest desert in the world?",
        answers: [
            {text:"Kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antartica", correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("btn-answer");
const nextBtn = document.getElementById("btn-next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtml = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " currentQuestion.question;
}

currentQuestion.answers.array.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);
});

startQuiz();