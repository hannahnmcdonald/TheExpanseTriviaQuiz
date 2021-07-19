// Setting the constants--------------------------------------------------------------------------//
// Below sets the constants by the ID/CLASS of the HTML//
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-option"));

// TEST: console.log(choices);

// Setting some new variables---------------------------------------------------------------------//

// Setting currentQuestion as an object
var currentQuestion = {};
// Currently NOT accepting answers because the function of starting the game has not been called yet//
var acceptAnswers = false;
// Zero questions have been asked at this point
var questionCounter = 0;
// Setting unusedQuestions as an array
var unusedQuestions = [];

//QUESTIONS List---------------------------------------------------------------------------------//
let questions= [ 
    {
        question: "What was the name of the ship Holden was serving on at the start of the show?",
        choice1: "The Constellation",
        choice2: "The Rocinante",
        choice3: "The Exodus",
        choice4: "The Canterbury",
        answer: 4,
    },
    {
        question: "Who is botanist of a soy farm on Ganymede Station?",
        choice1: "Praxideke",
        choice2: "Cotyar",
        choice3: "Jefferson",
        choice4: "Alex",
        answer: 1,
    },
    {
        question: "What was the name of Julie's racing ship?",
        choice1: "Xuesen",
        choice2: "Donnager",
        choice3: "Razorback",
        choice4: "Agatha King",
        answer: 3,
    },
    {
        question: "What is IO?",
        choice1: "A moon around Jupiter",
        choice2: "A maiden loved by Zues",
        choice3: "One of the Galilean moons",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "How many traversable wormholes the Ring Network has?",
        choice1: "123",
        choice2: "1373",
        choice3: "759",
        choice4: "1743",
        answer: 2,
    },
    {
        question: "Where is Amos from?",
        choice1: "Detroit",
        choice2: "Baltimore",
        choice3: "Melbourne",
        choice4: "Chicago",
        answer: 2,
    },
    {
        question: "During the dramatic events of the 3rd season, Admiral Souther commanded the -?",
        choice1: "Agatha King",
        choice2: "Thomas Prince",
        choice3: "Nathan Hale",
        choice4: "Guanshiyin",
        answer: 1,
    },
    {
        question: "Which ship's captain is Sandrine Kirino?",
        choice1: "Xuesen",
        choice2: "Donnager",
        choice3: "Hammurabi",
        choice4: "Scirocco",
        answer: 3,
    },
    {
        question: "How many childen did Jules-Pierre Mao have?",
        choice1: "2",
        choice2: "3",
        choice3: "5",
        choice4: "7",
        answer: 3,
    },
    {
        question: "What was Drummer's job before she became a captain on the Behemoth?",
        choice1: "XO on the Guy Molinari",
        choice2: "Head of Belter security on Eros",
        choice3: "Captain of the Toth",
        choice4: "XO of the Canterbury",
        answer: 1,
    }
];


