const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
 ('question-container')

 const shuffledQuestions, currentQuestionIndex

function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(()) => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove ('hide') 

setNextQuestion(){
    showQuestion(question)
}

function setNextQuestion() {

}

function selectAnswer() {

}

console.log('Started')


const questions = [
    { 
    question: 'Who is Samuel Clemens ?',
    answers: [
        { text: 'Author: Mark Twaine', correct: true}
        { text: 'Crime Boss: Alphonse Capone', correct: false }
        { text: 'Actor: Morgan Freedman', correct: false }
        { text: 'Author: Steven King', correct: false }
           
        }
    ]
    }
]