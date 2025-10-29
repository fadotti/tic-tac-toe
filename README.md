# tic-tac-toe

---

Sent as a submission for [Project: Tic Tac Toe](https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe).

---

### Scope

The goal of this project is to get further practice with objects, this time around using factory functions. A concerted effort has been made to keep the global scope clean by wrapping factory functions in IIFEs. This has led to a clean(ish) global scope consisting of six objects, two of which are objects that control the gameboard and the flow of the game, and the remaining four of which consist of various DOM elements. 

Although the code could have been refactored to a cleaner state upon finalization, it was deemed unnecessary. By this point, the concepts of encapsulation and namespacing, being the focus of the material just prior to this assignment, were well understood.

### The Game

This is a player vs. player game, playing against the machine is not an option. Valid names for both players must be input and the "Play" button must be clicked in order for player one to be able to play their first move.