type gameboardgrid = (number | string)[][];
export class Gameboard {
  attacks: number;
  board: gameboardgrid;

  constructor(attacks: number = 0, board: gameboardgrid) {
    this.attacks = attacks;
    this.board = board;
  }
}
