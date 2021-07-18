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

