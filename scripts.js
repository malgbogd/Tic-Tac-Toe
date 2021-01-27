let boardArray=[]

const createBoard = (()=> {

    const DOMboard = document.getElementById("board");
    
    for (let index = 0; index < 3; index++) {
    
        let row = document.createElement("div");
            
        for (let index = 0; index < 3; index++) {
              square = document.createElement("div");
              square.className = "square"
              boardArray[boardArray.length] = square;
              row.appendChild(square);
            }

        DOMboard.appendChild(row);      
    }
    console.log(boardArray);
    return boardArray;
}
)();

const nameButtons = (()=> {

function getXName() {
    nameX = prompt("What is player X name?")
    if (nameX.length == 0) {
        buttonName1.innerHTML = "Name"
    } else {
        buttonName1.innerHTML = nameX
    }
}
    
const buttonName1 = document.getElementById("playerX")
buttonName1.addEventListener("click", () => getXName());

function getOName() {

    const playerX = createBoard

    nameO = prompt("What is player O name?")
    if (nameO.length == 0) {
        buttonName2.innerHTML = "Name"
    } else {
        buttonName2.innerHTML = nameO
    }
}

const buttonName2 = document.getElementById("playerO")
buttonName2.addEventListener("click", () => getOName());

})();

const Player = (marker) => {
    let myMarker = marker
    
    return {myMarker};
}

const playerX = Player("X");
const playerO = Player("O");
let currentPlayer = playerX  

const playGame = (() => {  
    
    boardArray.forEach(element => { element.addEventListener("click", () =>{
        element.innerHTML = String(currentPlayer.myMarker);
        if (String(currentPlayer.myMarker)==="X") {
            currentPlayer = playerO;
            document.getElementById("turn").innerHTML = "Player O turn!";
        } else {
            currentPlayer = playerX;
            document.getElementById("turn").innerHTML = "Player X turn!";
        }
        })


        
        
    });
})();

const newGame = (()=> {
    let nwGmBtn = document.getElementById("newGame");
    nwGmBtn.addEventListener("click", () => {boardArray.forEach(element => {element.innerHTML =""
    currentPlayer = playerX;
            document.getElementById("turn").innerHTML = "Player X turn!";
})});
})();