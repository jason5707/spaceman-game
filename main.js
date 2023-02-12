
 


window.onload = function() {
const words = ['GALAXY', 'PLANET', 'ASTRONAUT', 'STAR', 'METEOR', 'SPACESHIP', 'SATELLITE', 'COMET', 'ASTRONOMY', 'MARS' ];
let lives = 5;
document.getElementById("counter").innerHTML = lives;    
let hiddenWord = '';
let randomWord = [];
let displayWord = [];

function randomWordSelector() {
    if (randomWord.length > 0) return;
    let randomIndex = Math.floor(Math.random() * words.length);
    // found a solution on splitting the word into an array of letters
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    randomWord = words[randomIndex].split('');
    
    // solution for letter to be hidden and revealed when correct
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    displayWord = "_".repeat(randomWord.length);

    document.getElementById("word").innerHTML = displayWord
    
}
    document.getElementById("startBtn").addEventListener("click", randomWordSelector);



const keyboard = document.getElementById("keyboard");
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 alphabet.split('').forEach(letter => {
    const key= document.createElement("button");
    key.innerHTML = letter;
    key.addEventListener('click', (evt) => {
        hideButton(evt.target);

        randomWord.forEach((l, idx) => {
            
            if (l === letter) {
                displayWordArray = displayWord.split('');
                displayWordArray.splice(idx, 1, letter)
                displayWord = displayWordArray.join('');
               
                document.getElementById("word").innerHTML = displayWordArray.join('')
                
                
            
        
                }
            });
        
            if (!displayWord.includes(letter)) {
                lives--;
                document.getElementById("counter").innerHTML = lives;
               
            }
            if (lives === 0) {
                const buttons = document.querySelectorAll("button");
                buttons.forEach(button => {
                    button.style.display = "none";
                
                document.getElementById("word").innerHTML = "TRY AGAIN";
                document.getElementById("startBtn").style.display = "re";
                setTimeout(function() {
                    window.location.reload();
                }, 5000);
            });
            }
            if (displayWord === randomWord.join('')) {
                const buttons = document.querySelectorAll("button");
                buttons.forEach(button => {
                    button.style.display = "none";
                document.getElementById("word").innerHTML = "YOU WIN";
                 
                
                
                setTimeout(function() {
                    window.location.reload();
                }, 5000);

            })
        }
    })
    keyboard.appendChild(key);
    });
}
function hideButton(clickedButton) {
    clickedButton.style.display = 'none';
}


    

 




// 11. if all correct answers are revealed return 'You win!' & play again button
// function to renderMessage






