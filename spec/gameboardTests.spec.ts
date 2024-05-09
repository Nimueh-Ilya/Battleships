import { Gameboard } from "../src/gameboard";
import {
  Ship,
  Battleship,
  Carrier,
  Destroyer,
  Submarine,
  patrolBoat,
} from "../src/ship";
test("Board creation", () => {
  let comparisonBoard = Array.from(Array(10), () => new Array(10));
  const gameboard = new Gameboard();
  expect(gameboard.createBoard()).toStrictEqual(comparisonBoard);
});
test("HorizontalChecker", () => {
  const shipOne = new Destroyer();
  const game = new Gameboard();
  game.createBoard();
  game.placeShip(new Carrier(), 2, 4);
  expect(game.checkHorizontal(2, 4, shipOne)).toBe(false);
});
test("VerticalChecker", () => {
  const shipOne = new Destroyer();
  const game = new Gameboard();
  game.createBoard();
  game.placeShip(new Carrier(), 2, 4);
  expect(game.checkVertical(2, 4, shipOne)).toBe(false);
});
