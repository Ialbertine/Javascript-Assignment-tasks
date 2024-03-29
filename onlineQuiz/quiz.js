// Quiz questions and answers
const quizData = [
    {
        question: "What is the Name of the President of Rwanda?",
        options: ["Nelson Mandela", "Paul Kagame", "Peter Kagame"],
        correctAnswer: "Paul Kagame"
    },
    {
        question: "What is the capital city of Switzerland?",
        options: ["Berlin", "Moscow", "Bern",],
        correctAnswer: "Bern"
    },
    {
        question: "What is the Highst Mountain in the world?",
        options: ["Everest", "Kilimanjaro", "Himalaya"],
        correctAnswer: "Everest"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Function to display a random quiz question
function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const submitButton = document.getElementById("submit-btn");
    const feedbackContainer = document.getElementById("feedback-container");

    // Clear previous content
    questionContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
    feedbackContainer.innerHTML = "";

    // Display the current question
    questionContainer.textContent = quizData[currentQuestionIndex].question;

    // Display answer options
    quizData[currentQuestionIndex].options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(optionButton);
    });

    // Enable or disable the submit button based on whether the user has answered the question
    submitButton.disabled = true;
}

// Function to handle user's answer selection
function selectAnswer(selectedOption) {
    const submitButton = document.getElementById("submit-btn");
    submitButton.disabled = false;
    selectedAnswer = selectedOption;
}

// Function to check the correctness of the selected answer
function checkAnswer() {
    const feedbackContainer = document.getElementById("feedback-container");
    const scoreContainer = document.getElementById("score");
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;

    if (selectedAnswer === correctAnswer) {
        feedbackContainer.textContent = "Correct!";
        score++;
    } else {
        feedbackContainer.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
    }

    // Move to the next question
    currentQuestionIndex++;

    // Display the next question or end the quiz
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    } else {
        feedbackContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your final score is ${score}/${quizData.length}.</p>`;
        scoreContainer.textContent = score;
    }
}

// Initial display
displayQuestion();
