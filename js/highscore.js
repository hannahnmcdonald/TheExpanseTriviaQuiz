const highScoresList = document.getElementById('highScoresList');

// Below with the JSON.parse function, the highscores become numerical from a string. The opposite can be done from JSON.stringify.//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse//

const highScores = JSON.parse(localStorage.getItem("highScores"));

// TEST: console.log(highScores);

for (let score of highScores) {
    // Creating the list element
    const listItem = document.createElement('li');
    listItem.innerText = `${score.name} - ${score.score}`;
    // MDN DOCS on .classList: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList-------------------------------------//
    listItem.classList.add('highScores');
    // Appends the child (high score) to the parent which is the high score list------------------------------------------------------//
    highScoresList.appendChild(listItem);
};


