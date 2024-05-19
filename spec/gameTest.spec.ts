import { Game } from "../src/game";

test("check Win PLAYER1 WINS", () => {
  const gameOne = new Game();
  gameOne.player1.sunkenShips.push(
    gameOne.player2.ships.Battleship,
    gameOne.player2.ships.Carrier,
    gameOne.player2.ships.Destroyer,
    gameOne.player2.ships.PatrolBoat,
    gameOne.player2.ships.Submarine
  );
  gameOne.checkWin(gameOne.player1);
  expect(gameOne.gameStatus).toBe("PLAYER1 WIN");
});
test("check Win PLAYER2 WINS", () => {
  const gameOne = new Game();
  gameOne.player2.sunkenShips.push(
    gameOne.player1.ships.Battleship,
    gameOne.player1.ships.Carrier,
    gameOne.player1.ships.Destroyer,
    gameOne.player1.ships.PatrolBoat,
    gameOne.player1.ships.Submarine
  );
  gameOne.checkWin(gameOne.player2);
  expect(gameOne.gameStatus).toBe("PLAYER2 WIN");
});

test("check Win PLAYER1 WINS", () => {
  const gameOne = new Game();
  expect(gameOne.gameStatus).toBe("");
});
test("Switch game turn", () => {
  const gameOne = new Game();
  expect(gameOne.gameTurn).toBe("");
  gameOne.changeTurn();
  expect(gameOne.gameTurn).toBe("Player 2");
  gameOne.changeTurn();
  expect(gameOne.gameTurn).toBe("Player 1");
});
