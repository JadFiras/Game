// Question Data
const questions = [
    {
        question: "What type of process is meiosis?",
        answers: [
            "Asexual",
            "Sexual",
            "Binary Fission",
            "Mitosis"
        ],
        correctAnswer: "Sexual",
        explanationCorrect: "Meiosis is a sexual process that produces gametes, which are essential for reproduction.",
        explanationIncorrect: "Meiosis is a sexual process, unlike asexual processes like binary fission."
    },
    {
        question: "What are its phases?",
        answers: [
            "Interphase, Prophase, Metaphase, Anaphase, Telophase",
            "Prophase I, Metaphase I, Anaphase I, Telophase I, Prophase II, Metaphase II, Anaphase II, Telophase II",
            "Mitosis Phases",
            "G1, S, G2"
        ],
        correctAnswer: "Prophase I, Metaphase I, Anaphase I, Telophase I, Prophase II, Metaphase II, Anaphase II, Telophase II",
        explanationCorrect: "These are the stages of meiosis, during which genetic material is exchanged and divided.",
        explanationIncorrect: "These are the stages of meiosis, not mitosis."
    },
    {
        question: "What is crossover and why is it important?",
        answers: [
            "Genetic mutation",
            "Exchange of genetic material between chromosomes",
            "Cell division",
            "DNA replication"
        ],
        correctAnswer: "Exchange of genetic material between chromosomes",
        explanationCorrect: "Crossover allows for genetic diversity by exchanging material between homologous chromosomes.",
        explanationIncorrect: "Crossover is a process that increases genetic diversity, unlike other processes like DNA replication."
    }
];

let currentQuestionIndex = 0;
let selectedAnswer = "";
let gameStarted = false;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('next-question').addEventListener('click', nextQuestion);
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function startGame() {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    gameStarted = true;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    
    const answersContainer = document.getElementById('answer-buttons');
    answersContainer.innerHTML = '';
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => handleAnswerClick(answer, button));
        answersContainer.appendChild(button);
    });

    document.getElementById('submit-answer').style.display = 'inline-block';
    document.getElementById('next-question').style.display = 'none';
    document.getElementById('feedback').style.display = 'none';
    document.getElementById('explanation').style.display = 'none';
}

function handleAnswerClick(answer, button) {
    selectedAnswer = answer;

    // Highlight selected button
    const buttons = document.querySelectorAll('#answer-buttons button');
    buttons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    const explanation = document.getElementById('explanation');

    if (selectedAnswer === currentQuestion.correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        explanation.textContent = currentQuestion.explanationCorrect;
    } else {
        feedback.textContent = "Incorrect!";
        feedback.style.color = "red";
        explanation.textContent = currentQuestion.explanationIncorrect;
    }

    document.getElementById('feedback').style.display = 'block';
    document.getElementById('explanation').style.display = 'block';
    document.getElementById('next-question').style.display = 'inline-block';
    document.getElementById('submit-answer').style.display = 'none';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById('game-screen').innerHTML = "<h1>Game Over! Thanks for playing!</h1>";
    }
}
