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
    console.table(this.board);
  }
  switchOrientation() {
    switch (this.orientation) {
      case "Vertical":
        this.orientation = "Horizontal";
        break;
      case "Horizontal":
        this.orientation = "Vertical";
        break;
      default:
        "Horizontal";
        break;
    }
  }
  checkShip(ship: Ship, xpos: number, ypos: number) {
    if (!this.checkShipPlacement(ship, xpos, ypos)) {
      console.log("ship Placement issue");
      return false;
    }
    if (this.orientation == "Vertical") {
      return this.checkVertical(ship, xpos, ypos);
    } else {
      return this.checkHorizontal(ship, xpos, ypos);
    }
  }
  checkHorizontal(ship: Ship, xpos: number, ypos: number) {
    const tempArray = this.board[xpos].slice(ypos, ypos + ship.length);
    if (tempArray[0] === undefined) {
      return true;
    } else {
      return false;
    }
  }
  checkVertical(ship: Ship, xpos: number, ypos: number) {
    const tempArray = [];
    for (let index = xpos; index < this.board.length; index++) {
      tempArray.push(this.board[xpos][ypos]);
    }
    if (tempArray[0] === undefined) {
      return true;
    } else {
      return false;
    }
  }
  checkShipPlacement(ship: Ship, xpos: number, ypos: number) {
    if (this.orientation === "Horizontal") {
      if (ship.length + ypos > 9) return false;
      else return true;
    } else if (this.orientation === "Vertical") {
      if (ship.length + xpos > 9) return false;
      else return true;
    }
  }
  placeShip(ship: Ship, xpos: number, ypos: number) {
    if (!this.checkShip(ship, xpos, ypos)) {
      return "There is a ship docked";
    } else {
      ship.xcoord = xpos;
      ship.ycoord = ypos;

      if (this.orientation == "Horizontal") {
        this.board[xpos].fill(ship, ypos, ypos + ship.length);
      } else if (this.orientation == "Vertical") {
        for (let index = xpos; index <= ship.length; index++) {
          this.board[index][ypos] = ship;
        }
      }
    }
  }
  receiveAttack(xpos: number, ypos: number) {}
}
