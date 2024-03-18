import { Ship } from "../src/ship";

test("ship properties", () => {
  const ship = new Ship(5);
  expect(ship).toEqual({ length: 5, hits: 0, sunk: false });
});
test("ship hit", () => {
  const ship = new Ship(5);
  ship.hit();
  expect(ship).toEqual({ length: 5, hits: 1, sunk: false });
});
test("ship sink", () => {
  const ship = new Ship(5);
  ship.sink();
  expect(ship).toEqual({ length: 5, hits: 0, sunk: true });
});

test("ship isSunk(not)", () => {
  const ship = new Ship(2);
  ship.hit();
  ship.isSunk();
  expect(ship).toEqual({ length: 2, hits: 1, sunk: false });
});
test("ship isSunk", () => {
  const ship = new Ship(1);
  ship.hit();
  ship.isSunk();
  expect(ship).toEqual({ length: 1, hits: 1, sunk: true });
});
