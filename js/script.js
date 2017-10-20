// Globala variabler

var wordList = ['björk', 'gröt', 'broms', 'yxa', 'monster', 'flagga'];
var selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
var letterBoxes; //Rutorna där bokstäverna ska stå
var hangmanImg; //Bild som kommer vid fel svar
var hangmanImgNr; // Vilken av bilderna som kommer upp beroende på hur många fel du gjort
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
    
    console.log(letterThatWasClicked);
}
addLetterListeners();


function getLetterBoxes() {
        
    let box;
    
    box= ""
    
    for (var j = 0; j < selectedWord.length; j++) {
    
        box += '<input>&nbsp;</input>';
      
    }
    document.getElementById('letterBoxes').innerHTML = box;
    letterBoxes = document.getElementById('letterBoxes').getElementsByTagName('input');
}
    console.log(getLetterBoxes);
    console.log(selectedWord);
getLetterBoxes();


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd

// Initiering av globala variabler samt koppling av funktioner till knapparna.

// Funktion som startar spelet vid knapptryckning, och då tillkallas andra funktioner

// Funktion som slumpar fram ett ord
 
// Funktionen som tar fram bokstävernas rutor, antal beror på vilket ord

// Funktion som körs när du trycker på bokstäverna och gissar bokstav

// Funktionen ropas vid vinst eller förlust, gör olika saker beroende av det

// Funktion som inaktiverar/aktiverar bokstavsknapparna beroende på vilken del av spelet du är på