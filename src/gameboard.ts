export class Gameboard {
  attacks: number;
  board: any[];

  constructor(attacks: number = 0, board: (string | number)[]) {
    this.attacks = attacks;
    this.board = board;
  }
}
