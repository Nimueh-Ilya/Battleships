import { Gameboard } from "./gameboard";
import { Battleship, Carrier, Destroyer, Submarine, patrolBoat } from "./ship";

export class Player {
  gameboard: Gameboard;
  shipDestroyer: Destroyer;
  shipCarrier: Carrier;
  shipBattleship: Battleship;
  shipSubmarine: Submarine;
  shipPatrolBoat: patrolBoat;
  shipsSunk: number;

  constructor(
    gameboard: Gameboard,
    shipDestroyer: Destroyer,
    shipCarrier: Carrier,
    shipBattleship: Battleship,
    shipSubmarine: Submarine,
    shipPatrolBoat: patrolBoat
  ) {
    this.gameboard = gameboard;
    this.shipDestroyer = shipDestroyer;
    this.shipCarrier = shipCarrier;
    this.shipBattleship = shipBattleship;
    this.shipSubmarine = shipSubmarine;
    this.shipPatrolBoat = shipPatrolBoat;
    this.shipsSunk = 0;
  }
}
