const gameBoard = document.querySelector("#game-board");
const startBtn = document.querySelector(".startBtn");
const welcome = document.querySelector(".welcome");
const gameSpace = document.querySelector(".gameSpace");

const gameState = [];
let gameTile;
let setGame = [];

const creatTiles = (row, column) => {
  let i = 0;
  for (let r = 0; r < row; ++r) {
    for (let c = 0; c < column; ++c) {
      gameTile = document.createElement("div");
      gameTile.classList.add("tile");
      gameTile.style["background-size"] = `${row * 100}px`;
      gameTile.innerText = i++;

      gameTile.style.top = `${r * 100}px`;
      gameTile.style.left = `${c * 100}px`;

      gameTile.style["background-position-y"] = `-${r * 100}px`;
      gameTile.style["background-position-x"] = `-${c * 100}px`;

      gameState.push(gameTile);
      gameBoard.append(gameTile);
    }
  }
  gameBoard.style.width = `${row * 100}px`;
  gameBoard.style.height = `${column * 100}px`;
};
// -----------------START FROM SHUFFLED LOOK!!!!!!!!!!!!!!!!!!!!!!!!
// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
// };

const listToMatrix = (list, elementsPerSubArray) => {
  let matrix = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
};

const moveElement = (element1, element2) => {
  const tempTop = element1.style.top;
  const tempLeft = element1.style.left;

  element1.style.top = element2.style.top;
  element1.style.left = element2.style.left;

  element2.style.top = tempTop;
  element2.style.left = tempLeft;
};

const startBoard = () => {
  // add board size options

  creatTiles(5, 5);
  setGame = listToMatrix(gameState, 5);
};

startBtn.addEventListener("click", () => {
  gameSpace.removeChild(welcome);
  gameBoard.style.visibility = "visible";
  startBoard();
});

// gameBoard.addEventListener("click", (e) => {
//   const target = e.target;
//   let tile = gameTile
//   let x = gameTile.style.top;
//   let y = gameTile.style.left;

// console.log(target);

//  gameState.forEach((row, rowIndex) => {
//     setGame.forEach((column, columnIndex) => {
//       if (column === target) {
//       x = rowIndex;
//       y = columnIndex;
//     }
//     });
//   });

// if (
//   (column === column && (row + 1 === row || row - 1 === row)) ||
//   (row === row && (column + 1 === column || column - 1 === column))
// ) {
//   moveElement(target, tile);
//   const temp = setGame[row][column];
//   setGame[row][column] = setGame[row][column];
//   setGame[row][column] = temp;
// } else {
//   console.log("Come on! You can not move me!");
// }
// });
gameBoard.addEventListener("click", (e) => {
  const target = e.target;

  let x, y;
  setGame.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column === target) {
        x = rowIndex;
        y = columnIndex;
      }
    });
  });
  console.log(x, y);
  let emptyX, emptyY;

  setGame.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      if (column.innerText === `24`) {
        emptyX = rowIndex;
        emptyY = columnIndex;
      }
    });
  });

  console.log(emptyX, emptyY);

  if (
    (y === emptyY && (x + 1 === emptyX || x - 1 === emptyX)) ||
    (x === emptyX && (y + 1 === emptyY || y - 1 === emptyY))
  ) {
    moveElement(setGame[x][y], setGame[emptyX][emptyY]);

    const temp = setGame[x][y];
    setGame[x][y] = setGame[emptyX][emptyY];
    setGame[emptyX][emptyY] = temp;
  } else {
    console.log("Come on! You can not move me!");
  }
});
