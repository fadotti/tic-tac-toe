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
  let isGameOn = false;
  let endOfGameTextElement = document.querySelector("div#column-container > h2");
  let player1 = document.querySelectorAll("div#column-container > div:nth-child(2) > input")[0];
  let player2 = document.querySelectorAll("div#column-container > div:nth-child(2) > input")[1];

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

    gameController.isGameOn = false;

    playerNameInputs[0].value = '';
    playerNameInputs[1].value = '';
  }

  return {
          currentPlayer, 
          endOfGameMessage,
          isGameOn,
          endOfGameTextElement, 
          player1,
          player2, 
          playRound, 
          checkPlayerOneWinCondition, 
          checkPlayerTwoWinCondition, 
          checkTieCondition,
          resetGameboard
        }
})();

const playerNameInputs = document.querySelectorAll("div#column-container > div > input");

const playButton = document.querySelector("#play");

playButton.addEventListener('click', () => {
  if(playerNameInputs[0].checkValidity() && playerNameInputs[1].checkValidity()) {
    gameController.isGameOn = true;
    playerNameInputs[0].disabled = true;
    playerNameInputs[1].disabled = true;
  }
})

const restartButton = document.querySelector("#restart");

restartButton.addEventListener('click', () => {
  gameController.resetGameboard();
  playerNameInputs[0].disabled = false;
  playerNameInputs[1].disabled = false;
  gameController.endOfGameTextElement.textContent = "";
})

const gridCells = document.querySelectorAll(".grid-cell");

gridCells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if(gameController.isGameOn && cell.textContent == '') {
      if(gameController.currentPlayer == 1) {
        cell.textContent = 'X';
        gameController.playRound(index, gameController.currentPlayer);

        if(gameController.checkPlayerOneWinCondition()) {
          gameController.endOfGameTextElement.textContent = `${gameController.player1.value} wins!`;
          gameController.isGameOn = false;
        } else if(gameController.checkTieCondition()) {
          gameController.endOfGameTextElement.textContent = "It's a tie!";
          gameController.isGameOn = false;
        }
        gameController.currentPlayer = (gameController.currentPlayer == 1) ? 2 : 1;
      } else if(gameController.currentPlayer == 2) {
        cell.textContent = 'O';
        gameController.playRound(index, gameController.currentPlayer);

        if(gameController.checkPlayerTwoWinCondition()) {
          gameController.endOfGameTextElement.textContent = `${gameController.player1.value} wins!`;
          gameController.isGameOn = false;
        } else if(gameController.checkTieCondition()) {
          gameController.endOfGameTextElement.textContent = "It's a tie!";
          gameController.isGameOn = false;
        }
        gameController.currentPlayer = (gameController.currentPlayer == 1) ? 2 : 1;
      }
    }
  })
})