const gridBox = document.querySelector(".grid-box");
const warning = document.querySelector(".warning");
const xChoice = document.getElementById("x");
const oChoice = document.getElementById("o");


function getPlayerChoice () {
    xChoice.addEventListener("click", () => {
        warning.textContent =""
        displayPlayerChoices("X")
        displayBoard("X")
    });
    oChoice.addEventListener("click", () => {
        warning.textContent =""
        displayPlayerChoices("O")
        displayBoard("O")
    });
}
getPlayerChoice();



function displayPlayerChoices (playerOneChoice) {
    const playerTwoChoiceReturn = document.querySelector(".player-two-choice");
    const playerOneChoiceReturn = document.querySelector(".player-one-choice");
    if (playerOneChoice === "X") {
        playerOneChoiceReturn.textContent = "You Chose X!";
        playerTwoChoiceReturn.textContent = "Player Two Choice Is Then O!";
    }else {
        playerOneChoiceReturn.textContent = "You Chose O!";
        playerTwoChoiceReturn.textContent = "Player Two Choice Is Then X!";
    }   
}

function CreateGridArray () {
    this.boardSize = 3,
    this.board = [],
    this.make = function () {
        for (let i = 0; i<this.boardSize; i++){
            this.board[i] = [];
            for (let j = 0; j<this.boardSize; j++){
                this.board[i][j] = null;
            }
        }
        return this.board;
    }
}

const gameBoardDataArray = new CreateGridArray().make()

displayBoard = function(currentTurn) {
    gridBox.replaceChildren();
    for (let i = 0; i<gameBoardDataArray.length; i++){
        const column = document.createElement("div");
        column.classList.add("column");
        gridBox.appendChild(column);
        for (let j = 0; j<gameBoardDataArray.length; j++){
            const row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
            row.textContent = gameBoardDataArray[j][i]
            row.dataset.index = `${j},${i}`
            row.addEventListener("click", () => {
                markArray(row.dataset.index.split(","), currentTurn)
            })

        }
    }
}

displayBoard()
function markArray(dataIndex, playerTurn) {
    if (playerTurn === "X") {
        gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "X"
        displayBoard("O")

    }else if (playerTurn=== "O") {
        gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "O"
        displayBoard("X")
    }else {
        warning.textContent = "Nice try but you need to pick a side first!!"
    }
}




