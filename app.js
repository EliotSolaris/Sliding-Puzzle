const gameBoard = document.querySelector("#game-board");
const startBtn = document.querySelector(".startBtn");
const welcome = document.querySelector(".welcome");
const gameSpace = document.querySelector(".gameSpace");

const gameState = [];
let gameTile
let setGame = []


const creatTiles = (row, column) => {
  for (let r = 0; r < row; ++r) {
    for (let c = 0; c < column; ++c) {
      gameTile = document.createElement("div");
      gameTile.classList.add("tile");
      gameTile.style["background-size"] = `${row * 100}px`;
      gameTile.innerText = `${r.toString()}` + "-" + `${c.toString()}`;

      gameTile.style.top = `${r * 100}px`;
      gameTile.style.left = `${c * 100}px`;

      gameTile.style["background-position-y"] = `-${r * 100}px`;
      gameTile.style["background-position-x"] = `-${c * 100}px`;
      
      let arr = Array.from(gameTile)
      gameState.push(gameTile);
      gameBoard.append(gameTile);
      
        
 
    }
  }
  gameBoard.style.width = `${row * 100}px`;
  gameBoard.style.height = `${column * 100}px`;
 

};
// -----------------START FROM SHUFFLED LOOK!!!!!!!!!!!!!!!!!!!!!!!!
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const listToMatrix =(list, elementsPerSubArray) => {
  let matrix = [], i, k;

  for (i = 0, k = -1; i < list.length; i++) {
      if (i % elementsPerSubArray === 0) {
          k++;
          matrix[k] = [];
      }

      matrix[k].push(list[i]);
  }

  return matrix;
}

const moveElement = (element1, element2) => {
  const tempTop = element1.style.top;
  const tempLeft = element1.style.left;

  element1.style.top = element2.style.top;
  element1.style.left = element2.style.left;

  element2.style.top = tempTop;
  element2.style.left = tempLeft;
};

const startBoard = () =>{
  // add board size options
 
  creatTiles(5,5)
  shuffleArray(gameState) 
  setGame = listToMatrix(gameState,5)
  console.log(setGame);
}

startBtn.addEventListener("click", () => {
  gameSpace.removeChild(welcome);
  gameBoard.style.visibility = "visible";
 startBoard()
});


gameBoard.addEventListener("click", (e) => {
  const target = e.target
  let tile = gameTile
  moveElement(target, tile)
    console.log("Come on! You can not move me!");
  // ----MAKE ONLY CLOSEST TILES MOVES ALOWED
    
  }
);
