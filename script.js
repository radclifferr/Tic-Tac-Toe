(function() {
    function cacheDom () {
        this.turnArr=[]
        this.gridBox = document.querySelector(".grid-box");
        this.userAlert = document.querySelector(".alert");
        this.xChoice = document.getElementById("x");
        this.oChoice = document.getElementById("o");
        this.resetButton = document.querySelectorAll(".reset");
        this.playerTwoChoiceReturn = document.querySelector(".player-two-choice");
        this.playerOneChoiceReturn = document.querySelector(".player-one-choice");
        this.winnerModal = document.querySelector(".modal");
        this.winnerText = document.querySelector(".winner-text");
    };
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
    };
    function getPlayerChoice () {
        this.xChoice.addEventListener("click", () => {
            this.userAlert.textContent =""
            displayPlayerChoices("X")
            displayBoard("X")
        });
        this.oChoice.addEventListener("click", () => {
            this.userAlert.textContent =""
            displayPlayerChoices("O")
            displayBoard("O")
        });
    };
    function resetGameButton () {
        this.resetButton.forEach(button =>
            button.addEventListener("click", () => {
                winnerModal.classList.remove("winner-modal");
                playerOneChoiceReturn.textContent = "";
                playerTwoChoiceReturn.textContent = "";
                userAlert.textContent = ""
                getPlayerChoice()
                gameBoardDataArray = new CreateGridArray().make()
                displayBoard()
                turnArr= [];
            }));
    };
    
    function displayPlayerChoices (playerOneChoice) {
        if (playerOneChoice === "X") {
            this.playerOneChoiceReturn.textContent = "You Chose X!";
            this.playerTwoChoiceReturn.textContent = "Player Two Is O!";
            this.userAlert.textContent = "Player one goes first! Pick a square!"
        }else {
            this.playerOneChoiceReturn.textContent = "You Chose O!";
            this.playerTwoChoiceReturn.textContent = "Player Two Is X!";
            this.userAlert.textContent = "Player one goes first! Pick a square!"
        }   
    };
    function displayBoard (currentTurn) {
        this.gridBox.replaceChildren();
        for (let i = 0; i<gameBoardDataArray.length; i++){
            const column = document.createElement("div");
            column.classList.add("column");
            this.gridBox.appendChild(column);
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
    };
    function markArray(dataIndex, playerTurn) {
        if (gameBoardDataArray[dataIndex[0]][dataIndex[1]] != null) {
            userAlert.textContent = "Pick a spot that is empty bucko!!"
        }else {
            if (playerTurn === "X") {
                gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "X"
                displayBoard("O")
                checkWinner(gameBoardDataArray, playerTurn)
                userAlert.textContent = "Now its the other Players Turn, pick a square for O"
        
            }else if (playerTurn=== "O") {
                gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "O"
                displayBoard("X")
                checkWinner(gameBoardDataArray, playerTurn)
                userAlert.textContent = "Now its the other Players Turn, pick a square for X"
            }else {
                userAlert.textContent = "Nice try but you need to pick a side first!!"
            }
        }
    };
    function checkWinner (g, playerTurn) {
        g = g.flat();
        turnArr.push(playerTurn)
        if (turnArr[0] === "X"){
            for (let i=0; i < g.length ; i++){
                if (g[i] === "X"){
                    g[i] = 1;
                }if (g[i] ==="O"){
                    g[i] = 4;
                } 
            }
        }else if (turnArr[0] === "O"){
            for (let i=0; i < g.length ; i++){
                if (g[i] === "X"){
                    g[i] = 4;
                }if (g[i] ==="O"){
                    g[i] = 1;
                } 
            }
        }
        //Vertical Winning
        if (g[0] + g[3] + g[6] === 3 || g[1] + g[4] + g[7] === 3 || g[2] + g[5] + g[8] === 3) {
            alertWinner("Player 1")
        }else if (g[0] + g[3] + g[6] === 12 || g[1] + g[4] + g[7] === 12 || g[2] + g[5] + g[8] === 12){
            alertWinner("Player 2")
        //Horizontal Winning
        }if (g[0] + g[1] + g[2] === 3 || g[3] + g[4] + g[5] === 3 || g[6] + g[7] + g[8] === 3) {
            alertWinner("Player 1")
        }else if (g[0] + g[1] + g[2] === 12 || g[3] + g[4] + g[5] === 12 || g[6] + g[7] + g[8] === 12){
            alertWinner("Player 2")
        //Lateral Winning
        }if (g[0] + g[4] + g[8] === 3 || g[2] + g[4] + g[6] === 3) {
            alertWinner("Player 1")
        }else if (g[0] + g[4] + g[8] === 12 || g[2] + g[4] + g[6] === 12){
            alertWinner("Player 2")
        }else if (tieGame(g) === 21) {
            alertWinner("Tie Game")
        }
    };
    function tieGame(array) {
        let arraySum = 0;
        for(let i=0; i < array.length; i++){
            arraySum += array[i];
        }
        return arraySum;
    }
    
    function alertWinner(winner) {
        this.winnerModal.classList.add("winner-modal");
        if(winner === "Player 1" || winner === "Player 2"){
            this.winnerText.textContent = `${winner} won the game! Right On!`;
        }else {
            this.winnerText.textContent = `${winner}`
        }
        
    }
    cacheDom();
    let gameBoardDataArray = new CreateGridArray().make()
    getPlayerChoice();
    displayBoard();
    resetGameButton();
})();









