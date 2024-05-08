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
console.log(newGame.checkShip(0, 0));
newGame.placeShip(new Carrier(), 0, 0);
