export class Ship {
  length: number;
  hits: number;
  sunk: boolean;

  constructor(length: number, hits: number = 0, sunk: boolean = false) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
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