// const gridBox = document.querySelector(".grid-box");
// const userAlert = document.querySelector(".alert");
// const xChoice = document.getElementById("x");
// const oChoice = document.getElementById("o");
// const resetButton = document.querySelectorAll(".reset");
// const playerTwoChoiceReturn = document.querySelector(".player-two-choice");
// const playerOneChoiceReturn = document.querySelector(".player-one-choice");
// const winnerModal = document.querySelector(".modal");
// const winnerText = document.querySelector(".winner-text");
// let turnArr=[]


// function CreateGridArray () {
//     this.boardSize = 3,
//     this.board = [],
//     this.make = function () {
//         for (let i = 0; i<this.boardSize; i++){
//             this.board[i] = [];
//             for (let j = 0; j<this.boardSize; j++){
//                 this.board[i][j] = null;
//             }
//         }
//         return this.board;
//     }
// }
// let gameBoardDataArray = new CreateGridArray().make()

// function getPlayerChoice () {
//     xChoice.addEventListener("click", () => {
//         userAlert.textContent =""
//         displayPlayerChoices("X")
//         displayBoard("X")
//     });
//     oChoice.addEventListener("click", () => {
//         userAlert.textContent =""
//         displayPlayerChoices("O")
//         displayBoard("O")
//     });
// }
// getPlayerChoice();

// function displayPlayerChoices (playerOneChoice) {
//     if (playerOneChoice === "X") {
//         playerOneChoiceReturn.textContent = "You Chose X!";
//         playerTwoChoiceReturn.textContent = "Player Two Is O!";
//         userAlert.textContent = "Player one goes first! Pick a square!"
//     }else {
//         playerOneChoiceReturn.textContent = "You Chose O!";
//         playerTwoChoiceReturn.textContent = "Player Two Is X!";
//         userAlert.textContent = "Player one goes first! Pick a square!"
//     }   
// }

// function displayBoard (currentTurn) {
//     gridBox.replaceChildren();
//     for (let i = 0; i<gameBoardDataArray.length; i++){
//         const column = document.createElement("div");
//         column.classList.add("column");
//         gridBox.appendChild(column);
//         for (let j = 0; j<gameBoardDataArray.length; j++){
//             const row = document.createElement("div");
//             row.classList.add("row");
//             column.appendChild(row);
//             row.textContent = gameBoardDataArray[j][i]
//             row.dataset.index = `${j},${i}`
//             row.addEventListener("click", () => {
//                 markArray(row.dataset.index.split(","), currentTurn)
//             })
//         }
//     }
// }
// displayBoard()

