// Globala variabler

var wordList = ['BJÖRK', 'GRÖT', 'BROMS', 'YXA', 'MOSTER', 'FLAGGA'];
var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
var letterBoxes; //Rutorna där bokstäverna ska stå
var hangmanImg = document.getElementById('hangman');  //Bild som kommer vid fel svar
var hangmanImgNr = 0;
var msgElem; // Ger meddelande när spelet är över
var startGameBtn = document.getElementById('startGameBtn'); // Knappen du startar spelet med
var letterButtons = document.querySelectorAll('#letterButtons > li > button');
var startTime; // Mäter tiden


function addLetterListeners() {

    for (var i = 0; i < letterButtons.length; i++){

      letterButtons[i].addEventListener('click', letterWasClicked);
    }
}  
    

function letterWasClicked() {
    
    const letterThatWasClicked = this.value;
    this.disabled = true;
    

    if (selectedWord.indexOf(letterThatWasClicked) !== -1) {
        
        for (var j = 0; j < selectedWord.length; j++) {
            
            if(letterThatWasClicked === selectedWord[j]) {
                
                 letterBoxes[j].textContent = letterThatWasClicked;
                
            }

         }
    } else {
        hangmanImgNr++;
        getImg();
    }

}
addLetterListeners();
letterWasClicked();


function getLetterBoxes() {
        
    let box;
    
    box= '';
    
    for (var j = 0; j < selectedWord.length; j++) {
    
        box += '<input>&nbsp;</input>';
     
    }
    document.getElementById('letterBoxes').innerHTML = box;
    letterBoxes = document.getElementById('letterBoxes').getElementsByTagName('input');
}
getLetterBoxes();


function getImg() {

    hangmanImg.src='images/h' + hangmanImgNr + '.png';
}
getImg();


// function message() {
    
//       document.getElementById('message');
    
//     if (/* Ord löst */) {

//       return 'Snyggt jobbat, du löste ordet!';

//     } else (/* Olöst ord */) {

//       return 'Du försökte i alla fall :('

//     }
//   }


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd

// Initiering av globala variabler samt koppling av funktioner till knapparna.

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på