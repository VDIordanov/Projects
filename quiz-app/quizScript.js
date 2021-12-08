
const quizData = [
    {
        question: "Which country operationalized world’s largest radio telescope?",
        a: "USA",
        b: "China",
        c: "Russia",
        d: "India",
        correct: "b",
    },
    {
        question: "Which one among the following radiations carries maximum energy?",
        a: "Ultraviolet rays",
        b: "Gamma rays",
        c: "X- rays",
        d: "Infra-red rays",
        correct: "b",
    },
    {
        question: "Nobel prize is awarded for which of the following disciplines:",
        a: "Literature, peace and economics",
        b: "Medicine or Physiology",
        c: "Chemistry and Physics",
        d: "All the above",
        correct: "d",
    },
    {
        question: "The Second Italian Satellite launched from Soviet Union was",
        a: "Rohini",
        b: "Aryabhata",
        c: "Bhaskar–1",
        d: "Apsara",
        correct: "c",
    },
    {
        question: "The language spoken by the people by Pakistan is ?",
        a: "Sindhi",
        b: "Palauan",
        c: "Hindi",
        d: "Nauruan",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});