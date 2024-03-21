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
  placeship(
    positon: "horizontal" | "vertical",
    xpos: number,
    ypos: number,
    length: number
  ) {
    if (positon === "horizontal") {
      this.ship = new Ship(length, xpos, ypos);
      this.board[ypos].fill(this.ship.length, xpos, xpos + this.ship.length);
    } else {
      this.ship = new Ship(length, xpos, ypos);
      for (let index = ypos; index < ypos + length; index++) {
        this.board[index][xpos] = this.ship.length;
      }
    }
  }
}
