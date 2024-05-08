import { Ship } from "./ship";

type gameboardgrid = (number | string | Ship)[][];

export class Gameboard {
  board: gameboardgrid;
  oriontation: "Horizontal" | "Vertical";

  constructor() {
    this.board = this.createBoard();
    this.oriontation = "Horizontal";
  }
  createBoard(): gameboardgrid {
    if (this.board) {
      return this.board;
    }
    this.board = Array.from(Array(10), () => new Array(10));
    return this.board;
  }
  showBoard() {
    console.log(this.board);
  }
  placeShip(ship: Ship, xpos: number, ypos: number) {
    if (this.checkShip(xpos, ypos)) {
      return "There is a ship docked";
    } else {
      ship.xcoord = xpos;
      ship.ycoord = ypos;

      this.board[xpos][ypos] = ship;
    }
  }
  receiveAttack(xpos: number, ypos: number) {}
  checkShip(xpos: number, ypos: number) {
    if (!this.board[xpos][ypos]) {
      return false;
    } else {
      return true;
    }
  }
}
