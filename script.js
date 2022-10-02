(function (){
    let boardSize = 3;
    cacheDom = function () {
        this.gridBox = document.querySelector(".gridBox");
    }
    makeBoardGridValues = function() {
        let board = [];
        for (let i = 0; i<boardSize; i++){
            board[i] = [];
            for (let j = 0; j<boardSize; j++){
                board[i][j] = null
            }
        }
        return board;
    }
    displayBoard = function(board) {
        for (let i = 0; i<board.length; i++){
            const column = document.createElement("div");
            column.classList.add("column");
            this.gridBox.appendChild(column);
            for (let j = 0; j<board.length; j++){
                const row = document.createElement("div");
                row.classList.add("row");
                row.textContent = board[i][j]
                row.addEventListener("click", markBoard)
                column.appendChild(row);
            }
        }
    }
    function markBoard() {
        console.log("Hi")

    }



    cacheDom()
    board = makeBoardGridValues()
    displayBoard(board)
})()

