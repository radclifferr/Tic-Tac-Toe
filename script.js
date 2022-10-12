const gridBox = document.querySelector(".grid-box");
const xChoice = document.getElementById("x");
const oChoice = document.getElementById("o");

JSON.stringify
function getPlayerChoice () {
    xChoice.addEventListener("click", () => {
        storePlayerChoice("X")
        returnPlayerChoices("X")
    });
    oChoice.addEventListener("click", () => {
        storePlayerChoice("O")
        returnPlayerChoices("O")
    });
}
getPlayerChoice();

function returnPlayerChoices (playerOneChoice) {
    const playerTwoChoiceReturn = document.querySelector(".player-two-choice");
    const playerOneChoiceReturn = document.querySelector(".player-one-choice");

    if (playerOneChoice === "X") {
        playerOneChoiceReturn.textContent = "You Chose X!"
        playerTwoChoiceReturn.textContent = "Player Two Choice Is Then O!"
    }else {
        playerOneChoiceReturn.textContent = "You Chose O!"
        playerTwoChoiceReturn.textContent = "Player Two Choice Is Then X!"
    }   
}

function storePlayerChoice (playerOneChoice){
    // console.log(playerOneChoice)
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

displayBoard = function() {
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
                markArray(row.dataset.index.split(","))
            })

        }
    }
}

displayBoard()
let playerTurn="player1";
function markArray(dataIndex, playerTurn) {
    console.log(dataIndex)
    if (playerTurn === "player1") {
        gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "X"
        console.log(gameBoardDataArray)
    }else {
        gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "O"

        displayBoard()
        console.log(gameBoardDataArray)
    }
}






// // (function (){
// //     let boardSize = 3;
// //     this.playerTurn = "player1"
// //     cacheDom = function () {
// //         this.
// //     }

// //     }


     

//     // function markGameBoardDisplay (row,i,j) {
//     //     row.textContent = board[i][j]
//     //     this.row = document.querySelectorAll (".row")
//     //     for (let i = 0; i<row.length; i++){
//     //         for(let j= 0; j<this.row.length; i++){
//     //             this.row.textContent = board[i][j]
//     // }
//     // cacheDom()
//     // board = makeBoardGridValues()
//     // displayBoard(board)


