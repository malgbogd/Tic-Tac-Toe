const createPlayers = (marker) => {
    this.marker=marker;

}

const playerX = createPlayers("X");
const playerO = createPlayers("O");

const createBoard = (()=> {

    const DOMboard = document.getElementById("board");
    
    for (let index = 0; index < 3; index++) {
    
        let row = document.createElement("div");
            
        for (let index = 0; index < 3; index++) {
              square = document.createElement("div");
              square.className = "square"
              square.id = "a" + index
              row.appendChild(square);
            }

        DOMboard.appendChild(row);      
    }
}
)();

const addPlayersNames = (()=>{

})();

const playTheGame = (()=> {

})();
