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
  // shipDestroyer: Destroyer;
  // shipCarrier: Carrier;
  // shipBattleship: Battleship;
  // shipSubmarine: Submarine;
  // shipPatrolBoat: patrolBoat;
  sunkenShips: Ship[];
  ships: { [key: string]: Ship };

  constructor() // shipDestroyer: Destroyer,
  // shipCarrier: Carrier,
  // shipBattleship: Battleship,
  // shipSubmarine: Submarine,
  // shipPatrolBoat: patrolBoat
  {
    this.gameboard = new Gameboard();
    // this.shipDestroyer = shipDestroyer;
    // this.shipCarrier = shipCarrier;
    // this.shipBattleship = shipBattleship;
    // this.shipSubmarine = shipSubmarine;
    // this.shipPatrolBoat = shipPatrolBoat;
    this.ships = {
      destroyer: new Destroyer(),
      carrier: new Carrier(),
      battleship: new Battleship(),
      submarine: new Submarine(),
      patrolBoat: new patrolBoat(),
    };
    this.sunkenShips = [];
  }
  checkShunkShip(ship: Ship) {
    if (this.sunkenShips.includes(ship)) {
      return;
    } else {
      this.sunkenShips.push(ship);
    }
  }
}
