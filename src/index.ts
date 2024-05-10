import { Gameboard } from "./gameboard";
import {
  Ship,
  Battleship,
  Carrier,
  Destroyer,
  Submarine,
  patrolBoat,
} from "./ship";
const game = new Gameboard();
const shipOne = new Destroyer();
const shipTwo = new Carrier();
game.createBoard();
game.placeShip(shipTwo, 2, 4);
console.log(game.checkHorizontal(shipTwo, 2, 4));
game.placeShip(shipOne, 2, 4);
console.log(game.board);
