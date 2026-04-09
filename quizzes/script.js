

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
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>"
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

let qusNumber = document.getElementById("qusNumber")

let timer = document.getElementById("timer")

let questions = document.getElementById("questions")

let options = document.getElementById("options")

let butSubmit = document.getElementById("butSubmit")

let currentIndex = 0

function lodeQuestion() {

    let currentQUS = quizData[currentIndex]

    questions.innerText = currentQUS.question

    options.innerHTML = ""

    currentQUS.options.forEach((opt) => {

        let col = document.createElement("div")

        col.classList.add("col-md-6")

        let button = document.createElement("button")

        button.innerHTML = opt

        button.classList.add("btn", "btn-outline-primary", "option-btn")

        col.appendChild(button)

        options.appendChild(col)

    })

}
lodeQuestion()

function next (){

    
}