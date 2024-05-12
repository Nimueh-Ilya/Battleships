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
const shipThree = new Submarine();
game.createBoard();
game.placeShip(shipTwo, 2, 4);
game.placeShip(shipOne, 4, 4);
game.switchOrientation();
game.placeShip(shipThree, 1, 3);
