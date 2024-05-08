export class Ship {
  name: string;
  length: number;
  hits: number;
  sunk: boolean;
  xcoord: number;
  ycoord: number;

  constructor(
    name: string,
    length: number,
    xcoord: number = 0,
    ycoord: number = 0
  ) {
    this.name = name;
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
export class Carrier extends Ship {
  constructor(name: string, length: number) {
    super((name = "Carrier"), (length = 5));
  }
}
export class Battleship extends Ship {
  name: string = "Battleship";
  length: number = 4;
}
export class Destroyer extends Ship {
  name: string = "Destroyer";
  length: number = 3;
}
export class Submarine extends Ship {
  name: string = "Submarine";
  length: number = 3;
}
export class patrolBoat extends Ship {
  name: string = "Patrol Boat";
  length: number = 2;
}
