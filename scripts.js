let boardArray=[]

const createBoard = (()=> {

    const DOMboard = document.getElementById("board");
    
    for (let index = 0; index < 3; index++) {
    
        let row = document.createElement("div");
            
        for (let index = 0; index < 3; index++) {
              square = document.createElement("button");
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
            element.disabled = true;
    
            // Player X winning terms
        if ( "X"==boardArray[0].innerHTML && "X"==boardArray[1].innerHTML && "X"== boardArray[2].innerHTML || 
        "X"==boardArray[0].innerHTML && "X"== boardArray[4].innerHTML && "X"== boardArray[8].innerHTML ||
        "X"==boardArray[0].innerHTML && "X"== boardArray[3].innerHTML && "X"== boardArray[6].innerHTML ||
        "X"==boardArray[3].innerHTML && "X"== boardArray[4].innerHTML && "X"== boardArray[5].innerHTML ||
        "X"==boardArray[6].innerHTML && "X"== boardArray[7].innerHTML && "X" == boardArray[8].innerHTML ||
        "X"==boardArray[6].innerHTML && "X"== boardArray[4].innerHTML && "X"== boardArray[2].innerHTML ||
        "X"==boardArray[1].innerHTML && "X"== boardArray[4].innerHTML && "X"== boardArray[7].innerHTML ||
        "X"==boardArray[2].innerHTML && "X"== boardArray[5].innerHTML && "X" == boardArray[8].innerHTML ) {
           alert("Player X won!")
           document.getElementById("turn").innerHTML = "Player X won!";
           boardArray.forEach(button => {button.disabled = true});
       } 
        // Player O winning terms
        else if ( "O"==boardArray[0].innerHTML && "O"==boardArray[1].innerHTML && "O"== boardArray[2].innerHTML || 
            "O"==boardArray[0].innerHTML && "O"== boardArray[4].innerHTML && "O"== boardArray[8].innerHTML ||
            "O"==boardArray[0].innerHTML && "O"== boardArray[3].innerHTML && "O"== boardArray[6].innerHTML ||
            "O"==boardArray[3].innerHTML && "O"== boardArray[4].innerHTML && "O"== boardArray[5].innerHTML ||
            "O"==boardArray[6].innerHTML && "O"== boardArray[7].innerHTML && "O" == boardArray[8].innerHTML ||
            "O"==boardArray[6].innerHTML && "O"== boardArray[4].innerHTML && "O"== boardArray[2].innerHTML ||
            "O"==boardArray[1].innerHTML && "O"== boardArray[4].innerHTML && "O"== boardArray[7].innerHTML ||
            "O"==boardArray[2].innerHTML && "O"== boardArray[5].innerHTML && "O" == boardArray[8].innerHTML ) {
            alert("Player O won!")
            document.getElementById("turn").innerHTML = "Player O won!";
            boardArray.forEach(button => {button.disabled = true});
       }
       // tie terms
       else if ( boardArray[0].innerHTML !== "" &&
            boardArray[1].innerHTML !== "" &&
            boardArray[2].innerHTML !== "" &&
            boardArray[3].innerHTML !== "" &&
            boardArray[4].innerHTML !== "" &&
            boardArray[5].innerHTML !== "" &&
            boardArray[6].innerHTML !== "" &&
            boardArray[7].innerHTML !== "" &&
            boardArray[8].innerHTML !== "" ){
            alert("It is a tie!")
            document.getElementById("turn").innerHTML = "It is a tie!";
            }     
        })      
    });
})();

const newGame = (()=> {
    let nwGmBtn = document.getElementById("newGame");
    nwGmBtn.addEventListener("click", () => {boardArray.forEach(element => {
        element.disabled = false;
        element.innerHTML =""
        currentPlayer = playerX;
        document.getElementById("turn").innerHTML = "Player X turn!";
})});
})();