export class Ship {
  readonly length: number;
  hits: number;
  sunk: boolean;
  xcoord: number;
  ycoord: number;

  constructor(length: number, xcoord: number = 0, ycoord: number = 0) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.xcoord = xcoord;
    this.ycoord = ycoord;
  }
  hit() {
    if (this.hits < this.length) {
      this.hits++;
    }
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sink();
    }
    return;
  }
  sink() {
    this.sunk = true;
  }
}