// function markArray(dataIndex, playerTurn) {
//     if (gameBoardDataArray[dataIndex[0]][dataIndex[1]] != null) {
//         userAlert.textContent = "Pick a spot that is empty bucko!!"
//     }else {
//         if (playerTurn === "X") {
//             gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "X"
//             displayBoard("O")
//             checkWinner(gameBoardDataArray, playerTurn)
//             userAlert.textContent = "Now its the other Players Turn, pick a square for O"
    
//         }else if (playerTurn=== "O") {
//             gameBoardDataArray[dataIndex[0]][dataIndex[1]] = "O"
//             displayBoard("X")
//             checkWinner(gameBoardDataArray, playerTurn)
//             userAlert.textContent = "Now its the other Players Turn, pick a square for X"
//         }else {
//             userAlert.textContent = "Nice try but you need to pick a side first!!"
//         }
//     }
// }

// function checkWinner (g, playerTurn) {
//     g = g.flat();
//     turnArr.push(playerTurn)
//     if (turnArr[0] === "X"){
//         for (let i=0; i < g.length ; i++){
//             if (g[i] === "X"){
//                 g[i] = 1;
//             }if (g[i] ==="O"){
//                 g[i] = 4;
//             } 
//         }
//     }else if (turnArr[0] === "O"){
//         for (let i=0; i < g.length ; i++){
//             if (g[i] === "X"){
//                 g[i] = 4;
//             }if (g[i] ==="O"){
//                 g[i] = 1;
//             } 
//         }
//     }
//     //Vertical Winning
//     if (g[0] + g[3] + g[6] === 3 || g[1] + g[4] + g[7] === 3 || g[2] + g[5] + g[8] === 3) {
//         alertWinner("Player 1")
//     }else if (g[0] + g[3] + g[6] === 12 || g[1] + g[4] + g[7] === 12 || g[2] + g[5] + g[8] === 12){
//         alertWinner("Player 2")
//     //Horizontal Winning
//     }if (g[0] + g[1] + g[2] === 3 || g[3] + g[4] + g[5] === 3 || g[6] + g[7] + g[8] === 3) {
//         alertWinner("Player 1")
//     }else if (g[0] + g[1] + g[2] === 12 || g[3] + g[4] + g[5] === 12 || g[6] + g[7] + g[8] === 12){
//         alertWinner("Player 2")
//     //Lateral Winning
//     }if (g[0] + g[4] + g[8] === 3 || g[2] + g[4] + g[6] === 3) {
//         alertWinner("Player 1")
//     }else if (g[0] + g[4] + g[8] === 12 || g[2] + g[4] + g[6] === 12){
//         alertWinner("Player 2")
//     }else if (tieGame(g) === 21) {
//         alertWinner("Tie Game")
//     }
// }
// function resetGameButton () {
//     resetButton.forEach(button =>
//         button.addEventListener("click", () => {
//             winnerModal.classList.remove("winner-modal");
//             playerOneChoiceReturn.textContent = "";
//             playerTwoChoiceReturn.textContent = "";
//             userAlert.textContent = ""
//             getPlayerChoice()
//             gameBoardDataArray = new CreateGridArray().make()
//             displayBoard()
//             turnArr= [];
//         }));
// }
// resetGameButton()


// function tieGame(array) {
//     let arraySum = 0;
//     for(let i=0; i < array.length; i++){
//         arraySum += array[i];
//     }
//     return arraySum;
// }

// function alertWinner(winner) {
//     winnerModal.classList.add("winner-modal");
//     if(winner === "Player 1" || winner === "Player 2"){
//         winnerText.textContent = `${winner} won the game! Right On!`;
//     }else {
//         winnerText.textContent = `${winner}`
//     }
    
// }
