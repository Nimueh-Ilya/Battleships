export class Ship {
  length: number;
  hits: number;
  sunk: boolean;

  constructor(length: number, hits: number, sunk: boolean = false) {
    this.length = length;
    this.hits = hits;
    this.sunk = sunk;
  }
}
