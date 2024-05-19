import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Battleship, Carrier, Destroyer, Submarine, patrolBoat } from "./ship";

export class Game {
  gameboard: Gameboard;
  player1: Player;
  player2: Player;
  gameTurn: "Player 1" | "Player 2" | "";
  gameStatus: "PLAYER1 WIN" | "PLAYER2 WIN" | "";

  constructor() {
    this.gameStatus = "";
    this.gameTurn = "";
    this.gameboard = new Gameboard();
    this.player1 = new Player();
    this.player2 = new Player();
  }

  checkWin(player: Player) {
    if (player.sunkenShips.length === 5) {
      if (player === this.player1) {
        this.gameStatus = "PLAYER1 WIN";
        return;
      } else {
        this.gameStatus = "PLAYER2 WIN";
        return;
      }
    }
  }

  changeTurn() {
    if (this.gameTurn !== "Player 2") {
      this.gameTurn = "Player 2";
    } else {
      this.gameTurn = "Player 1";
    }
  }
}
