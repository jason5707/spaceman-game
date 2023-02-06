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
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
alphabet.split('').forEach(letter => {
    const key= document.createElement("button");
    key.innerHTML = letter;
    key.addEventListener('click', () => {
        console.log(`key ${letter} was pressed.`);
    });
    keyboard.appendChild(key);
});
};

// 6. addEventListener for a function to execute when button clicked.
// returning thruthy or falsy depending on what answer exist in randomWord array

// 7.  create function for when wrong answer a spaceman will be deducted until 0 if {

// 9. if 0 player lose return 'You lose!' & 'play again' button


// 10.if right answer no spaceman deducted 


// 11. if all correct answers are revealed return 'You win!' & play again button
// }
// 12.  create an variable that holds spacemen count



 








 






