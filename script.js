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

  function playGame() {
    let player = 1;
    let endOfGameMessage;
    while(true) {
      let cell = Number(prompt("Enter a whole number between 0 and 8"));
      playRound(cell, player);
      if(checkPlayerOneWinCondition()) {
        endOfGameMessage = "Player One wins!";
        break;
      }
      if(checkPlayerTwoWinCondition()) {
        endOfGameMessage = "Player Two wins!";
        break;
      }
      if(checkTieCondition()) {
        endOfGameMessage = "It's a tie!"
        break;
      }
      player = (player == 1) ? 2 : 1;
    }

    alert(endOfGameMessage);
  }

  function resetGameboard() {
    ticTacToe.gameboard.forEach((cell) => {
      cell.empty = 1;
      cell.player1 = 0;
      cell.player2 = 0
    })
  }

  return {createPlayers, playGame, resetGameboard}
})();