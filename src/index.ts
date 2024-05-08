import { Gameboard } from "./gameboard";
import {
  Ship,
  Battleship,
  Carrier,
  Destroyer,
  Submarine,
  patrolBoat,
} from "./ship";
const newGame = new Gameboard();
newGame.createBoard();
newGame.showBoard();
console.log(newGame.checkShip(2, 4));
newGame.placeShip(new Carrier(), 2, 4);
console.log(newGame.checkShip(2, 4));
newGame.showBoard();
