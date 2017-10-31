// Globala variabler

var wordList = ['BJÖRK', 'GRÖT', 'BROMS', 'YXA', 'MOSTER', 'FLAGGA'];
var selectedWord = null;
var letterBoxes; //Rutorna där bokstäverna ska stå
var hangmanImg = document.getElementById('hangman');  //Bild som kommer vid fel svar
var hangmanImgNr = 0;
var correctGuesses = 0;
var msgElem = document.querySelector('#message > p'); // Ger meddelande när spelet är över
var startGameBtn = document.getElementById('startGameBtn'); // Knappen du startar spelet med
var letterButtons = document.querySelectorAll('#letterButtons > li > button');

startGameBtn.addEventListener('click', startGame);

function startGame() {
    reset();
    getRandomWord();
    addLetterListeners();
    getLetterBoxes();
    getImg();
}

function reset() {
    hangmanImgNr = 0;
    correctGuesses = 0;
    msgElem.textContent = '';
    if (letterButtons.length > 0) {
        letterButtons.forEach(function(letterButton) {
            letterButton.disabled = '';
        });
    }
}

function getRandomWord() {
    selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
}

function addLetterListeners() {
    for (var i = 0; i < letterButtons.length; i++){
      letterButtons[i].addEventListener('click', letterWasClicked);
    }
}  

function letterWasClicked() {
    
    const letterThatWasClicked = this.value;
    this.disabled = 'disabled';
    

    if (selectedWord.indexOf(letterThatWasClicked) !== -1) {
        
        for (var j = 0; j < selectedWord.length; j++) {
            
            if(letterThatWasClicked === selectedWord.charAt(j)) {
                
                 letterBoxes[j].value = letterThatWasClicked;
                 
                 correctGuesses++;
            }

        }
    } else {
        hangmanImgNr++;
        getImg();
    }
     
    if (hangmanImgNr === 6) {
       msgElem.innerHTML = 'Du försökte i alla fall :(';
    
        letterButtons.forEach(function(letterButton) {
            letterButton.disabled = 'disabled';
        });
    } 
    if (correctGuesses === selectedWord.length) {
        msgElem.innerHTML = 'Snyggt jobbat! Du löste ordet! :)';

        letterButtons.forEach(function(letterButton) {
            letterButton.disabled = 'disabled';
        });    
    }
}


function getLetterBoxes() {
        
    let box;
    
    box= '';
    
    for (var j = 0; j < selectedWord.length; j++) {
    
        box += '<input>&nbsp;</input>';
     
    }
    document.getElementById('letterBoxes').innerHTML = box;
    letterBoxes = document.getElementById('letterBoxes').getElementsByTagName('input');
}


function getImg() {

    hangmanImg.src='images/h' + hangmanImgNr + '.png';
}



// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd

// Initiering av globala variabler samt koppling av funktioner till knapparna.

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på