let btn = document.querySelectorAll('.box');
let rstBtn = document.querySelector('#reset');
let winnerDisplay = document.querySelector('#winner');

let turnO = true;
let gameOver = false;

const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const checkWinner = () => {
    for(let combo of winCombo){
        let pos1 = btn[combo[0]].innerText;
        let pos2 = btn[combo[1]].innerText;
        let pos3 = btn[combo[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if (pos1 === pos2 && pos2 === pos3){
                winnerDisplay.innerText = pos1 + " Won!";
                winnerDisplay.classList.remove('hidden');
                gameOver = true;
                btn.forEach(box => box.disabled = true);
            }
        }
    }
}

btn.forEach((box) => {
    box.addEventListener('click', () => {
        if (!gameOver) {
            if (turnO) {
                box.textContent = 'O';
                turnO = false;
            } else {
                box.textContent = 'X';
                turnO = true;
            }
            box.disabled = true;

            checkWinner();
        }
    });
});

const resetGame = () => {
    turnO = true;
    gameOver = false;
    winnerDisplay.classList.add('hidden');
    btn.forEach(box => {
        box.textContent = '';
        box.disabled = false;
    });
}

rstBtn.addEventListener('click', resetGame);