import { Gameboard } from "./gameboard";
import {
  Ship,
  Battleship,
  Carrier,
  Destroyer,
  Submarine,
  patrolBoat,
} from "./ship";
import { game } from "./game";
const gameEngine = () => {
  const gameOne = new game();
  const player1PlaceShips = () => {
    gameOne.player1.gameboard.placeShip(gameOne.player1.shipBattleship, 0, 0);
    gameOne.player1.gameboard.placeShip(gameOne.player1.shipCarrier, 1, 0);
    gameOne.player1.gameboard.placeShip(gameOne.player1.shipDestroyer, 2, 0);
    gameOne.player1.gameboard.placeShip(gameOne.player1.shipPatrolBoat, 3, 0);
    gameOne.player1.gameboard.placeShip(gameOne.player1.shipSubmarine, 4, 0);
  };
  const player2PlaceShips = () => {
    gameOne.player2.gameboard.placeShip(gameOne.player2.shipBattleship, 0, 0);
    gameOne.player2.gameboard.placeShip(gameOne.player2.shipCarrier, 1, 0);
    gameOne.player2.gameboard.placeShip(gameOne.player2.shipDestroyer, 2, 0);
    gameOne.player2.gameboard.placeShip(gameOne.player2.shipPatrolBoat, 3, 0);
    gameOne.player2.gameboard.placeShip(gameOne.player2.shipSubmarine, 4, 0);
  };
  while (gameOne.gameStatus === "") {}
};
