const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
 ('question-container')

 const questionElement = document.getElementById('questions')
 const answerButtonsElement = document.getElementById('answer-buttons')

 let shuffledQuestions, currentQuestionIndex

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove ('hide') 

setNextQuestion(); {
    showQuestion(question); {
        questionElement.innerText = question.question
        question.answers.array.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        });

    }
}

function resetState(){
    nextbutton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

function setNextQuestion() {
    
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

resetState() {
    
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
}

console.log('Started')


const questions = [
    { 
    question: 'Who is Samuel Clemens ?',
    answers: [
        { text: 'Author: Mark Twaine', correct: true},
        { text: 'Crime Boss: Alphonse Capone', correct: false },
        { text: 'Actor: Morgan Freedman', correct: false },
        { text: 'Author: Steven King', correct: false }
    ]
