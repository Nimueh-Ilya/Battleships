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
  const game = new Gameboard();
  const shipOne = new Destroyer();
  const shipTwo = new Carrier();
  game.createBoard();
  game.placeShip(shipTwo, 2, 4);
  expect(game.checkHorizontal(shipOne, 2, 4)).toBe(false);
});
test("VerticalChecker", () => {
  const game = new Gameboard();
  const shipOne = new Destroyer();
  const shipTwo = new Carrier();
  game.createBoard();
  game.placeShip(shipTwo, 2, 4);
  expect(game.checkVertical(shipOne, 2, 4)).toBe(false);
});
test("Full Check", () => {
  const game = new Gameboard();
  const shipOne = new Destroyer();
  const shipTwo = new Carrier();
  game.createBoard();
  game.placeShip(shipTwo, 2, 4);
  expect(game.checkShip(shipOne, 2, 4)).toBe(false);
});
test("Attack reception DUD", () => {
  const gameOne = new Gameboard();
  const shipOne = new Destroyer();
  gameOne.createBoard();
  gameOne.placeShip(shipOne, 2, 4);

  expect(gameOne.receiveAttack(3, 8)).toBe("DUD");
});
test("Attack reception HIT", () => {
  const gameOne = new Gameboard();
  const shipOne = new Destroyer();
  gameOne.createBoard();
  gameOne.placeShip(shipOne, 2, 4);

  expect(gameOne.receiveAttack(2, 4)).toBe("HIT");
  expect(shipOne.hits).toBe(1);
});
