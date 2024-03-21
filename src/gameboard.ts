import { Ship } from "./ship";

type gameboardgrid = (number | string)[][];

export class Gameboard {
  attacks: number;
  board: gameboardgrid;
  carrier?: Ship;

  constructor(attacks: number = 0, board: gameboardgrid) {
    this.attacks = attacks;
    this.board = board;
  }
  createBoard() {
    this.board = Array(10).fill(0);
    this.board.forEach((point) => {
      point = Array(10).fill(0);
    });
  }
  placeship(
    positon: "horizontal" | "vertical",
    xpos: number,
    ypos: number,
    length: number
  ) {
    if (positon === "horizontal") {
      this.carrier = new Ship(length, xpos, ypos);
    } else {
    }
  }
}
