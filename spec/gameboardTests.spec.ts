import { Ship } from "../src/ship";
import { Gameboard } from "../src/gameboard";
test("Board creation", () => {
  const gameboard = new Gameboard();
  expect(gameboard.createBoard()).toBe(gameboard.board);
});
