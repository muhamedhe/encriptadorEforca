function drawCanvas() {
    board.fillStyle = "#adf5ff";
    board.fillRect(0, 0, canvas.width, canvas.height);
    board.beginPath();
    board.stroke();
    board.closePath();
}

function drawUnderLines() {
    board.lineWidth = 6;
    board.lineCap = "round";
    board.lineJoin = "round";
    board.strokeStyle = "#000000";
    board.beginPath();
    let spread = 600 / hidenWord.length
    for (let i = 0; i < hidenWord.length; i++) {
        board.moveTo(500 + (spread * i), 640);
        board.lineTo(550 + (spread * i), 640);
    }
    board.stroke()
    board.closePath()
}

function drawRightLetter(index) {
    board.font = "bold 52px Inter";
    board.lineCap = "round";
    board.fillStyle = "#77047d";
    board.lineWidth = 6;
    let spread = 600 / hidenWord.length
    board.fillText(hidenWord[index], 505 + (spread * index), 620)

}

function drawWrongLetter(letter, errorWalk) {
    board.font = "bold 40px Inter";
    board.lineCap = "round";
    board.fillStyle = "#691F1F";
    board.lineWidth = 6;
    board.fillText(letter, 520 + (40 * (10 - errorWalk)), 720, 40);
    drawPeople();
}

function drawPeople() {
    board.beginPath();

    switch (erros) {
        case 1:
            //Cabeça
            board.arc(300, 200, 50, 0, 2 * Math.PI)
            break;
        case 2:
            //Tronco
            board.moveTo(300, 260);
            board.lineTo(300, 350);
            break;
        case 3:
            //Mão esquerda
            board.moveTo(295, 280);
            board.lineTo(245, 260);
            break;
        case 4:
            //Mão direita
            board.moveTo(305, 280);
            board.lineTo(365, 260);
            break;
        case 5:
            //Pé esquerdo
            board.moveTo(295, 350);
            board.lineTo(250, 390);
            break;
        case 6:
            //Pé direito
            board.moveTo(305, 350);
            board.lineTo(355, 390);
            break;
    }

    board.stroke()
    board.closePath()
}