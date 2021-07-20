const initials = document.getElementById('initials');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// Below with the JSON.parse function, the highscores become numerical from a string. The opposite can be done from JSON.stringify.//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse//
const highScores = JSON.parse(localStorage.getItem('highScores'));

// Final score will be at the top
finalScore.innerText = mostRecentScore; 

function saveHighScore(e) {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: initials.value,
    };
    //TEST: console.log(score);
    highScores.push(score);
    // This sorts the array from high to low
    highScores.sort((a, b) => b.score - a.score);
    // At index 6, every extra score will be left off. 
    // .splice method on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice//
    highScores.splice(6);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./highscore.html');
};