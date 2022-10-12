function getPlayerChoice () {
    const xChoice = document.getElementById("x");
    const oChoice = document.getElementById("o");
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
    console.log(playerOneChoice)
}


































// function MakeBoardDataArray() {
//     this.boardSize = 3,
//     this.board = [],
//     this.make = function () {
//         for (let i = 0; i<this.boardSize; i++){
//             this.board[i] = [];
//             for (let j = 0; j<this.boardSize; j++){
//                 this.board[i][j] = null
//             }
//         }
//         return this.board;
//     }
// }
// const gameBoardDataArray = new MakeBoardDataArray()






// function playerCreator(name, side) {
//     let score = 0;
//     const getName = () => name;
//     const winRound = () => {
//         return score ++;
//     }

//     return {
//         talk () {
//             return `Welcome to the ARENA ${name}, you chose ${side}`
//         }, winRound, score
//     } 
// }
// const player1 = playerCreator("Richard", "X");
// const player2 = playerCreator("Cami", "O");














// // (function (){
// //     let boardSize = 3;
// //     this.playerTurn = "player1"
// //     cacheDom = function () {
// //         this.gridBox = document.querySelector(".gridBox");
// //     }

// //     }
// //     displayBoard = function(board) {
// //         for (let i = 0; i<board.length; i++){
// //             const column = document.createElement("div");
// //             column.classList.add("column");
// //             this.gridBox.appendChild(column);
// //             for (let j = 0; j<board.length; j++){
// //                 const row = document.createElement("div");
// //                 row.classList.add("row");
// //                 column.appendChild(row);




//                 // row.textContent = board[i][j]
//                 // row.dataset.index = `${i},${j}`
//                 // row.addEventListener("click", () => {
//                 //     markArray(row.dataset.index.split(","))
//                 //     markGameBoardDisplay(row,i,j)
//                 // })

     
//     // function markArray(datasetIndex) {
//     //     if (this.playerTurn === "player1") {
//     //         board[datasetIndex[0]][datasetIndex[1]] = "X"
//     //     }else {
//     //         board[datasetIndex[0]][datasetIndex[1]] = "O"
//     //     }
//     // }
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


