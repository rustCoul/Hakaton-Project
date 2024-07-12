const questions = [
    {
        question: "Which feature allows you to create a Derived class that inherits properties from more than one Base class?",
        answers: [
            { text: "A. Multilevel Inheritance.", correct: false },
            { text: "B. Multiple Inheritance.", correct: true },
            { text: "C. Hybrid Inheritance.", correct: false },	
            { text: "D. Hierarchical Inheritance.", correct: false }
        ]
    },
    {
        question: "Which feature in Object Oriented Programming allows reusing code?",
        answers: [
            { text: "A. Polymorphism", correct: false },	
            { text: "B. Inheritance", correct: true },
            { text: "C. Encapsulation", correct: false },
            { text: "D. Data hiding", correct: false }
        ]
    },
     {
        question: "A function that changes the state of the cout object is called _______?",
        answers: [
            { text: "A. a Member function", correct: false },	
            { text: "B. an Adjuster function", correct: false},
            { text: "C. a Manipulator function", correct: true },
            { text: "	D. an Operator function", correct: false }
        ]
    },
     {
        question: "What does C++ append to the end of a string literal constant?",
        answers: [
            { text: "A. A space.", correct: false },	
            { text: "B. A number sign (#).", correct: false },
            { text: "C. An asterisk (*).", correct: false },
            { text: "D. A null character.", correct: true }
        ]
    },
     {
        question: "Which feature in Object Oriented Programming allows reusing code?",
        answers: [
            { text: "A. Polymorphism", correct: false },	
            { text: "B. Inheritance", correct: true },
            { text: "C. Encapsulation", correct: false },
            { text: "D. Data hiding", correct: false }
        ]
    },
     
    // Add more questions as needed
];

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');

let currentQuestionIndex = 0;
let score = 0;
const userChoices = [];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userChoices.length = 0;
    showQuestion();
    resultContainer.innerText = '';
    submitButton.disabled = false;
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    userChoices[currentQuestionIndex] = answer;
}

function submitAnswer() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        submitButton.disabled = true;
        showResult();
    }
}

function showResult() {
    resultContainer.innerHTML = '';
    questions.forEach((question, index) => {
        const userChoice = userChoices[index];
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${question.question}`;
        resultItem.appendChild(questionText);
        if (userChoice) {
            const answerText = document.createElement('p');
            answerText.textContent = `Your answer: ${userChoice.text}`;
            resultItem.appendChild(answerText);
            const correctAnswer = question.answers.find(ans => ans.correct);
            const correctText = document.createElement('p');
            correctText.textContent = `Correct answer: ${correctAnswer.text}`;
            resultItem.appendChild(correctText);
            if (userChoice.correct) {
                resultItem.classList.add('correct');
                score++;
            } else {
                resultItem.classList.add('incorrect');
            }
        } else {
            const answerText = document.createElement('p');
            answerText.textContent = "You didn't select an answer.";
            resultItem.appendChild(answerText);
            resultItem.classList.add('incorrect');
        }
        resultContainer.appendChild(resultItem);
    });
    resultContainer.insertAdjacentHTML('afterbegin', `<p>Your score: ${score} out of ${questions.length}</p>`);
}

startQuiz();
