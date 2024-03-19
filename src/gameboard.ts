import { Ship } from "./ship";

type gameboardgrid = (number | string)[][];
export class Gameboard {
  attacks: number;
  board: gameboardgrid;

  constructor(attacks: number = 0, board: gameboardgrid) {
    this.attacks = attacks;
    this.board = board;
  }
  placeship(positon: "horizontal" | "vertical", xpos: number, ypos: number) {
    if (positon === "horizontal") {
    } else {
    }
  }
}
