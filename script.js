const ticTacToe = (function createGameboard() {
  function createCell() {
    const empty = 1;
    const player1 = 0;
    const player2 = 0;

    return {empty, player1, player2};
  }

  let gameboard = [];

  for(let i = 0; i < 9; i++) {
    gameboard.push(createCell());
  }

  return {gameboard};
})();

const gameController = (function() {
  let currentPlayer = 1;
  let endOfGameMessage = '';

  const createPlayers = function(player1, player2) {
    return {player1, player2};
  }

  const playRound = function(cell, player) {
    if(ticTacToe.gameboard[cell].empty == 1) {
      if(player == 1) {
        ticTacToe.gameboard[cell].empty = 0;
        ticTacToe.gameboard[cell].player1 = 1;
      } else {
        ticTacToe.gameboard[cell].empty = 0;
        ticTacToe.gameboard[cell].player2 = 1;     
      }
    }
  }

  function checkPlayerOneWinCondition() {
    if(ticTacToe.gameboard[0].player1 && ticTacToe.gameboard[1].player1 && ticTacToe.gameboard[2].player1) {return true}
    if(ticTacToe.gameboard[3].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[5].player1) {return true}
    if(ticTacToe.gameboard[6].player1 && ticTacToe.gameboard[7].player1 && ticTacToe.gameboard[8].player1) {return true}
    if(ticTacToe.gameboard[0].player1 && ticTacToe.gameboard[3].player1 && ticTacToe.gameboard[6].player1) {return true}
    if(ticTacToe.gameboard[1].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[7].player1) {return true}
    if(ticTacToe.gameboard[2].player1 && ticTacToe.gameboard[5].player1 && ticTacToe.gameboard[8].player1) {return true}
    if(ticTacToe.gameboard[0].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[8].player1) {return true}
    if(ticTacToe.gameboard[2].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[6].player1) {return true}
  }

  function checkPlayerTwoWinCondition() {
    if(ticTacToe.gameboard[0].player2 && ticTacToe.gameboard[1].player2 && ticTacToe.gameboard[2].player2) {return true}
    if(ticTacToe.gameboard[3].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[5].player2) {return true}
    if(ticTacToe.gameboard[6].player2 && ticTacToe.gameboard[7].player2 && ticTacToe.gameboard[8].player2) {return true}
    if(ticTacToe.gameboard[0].player2 && ticTacToe.gameboard[3].player2 && ticTacToe.gameboard[6].player2) {return true}
    if(ticTacToe.gameboard[1].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[7].player2) {return true}
    if(ticTacToe.gameboard[2].player2 && ticTacToe.gameboard[5].player2 && ticTacToe.gameboard[8].player2) {return true}
    if(ticTacToe.gameboard[0].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[8].player2) {return true}
    if(ticTacToe.gameboard[2].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[6].player2) {return true}
  }

  function checkTieCondition() {
    let numberOfEmptyCells = ticTacToe.gameboard.reduce((accumulator, currentValue) => accumulator + currentValue.empty, 0)
    return (numberOfEmptyCells == 0) ? true : false
  }

  function resetGameboard() {
    ticTacToe.gameboard.forEach((cell) => {
      cell.empty = 1;
      cell.player1 = 0;
      cell.player2 = 0
    })

    gridCells.forEach((cell) => cell.textContent = '');

    gameController.currentPlayer = 1;
  }

  return {
          currentPlayer, 
          endOfGameMessage, 
          createPlayers, 
          playRound, 
          checkPlayerOneWinCondition, 
          checkPlayerTwoWinCondition, 
          checkTieCondition,
          resetGameboard
        }
})();

const gridCells = document.querySelectorAll(".grid-cell");

gridCells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    console.log(index);
    if(cell.textContent == '') {
      if(gameController.currentPlayer == 1) {
        cell.textContent = 'X';
        gameController.playRound(index, gameController.currentPlayer);

        if(gameController.checkPlayerOneWinCondition()) {
          endOfGameMessage = "Player One wins!";
          alert(endOfGameMessage);
        }else if(gameController.checkTieCondition()) {
          endOfGameMessage = "It's a tie!"
          alert(endOfGameMessage);
        }
        gameController.currentPlayer = (gameController.currentPlayer == 1) ? 2 : 1;
      } else if(gameController.currentPlayer == 2) {
        cell.textContent = 'O';
        gameController.playRound(index, gameController.currentPlayer);

        if(gameController.checkPlayerTwoWinCondition()) {
          endOfGameMessage = "Player Two wins!";
          alert(endOfGameMessage);
        }else if(gameController.checkTieCondition()) {
          endOfGameMessage = "It's a tie!"
          alert(endOfGameMessage);
        }
        gameController.currentPlayer = (gameController.currentPlayer == 1) ? 2 : 1;
      }
    }
  })
})