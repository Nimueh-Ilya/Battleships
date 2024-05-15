import { Ship } from "./ship";

type gameboardgrid = Ship[][];

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
        this.orientation = "Horizontal";
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
    for (let index = ypos; index < ypos + ship.length; index++) {
      if (this.board[xpos][index] !== undefined) {
        return false;
      }
    }
    return true;
  }
  checkVertical(ship: Ship, xpos: number, ypos: number) {
    for (let index = xpos; index < xpos + ship.length; index++) {
      if (this.board[index][ypos] !== undefined) {
        return false;
      }
    }
    return true;
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
      return false;
    } else {
      ship.xcoord = xpos;
      ship.ycoord = ypos;

      if (this.orientation == "Horizontal") {
        this.board[xpos].fill(ship, ypos, ypos + ship.length);
      } else if (this.orientation == "Vertical") {
        for (let index = xpos; index < xpos + ship.length; index++) {
          this.board[index][ypos] = ship;
        }
      }
    }
  }
  receiveAttack(xpos: number, ypos: number) {
    if (this.board[xpos][ypos] !== undefined) {
      this.board[xpos][ypos].hit();
      return "HIT";
    } else {
      return "DUD";
    }
  }
}
