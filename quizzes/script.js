const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Machine Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["font-style", "text-color", "color", "background-color"],
        answer: "color"
    },
    {
        question: "Which language is used for web page structure?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        answer: "HTML"
    },
    {
        question: "Which is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Flask"],
        answer: "React"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "/* */"],
        answer: "//"
    },
    {
        question: "Which method is used to print in console?",
        options: ["console.print()", "log.console()", "console.log()", "print.console()"],
        answer: "console.log()"
    },
    {
        question: "Which HTML tag is used for images?",
        options: ["img", "image", "pic", "src"],
        answer: "img"
    },
    {
        question: "Which CSS property controls layout flex?",
        options: ["display", "flex-box", "layout", "position"],
        answer: "display"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Google", "Microsoft", "Netscape", "Apple"],
        answer: "Netscape"
    },
    {
        question: "Which keyword is used to declare variable in JS?",
        options: ["var", "int", "string", "define"],
        answer: "var"
    }
];

let qusNumber = document.getElementById("qusNumber");
let qnsTimer = document.getElementById("timer");
let questions = document.getElementById("questions");
let options = document.getElementById("options");
let butSubmit = document.getElementById("butSubmit");

let currentIndex = 0;
let score = 0;
let selectedAnswer = null;
let userAnswer = [];
let qnsCounter = 1;
let TimerLeft = 30;
let interval;

function lodeQuestion() {

    let currentQUS = quizData[currentIndex];

    qusNumber.innerHTML = `Qns ${qnsCounter}/${quizData.length}`;

    questions.innerText = currentQUS.question;

    options.innerHTML = "";
    

    currentQUS.options.forEach((opt, index) => {

        let col = document.createElement("div");
        col.classList.add("col-md-6");

        let button = document.createElement("button");

        button.innerText = opt;
        button.classList.add("btn", "btn-outline-primary", "option-btn");

        button.onclick = function () {
            selectedAnswer = index;

            userAnswer.push({
                question: currentQUS.question,
                selected: index,
                correct: currentQUS.answer,
                options: currentQUS.options,
            });

            nextQuestion();
        };

        col.appendChild(button);
        options.appendChild(col);
    });
        timer()

}

lodeQuestion();

function timer() {
  clearInterval(interval);
  TimerLeft = 30;
  qnsTimer.innerHTML =`Time Left : ${TimerLeft}`;

  interval = setInterval(() => {
    TimerLeft--;

    qnsTimer.innerHTML =`Time Left : ${TimerLeft}`;

    if (TimerLeft < 0) {
      nextQuestion();
      selectedAnswer = null;
    }
  }, 1000);
}



function nextQuestion() {

    if (selectedAnswer !== null && quizData[currentIndex].options[selectedAnswer] === quizData[currentIndex].answer) {
        score++;
    }

    if (currentIndex < quizData.length - 1) {
        currentIndex++;
        qnsCounter++;
        selectedAnswer = null;

        lodeQuestion();
    } else {
        questionResult();
    }
}

function questionResult() {
    const questionResult = document.getElementById("Quizzes-result");

    let h1 = document.getElementById("h1")

    options.innerHTML = ""
    butSubmit.style.display = "none"
    questions.innerHTML = ""
    h1.innerHTML=""
    qnsTimer.style.display="none"
    qusNumber.innerHTML =""
     

    questionResult.innerHTML = `
  
  <h3 class="text-center">Quiz Result</h3>
  <h5 class="text-center">Result:- ${score}/${quizData.length}</h5>

  <div class="mt-3">

  <h3 class="text-center">Review Summary</h3>

  <ul class="list-group answer-qus">
  ${userAnswer.map(
        (ans, index) => `
    
    <li class="list-group-item">

    <h5 class="text-center"> Question No-${index + 1} :- ${ans.question}</h5>
    <br>
    <h6 class="text-center">Your Answer :- ${ans.selected !== null ? ans.options[ans.selected] : "not selected"}  </h6>
    <br>
    <h6 class="text-center">Correct Answer :- ${ans.correct}</h6>
    
    </li>
    
    `
    )}
  </ul>

  </div>
  `;
}












