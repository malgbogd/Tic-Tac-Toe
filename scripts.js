const createBoard = (()=> {

    const DOMboard = document.getElementById("board");

    let boardArray=[]
    
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
    const getMarker = () => marker
    return getMarker;
}
