function player(marker) {
  this.marker = marker;
}

const game = (gameboard) => {
  
}

const playerOne = new player("X");
const playerTwo = new player("O");

const gameboard = () => {
  const board = Array(9).fill(null);

  const updateBoard = (index, marker) => {
    if (index >= 0 && index < 9 && board[index] == null) {
      board[index] = marker;
      check(board);
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

  return {updateBoard, getBoard, resetBoard};
}

function check(board) {
  console.log("check function");
  const winPosition = ['012', '345', '678', '036', '147', '258', '048', '642'];

  winPosition.forEach(win => {
    const [a, b, c] = [win[0], win[1], win[2]];

    // Poprawne porównanie wartości w tablicy
    if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
      console.log("Winning marker:", board[a]);
    }
  });
}

//let game = gameboard();
//game.updateBoard(6, playerOne.marker);
//game.updateBoard(4, playerOne.marker);
//game.updateBoard(2, playerOne.marker);
//console.log(game.getBoard());
