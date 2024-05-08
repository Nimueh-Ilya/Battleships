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
  constructor() {
    super("Carrier", 5);
  }
}
export class Battleship extends Ship {
  constructor() {
    super("Battleship", 4);
  }
}
export class Destroyer extends Ship {
  constructor() {
    super("Destroyer", 5);
  }
}
export class Submarine extends Ship {
  constructor() {
    super("Submarine", 3);
  }
}
export class patrolBoat extends Ship {
  constructor() {
    super("Patrol Boat", 2);
  }
}
