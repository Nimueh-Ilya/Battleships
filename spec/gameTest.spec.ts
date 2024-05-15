import { game } from "../src/game";

test("check Win PLAYER1 WINS", () => {
  const gameOne = new game();
  gameOne.player1.sunkenShips.push(
    gameOne.player2Battleship,
    gameOne.player2Carrier,
    gameOne.player2Destroyer,
    gameOne.player2PatrolBoat,
    gameOne.player2Submarine
  );
  gameOne.checkWin(gameOne.player1);
  expect(gameOne.gameStatus).toBe("PLAYER1 WIN");
});
test("check Win PLAYER2 WINS", () => {
  const gameOne = new game();
  gameOne.player2.sunkenShips.push(
    gameOne.player1Battleship,
    gameOne.player1Carrier,
    gameOne.player1Destroyer,
    gameOne.player1PatrolBoat,
    gameOne.player1Submarine
  );
  gameOne.checkWin(gameOne.player2);
  expect(gameOne.gameStatus).toBe("PLAYER2 WIN");
});

test("check Win PLAYER1 WINS", () => {
  const gameOne = new game();
  expect(gameOne.gameStatus).toBe("");
});
test("Switch game turn", () => {
  const gameOne = new game();
  expect(gameOne.gameTurn).toBe("");
  gameOne.changeTurn();
  expect(gameOne.gameTurn).toBe("Player 2");
  gameOne.changeTurn();
  expect(gameOne.gameTurn).toBe("Player 1");
});
