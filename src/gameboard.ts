import { Ship } from "./ship";

type gameboardgrid = (number | string)[][];

export class Gameboard {
  attacks: number;
  board: gameboardgrid;
  ship?: Ship;

  constructor(attacks: number = 0) {
    this.attacks = attacks;
    this.board = this.createBoard();
  }
  createBoard(): gameboardgrid {
    if (this.board) {
      return this.board;
    }
    this.board = Array.from(Array(10), () => new Array(10));
    return this.board;
  }
  placeShip(ship: Ship, xpos: number, ypos: number) {}
  receiveAttack(xpos: number, ypos: number) {}
}
