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
];

function addQuestion(question) {
    questions.push(question);
}



document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract question text
    const questionInput = document.getElementById('question-input');
    const questionText = questionInput.value.trim();

    if (questionText === '') {
        alert('Please enter a question.');
        return;
    }

    // Extract answer texts
    const answerInputs = document.querySelectorAll('.answer-input');
    const answers = [];
    answerInputs.forEach(input => {
        const answerText = input.value.trim();
        if (answerText !== '') {
            answers.push({ text: answerText, correct: false });
        }
    });

    // Make first answer correct
    if (answers.length > 0) {
        answers[0].correct = true;
    }

    // Construct question object
    const question = {
        question: questionText,
        answers: answers
    };

    // Add question to the existing questions array
    addQuestion(question);

    // Clear form inputs
    questionInput.value = '';
    answerInputs.forEach(input => input.value = '');

    alert('Question added successfully!');
});
