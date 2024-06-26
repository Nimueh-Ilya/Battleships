import { Ship } from "../src/ship";
import { Gameboard } from "../src/gameboard";

test("ship properties", () => {
  const ship = new Ship("ship", 5);
  expect(ship).toEqual({
    name: "ship",
    length: 5,
    hits: 0,
    sunk: false,
    xcoord: 0,
    ycoord: 0,
  });
});
test("ship hit", () => {
  const ship = new Ship("ship", 5);
  ship.hit();
  expect(ship).toEqual({
    name: "ship",
    length: 5,
    hits: 1,
    sunk: false,
    xcoord: 0,
    ycoord: 0,
  });
});
test("ship sink", () => {
  const ship = new Ship("ship", 5);
  ship.sink();
  expect(ship).toEqual({
    name: "ship",
    length: 5,
    hits: 0,
    sunk: true,
    xcoord: 0,
    ycoord: 0,
  });
});

test("ship isSunk(not)", () => {
  const ship = new Ship("ship", 2);
  ship.hit();
  ship.isSunk();
  expect(ship).toEqual({
    name: "ship",
    length: 2,
    hits: 1,
    sunk: false,
    xcoord: 0,
    ycoord: 0,
  });
});
test("ship isSunk", () => {
  const ship = new Ship("ship", 1);
  ship.hit();
  ship.isSunk();
  expect(ship).toEqual({
    name: "ship",
    length: 1,
    hits: 1,
    sunk: true,
    xcoord: 0,
    ycoord: 0,
  });
});
