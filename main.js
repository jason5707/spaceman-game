// spaceman game pseudocode.

// with every wrong guess a life is deducted


// 1. Establish an array to hold words 
const words = ['Galaxy', 'Planet', 'Astronaut', 'Star', 'Meteor', 'Spaceship', 'Satellite', 'Comit', 'Astronomy', 'Mars' ];
// 2. create a function to select a random word in the words array

// 3. add that to randomWord array
//
window.onload = function() {

let randomWord = [];
function randomWordSelector() {
    if (randomWord.length > 0) return;
    let randomIndex = Math.floor(Math.random() * words.length);
    randomWord.push(words[randomIndex]);
    document.getElementById("word").innerHTML = randomWord
}
    document.getElementById("startBtn").addEventListener("click", randomWordSelector);

// 4. make an array of alphabets 
// 5. create a function that allows each alphabet to be a button

const keyboard = document.getElementById("keyboard");
const alphabet = 'QGBCMEUVFTIQPZJLYOHSNRKDAXW';
alphabet.split('').forEach(letter => {
    const key= document.createElement("button");
    key.innerHTML = letter;
    key.addEventListener('click', (evt) => {
        hideButton(evt.target);
        console.log(`key ${letter} was pressed.`);
// 6. addEventListener for a function when clicked
// returning thruthy or falsy depending on what answer exist in randomWord array
    
        if (randomWord[0].includes(`${letter}`)) {
            console.log('Correct');
            let newHiddenWord = "";
            for (let i = 0; i < randomWord[0].length; i++) {
            if (randomWord[0][i] === letter) {
                newHiddenWord += letter;
        } else {
            newHiddenWord += hiddenWord[i];
        }
            }
            hiddenWord = newHiddenWord;
            document.getElementById("word").innerHTML = hiddenWord;
        } else {
            console.log("Incorrect");
            lives--;
            console.log(`You have ${lives} lives left.`);
            if (lives === 0) {
                console.log("Game Over");
            }
        }
    });
    keyboard.appendChild(key);
});
}



function hideButton(clickedButton) {
    console.log(clickedButton);
    clickedButton.style.display = 'none';
    
}
    


// 7.  create function for when wrong answer a spaceman will be deducted until 0 if {
// when 
// 9. if 0 player lose return 'You lose!' & 'play again' button

// else if 
// 10.if right answer no spaceman deducted 
// if 

// 11. if all correct answers are revealed return 'You win!' & play again button
// function to renderMessage


// 12.  create an variable that holds spacemen count


// 13. hide letters in randomWord so player
// can guess.

