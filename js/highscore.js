const highScoresList = document.getElementById('highScoresList');

// Below with the JSON.parse function, the highscores become numerical from a string. The opposite can be done from JSON.stringify.//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse//

const highScores = JSON.parse(localStorage.getItem("highScores"));
