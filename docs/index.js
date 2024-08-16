function player(marker) {
  this.marker = marker;
}

const playerOne = new player("X");
const playerTwo = new player("O");

const gameboard = () => {
  const board = Array(9).fill(null);

  const updateBoard = (index, player) => {
    if (index >= 0 && index < 9 && board[index] == null) {
      board[index] = player.marker;
    } else {
      console.log("jest problem");
    }
  }

  const getBoard = () => {
    return board;
  }

  const resetBoard = () => {
    board.fill(null);
  }

  return { updateBoard, getBoard, resetBoard, board};
}

const game = (gameboard) => {
  let round = 0;
  let gameActive = true;
  const fields = document.querySelectorAll(".area");

  fields.forEach((field,index) => {
    field.addEventListener("click", () => {
      if (gameActive === true && round < 9 && gameboard.board[index] == null) {
        if (round % 2 === 0) {
          gameboard.updateBoard(index, playerOne);
          field.textContent = "x";
        } else {
          gameboard.updateBoard(index, playerTwo);
          field.textContent = "o";
        }
        if (check(gameboard.board)) {
          console.log("game over");
          gameActive = false;
          endOfGame();
          return;
        }
        round++;
      }
    });
  });
}

function check(board) {
  console.log("check function");
  const winPosition = ['012', '345', '678', '036', '147', '258', '048', '642'];

  for (let win of winPosition) {
    const [a, b, c] = [win[0],win[1],win[2]].map(Number);
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      console.log("winning marker: "+board[a]);
      return true;
    }
  }
  return false;
}

function endOfGame() {
  console.log("zacznij nową gierkę");
}
let game1 = game(gameboard());
