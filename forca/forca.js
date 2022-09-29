var words = ["CHAVE", "LOCO", "BEBE", "BIXO"];
var canvas;
var board;
var hidenWord = "";
var letter = [];
var errorWalk = 20;
var erros = 0;


function sortWords() {
    let word = words[Math.floor(Math.random() * words.length)]
    hidenWord = word;
    console.log(word);
    return word;
}

//ver se é uma letter
function letterCheck(key) {
    let status = false
    if (key >= 65 && letter.indexOf(key) || key <= 90 && letter.indexOf(key)) {
        letter.push(key);
        return status;
    } else {
        status = true;
        letter.push(key);
        return status;
    }
}

function fitToContainer(canvas) {
    canvas.style.width = '1200px';
    canvas.style.height = '750px';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function start() {
    canvas = document.querySelector('canvas');
    canvas.addEventListener('click', function (event) {
        var rect = canvas.getBoundingClientRect();
        console.log('X: ' + (event.pageX - rect.left) + ' Y: ' + (event.pageY - 215));
    });
    board = document.getElementById("forca").getContext("2d");

    fitToContainer(canvas);
    sortWords();
    drawCanvas();
    drawUnderLines();

    //Capturar tecla
    document.onkeydown = (e) => {
        let letter = e.key.toUpperCase()
        //Se letra correta
        if (letterCheck(letter) && hidenWord.includes(letter)) {
            for (let i = 0; i < hidenWord.length; i++) {
                if (hidenWord[i] === letter) {
                    drawRightLetter(i);
                }
            }
        } else {
            //Caso errada
            erros++;
            if (erros >= 6) {
                alert("YOU LOSE. Reinicie a página para começar com uma nova palavra.");
            }
            //Contar erros
            errorWalk -= 1;
            drawWrongLetter(letter, errorWalk);
        }

    }
}