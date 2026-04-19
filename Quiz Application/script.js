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

let QnsNum = document.getElementById("QnsNum")
let qnsTimer = document.getElementById("timer")
let Question = document.getElementById("Question")
let QnsOption = document.getElementById("QnsOption")
let nextBtn = document.getElementById("nextBtn")
let result = document.getElementById("result")

let currentIndex = 0
let selectedAnswer = null
let userAnswer = []
let score = 0
let TimerLeft = 30;
let interval;

function qnsLoad() {

    let currentQns = quizData[currentIndex]
    QnsNum.innerHTML = `qns ${currentIndex + 1}/${quizData.length}`

    Question.innerText = currentQns.question

    QnsOption.innerHTML = ""

    currentQns.options.forEach((opt, index) => {

        let col = document.createElement("div")
        col.classList.add("col-md-6")

        let button = document.createElement("button")

        button.innerText = opt
        button.classList.add("btn", "btn-outline-primary", "option-btn")


        button.onclick = function () {

            selectedAnswer = index;

           
userAnswer.push({
    question: currentQns.question,
    selected: index,                 
    correct: currentQns.answer,      
    options: currentQns.options
})

            nextQns()
        }

        col.appendChild(button)
        QnsOption.appendChild(col)
    })

    timer()
}
qnsLoad()


function timer() {

  clearInterval(interval);
  TimerLeft = 30;
  qnsTimer.innerHTML =`Time Left : ${TimerLeft}`;

  interval = setInterval(() => {
    TimerLeft--;

    qnsTimer.innerHTML =`Time Left : ${TimerLeft}`;

    if (TimerLeft < 0) {
      nextQns();
      selectedAnswer = null;
    }
  }, 1000);
}



function nextQns() {

    if (selectedAnswer !== null && quizData[currentIndex].options[selectedAnswer] === quizData[currentIndex].answer) {
        score++
     
    }

    if (currentIndex < quizData.length - 1) {
        currentIndex++
        selectedAnswer= null
        qnsLoad()

    } else {
        Result()
    }

}

function Result() {

QnsOption.innerHTML = ""       
nextBtn.style.display = "none" 
Question.innerHTML = ""
qnsTimer.style.display = "none"
QnsNum.innerHTML = ""

    result.innerHTML = `
    
    <h3 class="">Result</h3>
    <h3>result: ${score}/${quizData.length}</h3>

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



    `

}
