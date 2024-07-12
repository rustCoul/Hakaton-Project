const questions = [
    {
        question: "Which feature allows you to create a Derived class that inherits properties from more than one Base class?",
        answers: [
            { text: "A. Multilevel Inheritance.", correct: false },
            { text: "B. Multiple Inheritance.", correct: true },
            { text: "C. Hybrid Inheritance.", correct: false },  
            { text: "D. Hierarchical Inheritance.", correct: false }
        ]
    }
];

function addQuestion(question) {
    questions.push(question);
}
