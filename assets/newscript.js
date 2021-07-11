
var questionArr = [];
var finalScore = 0;
const startButton = document.getElementById("start-btn");
const questionBox = document.getElementById("question");

startButton.addEventListener("click", startGame);



// start of countdown timer 
var timeRemaining = 5;

const timerEl = document.getElementById('countdown');

// function for beginning countdown
function timerCountdown() {
    var countdown = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = timeRemaining;
    if(timeRemaining <= 0) {
        stopInterval();
        timerEl.textContent = 0;
    }
}, 1000);

    var stopInterval = function () {
        clearInterval(countdown);
    };
}
// end of timer function

let questionIndex = [0];

function showQuestion() {
    questionBox.textContent = questions[questionIndex.question];
    for (var i=0; i < 10; i++) {
        console.log(question);
    }
}

function evaluateAnswer() {
    console.log("answer correct: " + correct)
}

// Main game function
function startGame() {
    console.log("start button clicked");

    timerCountdown();

    showQuestion();
}









// Questions Array

const questions = [
    {
        question: 'What element surrounds the contents of a function block?',
        answers: [
            { text: 'curly braces', correct: true},
            { text: 'parentheses', correct: false},
            { text: 'angle brackets', correct: false},
            { text: 'dollar signs', correct: false}
        ]
    },

    {
        question: 'What is it okay to not understand at this point?',
        answers: [
            { text: 'functions', correct: false},
            { text: 'DOM', correct: false},
            { text: 'everything', correct: true},
            { text: 'bootstrap', correct: false}
        ]
    },

    {
        question: 'What does the "O" in "DOM" stand for?',
        answers: [
            { text: 'Oriented', correct: false},
            { text: 'Object', correct: true},
            { text: 'Obscene', correct: false},
            { text: 'Objective', correct: false}
        ]
    },

    {
        question: 'Where does the href for the stylesheet go in index.html?',
        answers: [
            { text: 'in the footer', correct: false},
            { text: 'just before the closing "</body>" tag', correct: false},
            { text: 'in the header', correct: false},
            { text: 'in the head', correct: true}
        ]
    },

    {
        question: 'What is the git method for updating the remote repository with the changes you have made locally?',
        answers: [
            { text: 'push', correct: true},
            { text: 'pull', correct: false},
            { text: 'status', correct: false},
            { text: 'branch-update', correct: false}
        ]
    },

    {
        question: 'In which coding language does "flexbox" operate?',
        answers: [
            { text: 'jQuery', correct: false},
            { text: 'CSS', correct: true},
            { text: 'javaScript', correct: false},
            { text: 'HTML', correct: false}
        ]
    },

    {
        question: 'Which one of the following files is required for a browser to render a website?',
        answers: [
            { text: 'stylesheet', correct: false},
            { text: 'script.js', correct: false},
            { text: 'README.md', correct: false},
            { text: 'index.html', correct: true}
        ]
    },

    {
        question: 'Which of the following is NOT a browser?',
        answers: [
            { text: 'Chrome', correct: false},
            { text: 'Firefox', correct: false},
            { text: 'iOS', correct: true},
            { text: 'Safari', correct: false}
        ]
    },

    {
        question: 'What is the term for software that is licensed for free use?',
        answers: [
            { text: 'object oriented', correct: false},
            { text: 'open-source', correct: true},
            { text: 'logic driven', correct: false},
            { text: 'intuitive design', correct: false}
        ]
    },

    {
        question: 'What does the "C" in "CSS" stand for?',
        answers: [
            { text: 'Cascading', correct: true},
            { text: 'Colliding', correct: false},
            { text: 'Codifying', correct: false},
            { text: 'Collective', correct: false}
        ]
    },

   
]