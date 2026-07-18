const questions = [                                                             
    {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: ["var", "let", "define", "const var"],
        answer: "let"
    },
    {
        question: "Which method is used to select an element by ID?",
        options: ["querySelector()", "getElementById()", "getElementsByClassName()", "selectById()"],
        answer: "getElementById()"
    },
    {
        question: "What is the output of typeof null?",
        options: ["null", "undefined", "object", "string"],
        answer: "object"
    },
    {
        question: "Which function is used to convert JSON to object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.toObject()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which array method adds an element at the end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        answer: "push()"
    }
];

let questionElement = document.querySelector("h2");
let optionButtons = document.querySelectorAll(".option-btn");
let scoreElement = document.getElementById("score");
let timerElement = document.getElementById("timer");
let nextButton = document.querySelector("button:last-of-type");

let currentQues = 0;
let score = 0;

let timeLeft = 10
let timer;

function startTimer() {

    clearInterval(timer);

    timeLeft = 10;
    timerElement.textContent = timeLeft;

    timer = setInterval(() => {

        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }

    }, 1000);
}

function generate_Question() {

    let currentQuestion = questions[currentQues];

    questionElement.textContent = currentQuestion.question;

    optionButtons.forEach((button, index) => {

        button.textContent = currentQuestion.options[index];

        button.style.backgroundColor = "#2d3748";

        button.disabled = false;

    });

    startTimer();
}

optionButtons.forEach(button => {

    button.addEventListener("click", () => {

        clearInterval(timer);

        let selectedAnswer = button.textContent;
        let correctAnswer = questions[currentQues].answer;

        optionButtons.forEach(btn => btn.disabled = true);

        if (selectedAnswer === correctAnswer) {

            button.style.backgroundColor = "green";

            score++;

            scoreElement.textContent = score;

        } else {

            button.style.backgroundColor = "red";

            optionButtons.forEach(btn => {

                if (btn.textContent === correctAnswer) {

                    btn.style.backgroundColor = "green";

                }

            });

        }

    });

});

function nextQuestion() {

    currentQues++;

    if (currentQues < questions.length) {

        generate_Question();

    } else {

        showResult();

    }

}

nextButton.addEventListener("click", nextQuestion);

function showResult() {

    clearInterval(timer);

    questionElement.textContent = "Quiz Finished! 🎉";

    optionButtons.forEach(btn => btn.style.display = "none");

    nextButton.style.display = "none";

    let resultText = document.createElement("h3");

    resultText.textContent = `Your Final Score is ${score} / ${questions.length}`;

    document.querySelector(".quiz-box").appendChild(resultText);
}

generate_Question();