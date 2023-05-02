const gameBoard = document.querySelector("#game-board");
const startBtn = document.querySelector(".startBtn");
const welcome = document.querySelector(".welcome");
const gameSpace = document.querySelector(".gameSpace");


let gameState =[]
// // ------------------------------------------
// function shuffle(array) {
//   let currentIndex = array.lentgh;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {
//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// }

// let newGame = gameState.flat(3);
// let shuffledGame = [];
// shuffledGame = shuffle(newGame);
// console.log(shuffledGame);
// // -----------------------------------------


const creatTiles = (row, column) => {
  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < column; ++j) {
      let gameTiles = document.createElement("div");
      gameTiles.classList.add("tile");
      gameTiles.style['background-size'] = `${row * 100}px`
      gameTiles.innerText = `${i.toString()}` + "-" + `${j.toString()}`;
      gameBoard.appendChild(gameTiles)

      gameTiles.style["background-position-y"] = `-${i * 100}px`;
      gameTiles.style["background-position-x"] = `-${j * 100}px`;

      gameBoard.appendChild(gameTiles);
     
    }
  }
   
  gameBoard.style.width = `${row * 100}px`
    gameBoard.style.height =`${column * 100}px`
      
};






// const render = (gameBoard, gameState) => {
//   gameState.forEach((row, rowIndex) => {
//     row.forEach((column, columnIndex) => {
//       column.style.top = `${rowIndex * 100}px`;
//       column.style.left = `${columnIndex * 100}px`;

//       column.style["background-position-y"] = `-${rowIndex * 100}px`;
//       column.style["background-position-x"] = `-${columnIndex * 100}px`;

//       gameBoard.appendChild(column);
//     });
//   });
// };

// COMEBACK TO ME!!!!!!!!!!!!!!!!!!
const moveElement = (element1, element2) => {
  const tempTop = element1.style.top;
  const tempLeft = element1.style.left;

  element1.style.top = element2.style.top;
  element1.style.left = element2.style.left;

  element2.style.top = tempTop;
  element2.style.left = tempLeft;
};

startBtn.addEventListener("click", () => {
  gameSpace.removeChild(welcome);
  gameBoard.style.visibility = "visible";
gameState = [creatTiles(5,5)]
  console.log(gameBoard);
});


gameBoard.addEventListener("click", (e) => {
  const target = e.target;

  let x, y;
 gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === target) {
        x = rowIndex;
        y = columnIndex;
      }
    });
  });

  let emptyX, emptyY;

  gameState.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.innerText === "") {
        emptyX = rowIndex;
        emptyY = columnIndex;
      }
    });
  });

  if (
    (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
    (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))
  ) {
    moveElement(gameState[x][y], gameState[emptyX][emptyY]);

    const temp = gameState[x][y];
    gameState[x][y] = gameState[emptyX][emptyY];
    gameState[emptyX][emptyY] = temp;
  } else {
    console.log("Come on! You can not move me!");
  }
});
