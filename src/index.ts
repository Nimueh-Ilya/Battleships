import { Gameboard } from "./gameboard";
import {
  Ship,
  Battleship,
  Carrier,
  Destroyer,
  Submarine,
  patrolBoat,
} from "./ship";
import { Game } from "./game";
import { Player } from "./player";
const gameEngine = () => {
  const gameOne = new Game();
  function placeShips(player: Player) {
    const shipCoords: { [key: string]: [number, number] } = {};

    for (const shipName in player.ships) {
      if (player.ships.hasOwnProperty(shipName)) {
        let validPlacement = false;
        let x: number = -1,
          y: number = -1;

        while (!validPlacement) {
          x = promptForCoordinates(`X coords for ${shipName}`) as number;
          y = promptForCoordinates(`Y coords for ${shipName}`) as number;
          if (player.gameboard.checkShip(player.ships[shipName], x, y)) {
            validPlacement = true;
            player.gameboard.placeShip(player.ships[shipName], x, y);
          } else {
            console.log(
              `Invalid placement for ${shipName}. Please enter new coordinates.`
            );
          }
        }
      }
    }
  }
  function turn(player: Player, opponent: Player) {
    let x: number = -1,
      y: number = -1,
      validAttack = false;

    while (!validAttack) {
      x = promptForCoordinates(`X coords for attack`) as number;
      y = promptForCoordinates(`Y coords for attack`) as number;
      if (opponent.gameboard.receiveAttack(x, y) !== false) {
        opponent.gameboard.receiveAttack(x, y);
        opponent.checkSunkShip(opponent.gameboard.board[x][y]);
        validAttack = true;
      } else {
        console.log(`Can't attack there`);
      }
    }
    gameOne.checkWin(player);
  }
  function runGame() {}

  function promptForCoordinates(message: string): number {
    let input: string | null;
    let value: number;

    do {
      input = prompt(message);
      value = input !== null ? parseInt(input, 10) : NaN;
    } while (isNaN(value));

    return value;
  }

  gameOne.player1.gameboard.switchOrientation();
  placeShips(gameOne.player1);
  console.log(gameOne.player1.gameboard.board);
};
gameEngine();
