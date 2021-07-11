// global variables
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById("question-container")
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')
var correctAnswers = 0
const initialsInput = document.getElementById("initials")



// starting amount of time
var timeRemaining = 5;

const timerEl = document.getElementById('timer');

// function for beginning countdown
function timerCountdown() {
    var countdown = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = timeRemaining;
    if(timeRemaining <= 0) {
        stopInterval();
        timerEl.textContent = "0:00"
    }
}, 1000);

    var stopInterval = function () {
        clearInterval(countdown);
    };
}
// end of timer function



let shuffledQuestions 

let currentQuestionIndex

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
     timerCountdown();
     startButton.classList.add('hide')
     shuffledQuestions = questions.sort(() => Math.random() - .5)
     currentQuestionIndex = 0
     questionContainerEl.classList.remove('hide')
     setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        } 
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => [
        setStatusClass(button, button.dataset.correct)
    ])
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function addInitialsEl() {
    const newDiv = document.createElement("div");
    const newDivContent = document.createElement("input")
    newDiv.appendChild(newDivContent);
    const currentDiv = document.getElementById("controls");
    document.body.insertBefore(newDiv, currentDiv);
}

function setStatusClass(element, correct) {
    clearStatusClass(element) 
        if (correct) {
            element.classList.add('correct');
            // console.log("correct");
            // correctAnswers++;
            // console.log(correctAnswers);
        } else {
            element.classList.add('wrong');
            // timeRemaining -= 10;
            // console.log("incorrect");
        }
}

// function validateAnswer() {
//     if (selectedButton.dataset.correct) {
//         console.log("correct");
//         correctAnswers++;
//         console.log(correctAnswers);
//     } else {
//         console.log("wrong");
//         timeRemaining -= 10;
//     }
// }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}





// array of possible questions

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



// function addInitialsEl() {
//     const newDiv = document.createElement("div");
//     const newDivContent = document.createElement("input")
//     newDiv.appendChild(newDivContent);
//     const currentDiv = document.getElementById("controls");
//     document.body.insertBefore(newDiv, currentDiv);
// }

// addInitialsEl();