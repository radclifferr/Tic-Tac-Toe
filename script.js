const gridBox = document.querySelector(".grid-box");
const userAlert = document.querySelector(".alert");
const xChoice = document.getElementById("x");
const oChoice = document.getElementById("o");
const resetButton = document.getElementById("reset");
const playerTwoChoiceReturn = document.querySelector(".player-two-choice");
const playerOneChoiceReturn = document.querySelector(".player-one-choice");

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
let gameBoardDataArray = new CreateGridArray().make()

function getPlayerChoice () {
    xChoice.addEventListener("click", () => {
        userAlert.textContent =""
        displayPlayerChoices("X")
        displayBoard("X")
    });
    oChoice.addEventListener("click", () => {
        userAlert.textContent =""
        displayPlayerChoices("O")
        displayBoard("O")
    });
}
getPlayerChoice();

function displayPlayerChoices (playerOneChoice) {
    if (playerOneChoice === "X") {
        playerOneChoiceReturn.textContent = "You Chose X!";
        playerTwoChoiceReturn.textContent = "Player Two Is O!";
        userAlert.textContent = "Player one goes first! Pick a square!"
    }else {
        playerOneChoiceReturn.textContent = "You Chose O!";
        playerTwoChoiceReturn.textContent = "Player Two Is X!";
        userAlert.textContent = "Player one goes first! Pick a square!"
    }   
}

function displayBoard (currentTurn) {
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
}

function checkWinner (a, playerTurn) {
}


        // if (a[0][0] === "X" && a[1][0] === "X" && a[2][0] === "X"){
        //     console.log("Hi")
        // }else if(a[0][1] === "X" && a[1][1] === "X" && a[2][1] === "X"){
        //     console.log("Hi")
        // }else if(a[0][2] === "X" && a[1][2] === "X" && a[2][2] === "X"){
        //     console.log("Hi")
        // }else if(a[0][0] === "X" && a[0][1] === "X" && a[0][2] === "X"){
        //     console.log("Hi")
        // }else if(a[1][0] === "X" && a[1][1] === "X" && a[1][2] === "X"){
        //     console.log("Hi")
        // }else if(a[2][0] === "X" && a[2][1] === "X" && a[2][2] === "X"){
        //     console.log("Hi")


//         }else if(a[0][0] === "X" && a[1][1] === "X" && a[2][2] === "X"){
//             console.log("Hi")
//         }else if(a[0][2] === "X" && a[1][1] === "X" && a[2][0] === "X"){
//             console.log("Hi")
//         }
//     }

// }






function resetGame () {
    resetButton.addEventListener("click", () => {
        playerOneChoiceReturn.textContent = "";
        playerTwoChoiceReturn.textContent = "";
        userAlert.textContent = ""
        getPlayerChoice()
        gameBoardDataArray = new CreateGridArray().make()
        displayBoard()
        turnArr= [];
    })
}
resetGame()


