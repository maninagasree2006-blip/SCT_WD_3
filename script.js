const questions = [
{
    question: "Who is known as the father of Java?",
    options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"],
    answer: "James Gosling"
},
{
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "<!-- -->", "**"],
    answer: "//"
},
{
    question: "What does CPU stand for?",
    options: [
        "Central Process Unit",
        "Central Processing Unit",
        "Computer Processing Unit",
        "Core Processing Unit"
    ],
    answer: "Central Processing Unit"
},
{
    question: "Which company created React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    answer: "Facebook"
},
{
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue"
},
{
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: "const"
},
{
    question: "How many bits are there in 1 byte?",
    options: ["4", "8", "16", "32"],
    answer: "8"
},
{
    question: "Which tag is used to insert an image in HTML?",
    options: ["<image>", "<pic>", "<img>", "<src>"],
    answer: "<img>"
},
{
    question: "Git is mainly used for?",
    options: [
        "Database Management",
        "Version Control",
        "Web Hosting",
        "Programming"
    ],
    answer: "Version Control"
},
{
    question: "Which CSS property changes text color?",
    options: ["font-color", "text-color", "color", "foreground"],
    answer: "color"
}
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {

    document.getElementById("progress").innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

    selectedAnswer = null;

    const q = questions[currentQuestion];

    questionElement.textContent = q.question;

    optionsElement.innerHTML = "";

    q.options.forEach(option => {

        const button = document.createElement("button");

        button.innerText = option;
        button.classList.add("option");

        button.addEventListener("click", () => {

            document.querySelectorAll(".option").forEach(btn => {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
            selectedAnswer = option;
        });

        optionsElement.appendChild(button);
    });
}

nextBtn.addEventListener("click", () => {

    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {

    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");
    document.getElementById("progress").style.display = "none";

    let message = "";

    if(score >= 8){
        message = "🏆 Excellent Performance!";
    }
    else if(score >= 5){
        message = "🎉 Great Job!";
    }
    else{
        message = "📚 Keep Practicing!";
    }

    document.getElementById("score").innerHTML =
    `${message}<br><br>⭐ Score: ${score}/${questions.length}`;
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz").classList.remove("hide");
    document.getElementById("result").classList.add("hide");
    document.getElementById("progress").style.display = "block";

    loadQuestion();
}

loadQuestion();