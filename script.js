// Pool of questions with scaling descriptions
const questions = [
    {
        question: "How many hours did you study this week?",
        scale: "0-2 hours = 1\n2-4 hours = 2\n4-6 hours = 3\n6-8 hours = 4\n8-10 hours = 5\n10-12 hours = 6\n12-14 hours = 7\n14-16 hours = 8\n16-18 hours = 9\n18+ hours = 10"
    },
    {
        question: "How much did you enjoy your classes this week?",
        scale: "On a scale from 0 (not at all) to 10 (loved it)"
    },
    {
        question: "How many assignments did you finish this week?",
        scale: "0-2 assignments = 1\n2-4 assignments = 2\n5-6 assignments = 3\n7-8 assignments = 4\n9-10 assignments = 5\n11-12 assignments = 6\n13-14 assignments = 7\n15-16 assignments = 8\n17-18 assignments = 9\n19+ assignments = 10"
    },
    {
        question: "How many classes did you attend this week?",
        scale: "0-2 classes = 1\n2-4 classes = 2\n5-7 classes = 3\n8-10 classes = 4\n11-13 classes = 5\n14-16 classes = 6\n17-19 classes = 7\n20-22 classes = 8\n23-25 classes = 9\n26+ classes = 10"
    },
    // Add more questions as needed
];

// Track the current question and total score
let currentQuestionIndex = 0;
let totalScore = 0;

// Get elements
const questionElement = document.getElementById('question');
const scaleElement = document.getElementById('scale');
const answerElement = document.getElementById('answer');
const resultContainer = document.getElementById('result');
const percentageDisplay = document.getElementById('percentage');
const noteDisplay = document.getElementById('note');

// Display the first question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    scaleElement.textContent = currentQuestion.scale.replace(/\n/g, "\n");
}

// Move to the next question
function nextQuestion() {
    const answer = parseInt(answerElement.value);

    // Validate input
    if (isNaN(answer) || answer < 0 || answer > 10) {
        alert('Please enter a number between 0 and 10.');
        return;
    }

    // Add the answer to the total score
    totalScore += answer;
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        answerElement.value = '';  // Reset input field
        showQuestion();
    } else {
        calculateResult();
    }
}

// Calculate the result
function calculateResult() {
    const percentage = (totalScore / (questions.length * 10)) * 100;
    percentageDisplay.textContent = `Your score is: ${percentage.toFixed(2)}%`;

    // Fun note based on the result
    let note = '';
    if (percentage >= 90) {
        note = "You're a superhero in your studies!";
    } else if (percentage >= 70) {
        note = "Great job! You're almost there!";
    } else if (percentage >= 50) {
        note = "Good effort, keep it up!";
    } else {
        note = "You need more training, hero!";
    }

    noteDisplay.textContent = note;

    // Hide the question container and show the result
    document.getElementById('question-container').classList.add('hidden');
    resultContainer.classList.remove('hidden');
}

// Start the quiz
showQuestion();
