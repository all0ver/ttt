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

  return { updateBoard, getBoard, resetBoard, board };
}

const info = document.querySelector(".info");
const restart = document.querySelector(".restart");

const game = (gameboard) => {
  let round = 0;
  let gameActive = true;
  const fields = document.querySelectorAll(".area");

  fields.forEach((field, index) => {
    field.addEventListener("click", () => {
      if (gameActive === true && round < 9 && gameboard.board[index] == null) {
        if (round % 2 === 0) {
          gameboard.updateBoard(index, playerOne);
          field.textContent = "x";
          info.textContent = '"O" Turn';
        } else {
          gameboard.updateBoard(index, playerTwo);
          field.textContent = "o";
          info.textContent = '"X" Turn';
        }
        if (check(gameboard.board)) {
          gameActive = false;
          return;
        }
        round++;
      }
    });
  });

  const endOfGame = () => {
    gameActive = false;
    info.textContent = "Game Over";
  }
  restart.addEventListener("click", () => {
    fields.forEach(field => {
      field.textContent = "";
    })
    gameboard.resetBoard();
    round = 0;
    gameActive = true;
    info.textContent = '"X" Turn';
  })
  return { endOfGame };
  // TODO: read more about objects and returning them
}

function check(board) {
  console.log("check function");
  const winPosition = ['012', '345', '678', '036', '147', '258', '048', '642'];

  for (let win of winPosition) {
    const [a, b, c] = [win[0], win[1], win[2]].map(Number);
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      info.textContent = "Winner: " + board[a];
      return true;
    } else if(board[8] != null) {
      info.textContent = "It's a tie";
    }
  }
  return false;
}

let game1 = game(gameboard());


