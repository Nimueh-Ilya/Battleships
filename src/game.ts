import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Battleship, Carrier, Destroyer, Submarine, patrolBoat } from "./ship";

export class Game {
  gameboard: Gameboard;
  player1: Player;
  player2: Player;
  // player1Destroyer: Destroyer;
  // player1Carrier: Carrier;
  // player1Battleship: Battleship;
  // player1Submarine: Submarine;
  // player1PatrolBoat: patrolBoat;
  // player2Destroyer: Destroyer;
  // player2Carrier: Carrier;
  // player2Battleship: Battleship;
  // player2Submarine: Submarine;
  // player2PatrolBoat: patrolBoat;
  gameTurn: "Player 1" | "Player 2" | "";
  gameStatus: "PLAYER1 WIN" | "PLAYER2 WIN" | "";

  constructor() {
    this.gameStatus = "";
    this.gameTurn = "";
    this.gameboard = new Gameboard();
    // this.player1Destroyer = new Destroyer();
    // this.player1Carrier = new Carrier();
    // this.player1Battleship = new Battleship();
    // this.player1Submarine = new Submarine();
    // this.player1PatrolBoat = new patrolBoat();
    // this.player2Destroyer = new Destroyer();
    // this.player2Carrier = new Carrier();
    // this.player2Battleship = new Battleship();
    // this.player2Submarine = new Submarine();
    // this.player2PatrolBoat = new patrolBoat();

    this.player1 = new Player();
    // this.player1Destroyer,
    // this.player1Carrier,
    // this.player1Battleship,
    // this.player1Submarine,
    // this.player1PatrolBoat
    this.player2 = new Player();
    // this.player2Destroyer,
    // this.player2Carrier,
    // this.player2Battleship,
    // this.player2Submarine,
    // this.player2PatrolBoat
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
