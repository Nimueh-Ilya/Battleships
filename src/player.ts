import { Gameboard } from "./gameboard";
import {
  Battleship,
  Carrier,
  Destroyer,
  Submarine,
  patrolBoat,
  Ship,
} from "./ship";

export class Player {
  gameboard: Gameboard;
  sunkenShips: Ship[];
  ships: { [key: string]: Ship };

  constructor() {
    this.gameboard = new Gameboard();

    this.ships = {
      destroyer: new Destroyer(),
      carrier: new Carrier(),
      battleship: new Battleship(),
      submarine: new Submarine(),
      patrolBoat: new patrolBoat(),
    };
    this.sunkenShips = [];
  }
  checkSunkShip(ship: Ship) {
    if (this.sunkenShips.includes(ship)) {
      return;
    } else {
      if (ship.sunk === true) {
        this.sunkenShips.push(ship);
      }
      return;
    }
  }
}
