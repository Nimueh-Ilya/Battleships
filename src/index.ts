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
  const shipList = [
    "Destroyer",
    "Carrier",
    "Battleship",
    "Submarine",
    "Patrol Boat",
  ];
  function placeShips(player: Player) {
    const shipCoords: { [key: string]: [number, number] } = {};

    for (const shipName in player.ships) {
      if (player.ships.hasOwnProperty(shipName)) {
        const x = promptForCoordinates(`X coords for ${shipName}`);
        const y = promptForCoordinates(`Y coords for ${shipName}`);
        shipCoords[shipName] = [x, y];
      }
    }

    for (const shipName in shipCoords) {
      if (shipCoords.hasOwnProperty(shipName)) {
        const [x, y] = shipCoords[shipName];
        player.gameboard.placeShip(player.ships[shipName], x, y);
      }
    }
  }

  function promptForCoordinates(message: string): number {
    let input: string | null;
    let value: number;

    do {
      input = prompt(message);
      value = input !== null ? parseInt(input, 10) : NaN;
    } while (isNaN(value));

    return value;
  }
};
gameEngine();
