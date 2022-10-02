(function (){
    let boardSize = 3,
    cacheDom: function () {
        this.gridBox = document.querySelector(".gridBox");

    },
    makeBoard: function() {
        for (let i = 0; i<boardSize; i++){
            const column = document.createElement("div");
            column.classList.add("column");
            this.gridBox.appendChild(column);
            for (let j = 0; j <boardSize; j++){
                const row = document.createElement("div");
                row.classList.add("row");
                column.appendChild(row);
            }

        }
    },


})()