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

function checkWinCondition() {
  if(ticTacToe.gameboard[0].player1 && ticTacToe.gameboard[1].player1 && ticTacToe.gameboard[2].player1) {return true}
  if(ticTacToe.gameboard[3].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[5].player1) {return true}
  if(ticTacToe.gameboard[6].player1 && ticTacToe.gameboard[7].player1 && ticTacToe.gameboard[8].player1) {return true}
  if(ticTacToe.gameboard[0].player1 && ticTacToe.gameboard[3].player1 && ticTacToe.gameboard[6].player1) {return true}
  if(ticTacToe.gameboard[1].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[7].player1) {return true}
  if(ticTacToe.gameboard[2].player1 && ticTacToe.gameboard[5].player1 && ticTacToe.gameboard[8].player1) {return true}
  if(ticTacToe.gameboard[0].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[8].player1) {return true}
  if(ticTacToe.gameboard[2].player1 && ticTacToe.gameboard[4].player1 && ticTacToe.gameboard[6].player1) {return true}

  if(ticTacToe.gameboard[0].player2 && ticTacToe.gameboard[1].player2 && ticTacToe.gameboard[2].player2) {return true}
  if(ticTacToe.gameboard[3].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[5].player2) {return true}
  if(ticTacToe.gameboard[6].player2 && ticTacToe.gameboard[7].player2 && ticTacToe.gameboard[8].player2) {return true}
  if(ticTacToe.gameboard[0].player2 && ticTacToe.gameboard[3].player2 && ticTacToe.gameboard[6].player2) {return true}
  if(ticTacToe.gameboard[1].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[7].player2) {return true}
  if(ticTacToe.gameboard[2].player2 && ticTacToe.gameboard[5].player2 && ticTacToe.gameboard[8].player2) {return true}
  if(ticTacToe.gameboard[0].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[8].player2) {return true}
  if(ticTacToe.gameboard[2].player2 && ticTacToe.gameboard[4].player2 && ticTacToe.gameboard[6].player2) {return true}
}