const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions 

let currentQuestionIndex

startButton.addEventListener('click', startQuiz)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    console.log("Started!")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => [
        setStatusClass(button, button.dataset.correct)
    ])
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element) 
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

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
            { text: 'READNE.md', correct: false},
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
            { text: 'object oriented', correct: true},
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