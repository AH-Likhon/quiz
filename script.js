const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText MakeUp Language",
        d: "HyperText Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "CasCading Style Sheets",
        b: "CasCading Style Shoots",
        c: "Cartoon Style Sheets",
        d: "Cascading String Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "HyperText Transfer Products",
        b: "Hey Text Transfer Protocol",
        c: "HyperText Transmit Protocol",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JasonScript",
        b: "JavaScript",
        c: "JaaSuper",
        d: "JasonSuper",
        ans: "ans2"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadquestion = () => {

    const questionlist = quizDB[questionCount];
    question.innerText = questionlist.question;

    option1.innerText = questionlist.a;
    option2.innerText = questionlist.b;
    option3.innerText = questionlist.c;
    option4.innerText = questionlist.d;
}

loadquestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((currAnsElm) => {
        if (currAnsElm.checked) {
            answer = currAnsElm.id;
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((currAnsElm) => currAnsElm.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };

    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadquestion();
    } else {
        showScore.innerHTML = `
         <h3>Your Scored ${score}/${quizDB.length} ✌️ </h3>
         <button class="btn" onclick="location.reload()">Paly Again</button>
        `;

        showScore.classList.remove('scoreArea');
    };
});