import { Ship } from "./ship";

type gameboardgrid = (number | string | Ship)[][];

export class Gameboard {
  board: gameboardgrid;
  orientation: "Horizontal" | "Vertical";

  constructor() {
    this.board = this.createBoard();
    this.orientation = "Horizontal";
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
  checkShip(xpos: number, ypos: number, ship: Ship) {
    if (this.orientation == "Vertical") {
      return this.checkVertical(xpos, ypos, ship);
    } else {
      return this.checkHorizontal(xpos, ypos, ship);
    }
  }
  checkHorizontal(xpos: number, ypos: number, ship: Ship) {
    const tempArray = this.board[xpos].slice(ypos, ship.length);
    if (!tempArray) {
      return true;
    } else return false;
  }
  checkVertical(xpos: number, ypos: number, ship: Ship) {
    const tempArray = [];
    for (let index = xpos; index < this.board.length; index++) {
      tempArray.push(this.board[xpos][ypos]);
    }
    if (!tempArray) {
      return true;
    } else return false;
  }
  placeShip(ship: Ship, xpos: number, ypos: number) {
    if (this.checkShip(xpos, ypos, ship)) {
      return "There is a ship docked";
    } else {
      ship.xcoord = xpos;
      ship.ycoord = ypos;

      this.board[xpos][ypos] = ship;
    }
  }
  receiveAttack(xpos: number, ypos: number) {}
}
