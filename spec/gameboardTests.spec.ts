import { Ship } from "../src/ship";
import { Gameboard } from "../src/gameboard";
test("Board creation", () => {
  let comparisonBoard = Array.from(Array(10), () => new Array(10));
  const gameboard = new Gameboard();
  expect(gameboard.createBoard()).toStrictEqual(comparisonBoard);
});