// Below FX is called at the end of this JS//
function startQuiz() {
    // Starting question count
    questionCounter = 0;
    // All questions are unused at the beginning
    unusedQuestions = [ 
        {
            question: "What was the name of the ship Holden was serving on at the start of the show?",
            choice1: "The Constellation",
            choice2: "The Rocinante",
            choice3: "The Exodus",
            choice4: "The Canterbury",
            answer: 4,
        },
        {
            question: "Who is botanist of a soy farm on Ganymede Station?",
            choice1: "Praxideke",
            choice2: "Cotyar",
            choice3: "Jefferson",
            choice4: "Alex",
            answer: 1,
        },
        {
            question: "What was the name of Julie's racing ship?",
            choice1: "Xuesen",
            choice2: "Donnager",
            choice3: "Razorback",
            choice4: "Agatha King",
            answer: 3,
        },
        {
            question: "What is IO?",
            choice1: "A moon around Jupiter",
            choice2: "A maiden loved by Zues",
            choice3: "One of the Galilean moons",
            choice4: "All of the above",
            answer: 4,
        },
        {
            question: "How many traversable wormholes the Ring Network has?",
            choice1: "123",
            choice2: "1373",
            choice3: "759",
            choice4: "1743",
            answer: 2,
        },
        {
            question: "Where is Amos from?",
            choice1: "Detroit",
            choice2: "Baltimore",
            choice3: "Melbourne",
            choice4: "Chicago",
            answer: 2,
        },
        {
            question: "During the dramatic events of the 3rd season, Admiral Souther commanded the -?",
            choice1: "Agatha King",
            choice2: "Thomas Prince",
            choice3: "Nathan Hale",
            choice4: "Guanshiyin",
            answer: 1,
        },
        {
            question: "Which ship's captain is Sandrine Kirino?",
            choice1: "Xuesen",
            choice2: "Donnager",
            choice3: "Hammurabi",
            choice4: "Scirocco",
            answer: 3,
        },
        {
            question: "How many childen did Jules-Pierre Mao have?",
            choice1: "2",
            choice2: "3",
            choice3: "5",
            choice4: "7",
            answer: 3,
        },
        {
            question: "What was Drummer's job before she became a captain on the Behemoth?",
            choice1: "XO on the Guy Molinari",
            choice2: "Head of Belter security on Eros",
            choice3: "Captain of the Toth",
            choice4: "XO of the Canterbury",
            answer: 1,
        }
    ];
    //TEST: console.log(unusedQuestions);
    //Function of getNewQuestion to follow
    getNewQuestion();
};


// Function of getting each question-------------------------------------------------------//
function getNewQuestion() {

    // Below are the parameters. If the parameters are met, user will be taken to the end.html page to save their score//
    if (unusedQuestions.length === 0 || questionCounter >= 10 || secondsLeft === 0) 
    {   
        var score = secondsLeft;
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./TheExpanseTriviaQuiz/end.html');
    }

    // This cycles through the available questions from the questionsIndex array//
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * unusedQuestions.length);
    currentQuestion = unusedQuestions[questionIndex];
    // Below populates the question into the 'question' ID in the HTML
    question.innerText = currentQuestion.question;

    for (let choice of choices) {
        const number = choice.dataset['number'];
        // This will populate the choices into the "choice-option" in the html
        choice.innerText = currentQuestion['choice' + number];
    };
    // This removes the old question and adds a new one//
    // .splice method on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice//
    unusedQuestions.splice(questionIndex, 1);
    acceptAnswers = true;

};

// TEST: console.log(question);
for (let choice of choices) { 
    choice.addEventListener('click', function(e) {
        // IF not accepting answers- return//
        if (!acceptAnswers) return;

        // MDN e.target: https://developer.mozilla.org/en-US/docs/Web/API/Event/target//
        acceptAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // console.log(selectedAnswer == currentQuestion.answer) had to change to == instead of === due to datatype conflict
        
        // Below variables are set to check if answer is correct/incorrect. Correct/Incorrect will be displayed in the console//
        // TODO: Add colors in CSS for correct/incorrect answers//
        var answerIndex = 'incorrect';
            if (selectedAnswer == currentQuestion.answer) {
                answerIndex = 'correct';
            }

            // TEST: console.log(answerIndex);
            // IF incorrect, minus 10 seconds; correct plus 10 seconds//
            if (answerIndex === 'correct') {
                secondsLeft = secondsLeft + 10;
                // TEST: console.log("Correct, plus 10 seconds");
              } else {
                secondsLeft = secondsLeft - 10;
                // TEST: console.log("Incorrect, minus 10 seconds");
              }
            // Below gives the class applied (color) a time limit of 200 milliseconds to show before it goes to next question //
            // 
            selectedChoice.parentElement.classList.add(answerIndex);

            timer = setTimeout(function () {
                selectedChoice.parentElement.classList.remove(answerIndex);
                getNewQuestion();
                // Time of color change set to 200 milliseconds so it doesn't hold up the quiz too much//
            }, 200);
    });
};

startQuiz();