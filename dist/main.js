/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.ts");


class Game {
    constructor() {
        this.gameStatus = "";
        this.gameTurn = "";
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
        // this.player1Destroyer = new Destroyer();
        // this.player1Carrier = new Carrier();
        // this.player1Battleship = new Battleship();
        // this.player1Submarine = new Submarine();
        // this.player1PatrolBoat = new patrolBoat();
        // this.player2Destroyer = new Destroyer();
        // this.player2Carrier = new Carrier();
        // this.player2Battleship = new Battleship();
        // this.player2Submarine = new Submarine();
        // this.player2PatrolBoat = new patrolBoat();
        this.player1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player();
        // this.player1Destroyer,
        // this.player1Carrier,
        // this.player1Battleship,
        // this.player1Submarine,
        // this.player1PatrolBoat
        this.player2 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player();
        // this.player2Destroyer,
        // this.player2Carrier,
        // this.player2Battleship,
        // this.player2Submarine,
        // this.player2PatrolBoat
    }
    checkWin(player) {
        if (player.sunkenShips.length === 5) {
            if (player === this.player1) {
                this.gameStatus = "PLAYER1 WIN";
                return;
            }
            else {
                this.gameStatus = "PLAYER2 WIN";
                return;
            }
        }
    }
    changeTurn() {
        if (this.gameTurn !== "Player 2") {
            this.gameTurn = "Player 2";
        }
        else {
            this.gameTurn = "Player 1";
        }
    }
}


/***/ }),

/***/ "./src/gameboard.ts":
/*!**************************!*\
  !*** ./src/gameboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
class Gameboard {
    constructor() {
        this.board = this.createBoard();
        this.orientation = "Horizontal";
    }
    createBoard() {
        if (this.board) {
            return this.board;
        }
        this.board = Array.from(Array(10), () => new Array(10));
        return this.board;
    }
    showBoard() {
        console.table(this.board);
    }
    switchOrientation() {
        switch (this.orientation) {
            case "Vertical":
                this.orientation = "Horizontal";
                break;
            case "Horizontal":
                this.orientation = "Vertical";
                break;
            default:
                this.orientation = "Horizontal";
                break;
        }
    }
    checkShip(ship, xpos, ypos) {
        if (!this.checkShipPlacement(ship, xpos, ypos)) {
            console.log("ship Placement issue");
            return false;
        }
        if (this.orientation == "Vertical") {
            return this.checkVertical(ship, xpos, ypos);
        }
        else {
            return this.checkHorizontal(ship, xpos, ypos);
        }
    }
    checkHorizontal(ship, xpos, ypos) {
        for (let index = ypos; index < ypos + ship.length; index++) {
            if (this.board[xpos][index] !== undefined) {
                return false;
            }
        }
        return true;
    }
    checkVertical(ship, xpos, ypos) {
        for (let index = xpos; index < xpos + ship.length; index++) {
            if (this.board[index][ypos] !== undefined) {
                return false;
            }
        }
        return true;
    }
    checkShipPlacement(ship, xpos, ypos) {
        if (this.orientation === "Horizontal") {
            if (ship.length + ypos > 9)
                return false;
            else
                return true;
        }
        else if (this.orientation === "Vertical") {
            if (ship.length + xpos > 9)
                return false;
            else
                return true;
        }
    }
    placeShip(ship, xpos, ypos) {
        if (!this.checkShip(ship, xpos, ypos)) {
            console.log(`There is a ship or not enough space for ${ship.name}`);
            return false;
        }
        else {
            ship.xcoord = xpos;
            ship.ycoord = ypos;
            if (this.orientation == "Horizontal") {
                this.board[xpos].fill(ship, ypos, ypos + ship.length);
            }
            else if (this.orientation == "Vertical") {
                for (let index = xpos; index < xpos + ship.length; index++) {
                    this.board[index][ypos] = ship;
                }
            }
            return true;
        }
    }
    receiveAttack(xpos, ypos) {
        if (this.board[xpos][ypos] !== undefined) {
            this.board[xpos][ypos].hit();
            return "HIT";
        }
        else {
            return "DUD";
        }
    }
}


/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.ts");


class Player {
    constructor() {
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
        // this.shipDestroyer = shipDestroyer;
        // this.shipCarrier = shipCarrier;
        // this.shipBattleship = shipBattleship;
        // this.shipSubmarine = shipSubmarine;
        // this.shipPatrolBoat = shipPatrolBoat;
        this.ships = {
            destroyer: new _ship__WEBPACK_IMPORTED_MODULE_1__.Destroyer(),
            carrier: new _ship__WEBPACK_IMPORTED_MODULE_1__.Carrier(),
            battleship: new _ship__WEBPACK_IMPORTED_MODULE_1__.Battleship(),
            submarine: new _ship__WEBPACK_IMPORTED_MODULE_1__.Submarine(),
            patrolBoat: new _ship__WEBPACK_IMPORTED_MODULE_1__.patrolBoat(),
        };
        this.sunkenShips = [];
    }
    checkShunkShip(ship) {
        if (this.sunkenShips.includes(ship)) {
            return;
        }
        else {
            this.sunkenShips.push(ship);
        }
    }
}


/***/ }),

/***/ "./src/ship.ts":
/*!*********************!*\
  !*** ./src/ship.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Battleship: () => (/* binding */ Battleship),
/* harmony export */   Carrier: () => (/* binding */ Carrier),
/* harmony export */   Destroyer: () => (/* binding */ Destroyer),
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   Submarine: () => (/* binding */ Submarine),
/* harmony export */   patrolBoat: () => (/* binding */ patrolBoat)
/* harmony export */ });
class Ship {
    constructor(name, length, xcoord = 0, ycoord = 0) {
        this.name = name;
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        this.xcoord = xcoord;
        this.ycoord = ycoord;
    }
    hit() {
        if (this.hits < this.length) {
            this.hits++;
        }
        else {
            this.isSunk();
        }
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sink();
        }
        return;
    }
    sink() {
        this.sunk = true;
    }
}
class Carrier extends Ship {
    constructor() {
        super("Carrier", 5);
    }
}
class Battleship extends Ship {
    constructor() {
        super("Battleship", 4);
    }
}
class Destroyer extends Ship {
    constructor() {
        super("Destroyer", 5);
    }
}
class Submarine extends Ship {
    constructor() {
        super("Submarine", 3);
    }
}
class patrolBoat extends Ship {
    constructor() {
        super("Patrol Boat", 2);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.ts");

const gameEngine = () => {
    const gameOne = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();
    function placeShips(player) {
        const shipCoords = {};
        for (const shipName in player.ships) {
            if (player.ships.hasOwnProperty(shipName)) {
                let validPlacement = false;
                let x = -1, y = -1;
                while (!validPlacement) {
                    x = promptForCoordinates(`X coords for ${shipName}`);
                    y = promptForCoordinates(`Y coords for ${shipName}`);
                    if (player.gameboard.checkShip(player.ships[shipName], x, y)) {
                        validPlacement = true;
                    }
                    else {
                        console.log(`Invalid placement for ${shipName}. Please enter new coordinates.`);
                    }
                }
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
    function promptForCoordinates(message) {
        let input;
        let value;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztZQUN4QixLQUFLLEdBQUcsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ3JELENBQUMsUUFBUSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFFdkIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM5QyxVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBQ0YsVUFBVSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBCYXR0bGVzaGlwLCBDYXJyaWVyLCBEZXN0cm95ZXIsIFN1Ym1hcmluZSwgcGF0cm9sQm9hdCB9IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBnYW1lYm9hcmQ6IEdhbWVib2FyZDtcbiAgcGxheWVyMTogUGxheWVyO1xuICBwbGF5ZXIyOiBQbGF5ZXI7XG4gIC8vIHBsYXllcjFEZXN0cm95ZXI6IERlc3Ryb3llcjtcbiAgLy8gcGxheWVyMUNhcnJpZXI6IENhcnJpZXI7XG4gIC8vIHBsYXllcjFCYXR0bGVzaGlwOiBCYXR0bGVzaGlwO1xuICAvLyBwbGF5ZXIxU3VibWFyaW5lOiBTdWJtYXJpbmU7XG4gIC8vIHBsYXllcjFQYXRyb2xCb2F0OiBwYXRyb2xCb2F0O1xuICAvLyBwbGF5ZXIyRGVzdHJveWVyOiBEZXN0cm95ZXI7XG4gIC8vIHBsYXllcjJDYXJyaWVyOiBDYXJyaWVyO1xuICAvLyBwbGF5ZXIyQmF0dGxlc2hpcDogQmF0dGxlc2hpcDtcbiAgLy8gcGxheWVyMlN1Ym1hcmluZTogU3VibWFyaW5lO1xuICAvLyBwbGF5ZXIyUGF0cm9sQm9hdDogcGF0cm9sQm9hdDtcbiAgZ2FtZVR1cm46IFwiUGxheWVyIDFcIiB8IFwiUGxheWVyIDJcIiB8IFwiXCI7XG4gIGdhbWVTdGF0dXM6IFwiUExBWUVSMSBXSU5cIiB8IFwiUExBWUVSMiBXSU5cIiB8IFwiXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lU3RhdHVzID0gXCJcIjtcbiAgICB0aGlzLmdhbWVUdXJuID0gXCJcIjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAvLyB0aGlzLnBsYXllcjFEZXN0cm95ZXIgPSBuZXcgRGVzdHJveWVyKCk7XG4gICAgLy8gdGhpcy5wbGF5ZXIxQ2FycmllciA9IG5ldyBDYXJyaWVyKCk7XG4gICAgLy8gdGhpcy5wbGF5ZXIxQmF0dGxlc2hpcCA9IG5ldyBCYXR0bGVzaGlwKCk7XG4gICAgLy8gdGhpcy5wbGF5ZXIxU3VibWFyaW5lID0gbmV3IFN1Ym1hcmluZSgpO1xuICAgIC8vIHRoaXMucGxheWVyMVBhdHJvbEJvYXQgPSBuZXcgcGF0cm9sQm9hdCgpO1xuICAgIC8vIHRoaXMucGxheWVyMkRlc3Ryb3llciA9IG5ldyBEZXN0cm95ZXIoKTtcbiAgICAvLyB0aGlzLnBsYXllcjJDYXJyaWVyID0gbmV3IENhcnJpZXIoKTtcbiAgICAvLyB0aGlzLnBsYXllcjJCYXR0bGVzaGlwID0gbmV3IEJhdHRsZXNoaXAoKTtcbiAgICAvLyB0aGlzLnBsYXllcjJTdWJtYXJpbmUgPSBuZXcgU3VibWFyaW5lKCk7XG4gICAgLy8gdGhpcy5wbGF5ZXIyUGF0cm9sQm9hdCA9IG5ldyBwYXRyb2xCb2F0KCk7XG5cbiAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCk7XG4gICAgLy8gdGhpcy5wbGF5ZXIxRGVzdHJveWVyLFxuICAgIC8vIHRoaXMucGxheWVyMUNhcnJpZXIsXG4gICAgLy8gdGhpcy5wbGF5ZXIxQmF0dGxlc2hpcCxcbiAgICAvLyB0aGlzLnBsYXllcjFTdWJtYXJpbmUsXG4gICAgLy8gdGhpcy5wbGF5ZXIxUGF0cm9sQm9hdFxuICAgIHRoaXMucGxheWVyMiA9IG5ldyBQbGF5ZXIoKTtcbiAgICAvLyB0aGlzLnBsYXllcjJEZXN0cm95ZXIsXG4gICAgLy8gdGhpcy5wbGF5ZXIyQ2FycmllcixcbiAgICAvLyB0aGlzLnBsYXllcjJCYXR0bGVzaGlwLFxuICAgIC8vIHRoaXMucGxheWVyMlN1Ym1hcmluZSxcbiAgICAvLyB0aGlzLnBsYXllcjJQYXRyb2xCb2F0XG4gIH1cblxuICBjaGVja1dpbihwbGF5ZXI6IFBsYXllcikge1xuICAgIGlmIChwbGF5ZXIuc3Vua2VuU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICBpZiAocGxheWVyID09PSB0aGlzLnBsYXllcjEpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gXCJQTEFZRVIxIFdJTlwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBcIlBMQVlFUjIgV0lOXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjaGFuZ2VUdXJuKCkge1xuICAgIGlmICh0aGlzLmdhbWVUdXJuICE9PSBcIlBsYXllciAyXCIpIHtcbiAgICAgIHRoaXMuZ2FtZVR1cm4gPSBcIlBsYXllciAyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ2FtZVR1cm4gPSBcIlBsYXllciAxXCI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG50eXBlIGdhbWVib2FyZGdyaWQgPSBTaGlwW11bXTtcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGJvYXJkOiBnYW1lYm9hcmRncmlkO1xuICBvcmllbnRhdGlvbjogXCJIb3Jpem9udGFsXCIgfCBcIlZlcnRpY2FsXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gIH1cbiAgY3JlYXRlQm9hcmQoKTogZ2FtZWJvYXJkZ3JpZCB7XG4gICAgaWYgKHRoaXMuYm9hcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbShBcnJheSgxMCksICgpID0+IG5ldyBBcnJheSgxMCkpO1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG4gIHNob3dCb2FyZCgpIHtcbiAgICBjb25zb2xlLnRhYmxlKHRoaXMuYm9hcmQpO1xuICB9XG4gIHN3aXRjaE9yaWVudGF0aW9uKCkge1xuICAgIHN3aXRjaCAodGhpcy5vcmllbnRhdGlvbikge1xuICAgICAgY2FzZSBcIlZlcnRpY2FsXCI6XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSG9yaXpvbnRhbFwiOlxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJWZXJ0aWNhbFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNoZWNrU2hpcChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgeHBvcywgeXBvcykpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwic2hpcCBQbGFjZW1lbnQgaXNzdWVcIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiVmVydGljYWxcIikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tWZXJ0aWNhbChzaGlwLCB4cG9zLCB5cG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tIb3Jpem9udGFsKHNoaXAsIHhwb3MsIHlwb3MpO1xuICAgIH1cbiAgfVxuICBjaGVja0hvcml6b250YWwoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IHlwb3M7IGluZGV4IDwgeXBvcyArIHNoaXAubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZFt4cG9zXVtpbmRleF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGNoZWNrVmVydGljYWwoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IHhwb3M7IGluZGV4IDwgeHBvcyArIHNoaXAubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAodGhpcy5ib2FyZFtpbmRleF1beXBvc10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoc2hpcC5sZW5ndGggKyB5cG9zID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT09IFwiVmVydGljYWxcIikge1xuICAgICAgaWYgKHNoaXAubGVuZ3RoICsgeHBvcyA+IDkpIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHBsYWNlU2hpcChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jaGVja1NoaXAoc2hpcCwgeHBvcywgeXBvcykpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBUaGVyZSBpcyBhIHNoaXAgb3Igbm90IGVub3VnaCBzcGFjZSBmb3IgJHtzaGlwLm5hbWV9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAueGNvb3JkID0geHBvcztcbiAgICAgIHNoaXAueWNvb3JkID0geXBvcztcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4cG9zXS5maWxsKHNoaXAsIHlwb3MsIHlwb3MgKyBzaGlwLmxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCB4cG9zICsgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XVt5cG9zXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbeHBvc11beXBvc10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ib2FyZFt4cG9zXVt5cG9zXS5oaXQoKTtcbiAgICAgIHJldHVybiBcIkhJVFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJEVURcIjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHtcbiAgQmF0dGxlc2hpcCxcbiAgQ2FycmllcixcbiAgRGVzdHJveWVyLFxuICBTdWJtYXJpbmUsXG4gIHBhdHJvbEJvYXQsXG4gIFNoaXAsXG59IGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGdhbWVib2FyZDogR2FtZWJvYXJkO1xuICAvLyBzaGlwRGVzdHJveWVyOiBEZXN0cm95ZXI7XG4gIC8vIHNoaXBDYXJyaWVyOiBDYXJyaWVyO1xuICAvLyBzaGlwQmF0dGxlc2hpcDogQmF0dGxlc2hpcDtcbiAgLy8gc2hpcFN1Ym1hcmluZTogU3VibWFyaW5lO1xuICAvLyBzaGlwUGF0cm9sQm9hdDogcGF0cm9sQm9hdDtcbiAgc3Vua2VuU2hpcHM6IFNoaXBbXTtcbiAgc2hpcHM6IHsgW2tleTogc3RyaW5nXTogU2hpcCB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgLy8gc2hpcERlc3Ryb3llcjogRGVzdHJveWVyLFxuICAvLyBzaGlwQ2FycmllcjogQ2FycmllcixcbiAgLy8gc2hpcEJhdHRsZXNoaXA6IEJhdHRsZXNoaXAsXG4gIC8vIHNoaXBTdWJtYXJpbmU6IFN1Ym1hcmluZSxcbiAgLy8gc2hpcFBhdHJvbEJvYXQ6IHBhdHJvbEJvYXRcbiAge1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIC8vIHRoaXMuc2hpcERlc3Ryb3llciA9IHNoaXBEZXN0cm95ZXI7XG4gICAgLy8gdGhpcy5zaGlwQ2FycmllciA9IHNoaXBDYXJyaWVyO1xuICAgIC8vIHRoaXMuc2hpcEJhdHRsZXNoaXAgPSBzaGlwQmF0dGxlc2hpcDtcbiAgICAvLyB0aGlzLnNoaXBTdWJtYXJpbmUgPSBzaGlwU3VibWFyaW5lO1xuICAgIC8vIHRoaXMuc2hpcFBhdHJvbEJvYXQgPSBzaGlwUGF0cm9sQm9hdDtcbiAgICB0aGlzLnNoaXBzID0ge1xuICAgICAgZGVzdHJveWVyOiBuZXcgRGVzdHJveWVyKCksXG4gICAgICBjYXJyaWVyOiBuZXcgQ2FycmllcigpLFxuICAgICAgYmF0dGxlc2hpcDogbmV3IEJhdHRsZXNoaXAoKSxcbiAgICAgIHN1Ym1hcmluZTogbmV3IFN1Ym1hcmluZSgpLFxuICAgICAgcGF0cm9sQm9hdDogbmV3IHBhdHJvbEJvYXQoKSxcbiAgICB9O1xuICAgIHRoaXMuc3Vua2VuU2hpcHMgPSBbXTtcbiAgfVxuICBjaGVja1NodW5rU2hpcChzaGlwOiBTaGlwKSB7XG4gICAgaWYgKHRoaXMuc3Vua2VuU2hpcHMuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdW5rZW5TaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRzOiBudW1iZXI7XG4gIHN1bms6IGJvb2xlYW47XG4gIHhjb29yZDogbnVtYmVyO1xuICB5Y29vcmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgeGNvb3JkOiBudW1iZXIgPSAwLFxuICAgIHljb29yZDogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy54Y29vcmQgPSB4Y29vcmQ7XG4gICAgdGhpcy55Y29vcmQgPSB5Y29vcmQ7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdHMgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaXRzKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbmsoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHNpbmsoKSB7XG4gICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENhcnJpZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJDYXJyaWVyXCIsIDUpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmF0dGxlc2hpcCBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJhdHRsZXNoaXBcIiwgNCk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJEZXN0cm95ZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTdWJtYXJpbmVcIiwgMyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBwYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiUGF0cm9sIEJvYXRcIiwgMik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBTaGlwLFxuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuY29uc3QgZ2FtZUVuZ2luZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZU9uZSA9IG5ldyBHYW1lKCk7XG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHMocGxheWVyOiBQbGF5ZXIpIHtcbiAgICBjb25zdCBzaGlwQ29vcmRzOiB7IFtrZXk6IHN0cmluZ106IFtudW1iZXIsIG51bWJlcl0gfSA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBzaGlwTmFtZSBpbiBwbGF5ZXIuc2hpcHMpIHtcbiAgICAgIGlmIChwbGF5ZXIuc2hpcHMuaGFzT3duUHJvcGVydHkoc2hpcE5hbWUpKSB7XG4gICAgICAgIGxldCB2YWxpZFBsYWNlbWVudCA9IGZhbHNlO1xuICAgICAgICBsZXQgeDogbnVtYmVyID0gLTEsXG4gICAgICAgICAgeTogbnVtYmVyID0gLTE7XG5cbiAgICAgICAgd2hpbGUgKCF2YWxpZFBsYWNlbWVudCkge1xuICAgICAgICAgIHggPSBwcm9tcHRGb3JDb29yZGluYXRlcyhgWCBjb29yZHMgZm9yICR7c2hpcE5hbWV9YCkgYXMgbnVtYmVyO1xuICAgICAgICAgIHkgPSBwcm9tcHRGb3JDb29yZGluYXRlcyhgWSBjb29yZHMgZm9yICR7c2hpcE5hbWV9YCkgYXMgbnVtYmVyO1xuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLmNoZWNrU2hpcChwbGF5ZXIuc2hpcHNbc2hpcE5hbWVdLCB4LCB5KSkge1xuICAgICAgICAgICAgdmFsaWRQbGFjZW1lbnQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgYEludmFsaWQgcGxhY2VtZW50IGZvciAke3NoaXBOYW1lfS4gUGxlYXNlIGVudGVyIG5ldyBjb29yZGluYXRlcy5gXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXBDb29yZHNbc2hpcE5hbWVdID0gW3gsIHldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2hpcE5hbWUgaW4gc2hpcENvb3Jkcykge1xuICAgICAgaWYgKHNoaXBDb29yZHMuaGFzT3duUHJvcGVydHkoc2hpcE5hbWUpKSB7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHNoaXBDb29yZHNbc2hpcE5hbWVdO1xuICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChwbGF5ZXIuc2hpcHNbc2hpcE5hbWVdLCB4LCB5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9tcHRGb3JDb29yZGluYXRlcyhtZXNzYWdlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBpbnB1dDogc3RyaW5nIHwgbnVsbDtcbiAgICBsZXQgdmFsdWU6IG51bWJlcjtcblxuICAgIGRvIHtcbiAgICAgIGlucHV0ID0gcHJvbXB0KG1lc3NhZ2UpO1xuICAgICAgdmFsdWUgPSBpbnB1dCAhPT0gbnVsbCA/IHBhcnNlSW50KGlucHV0LCAxMCkgOiBOYU47XG4gICAgfSB3aGlsZSAoaXNOYU4odmFsdWUpKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGdhbWVPbmUucGxheWVyMS5nYW1lYm9hcmQuc3dpdGNoT3JpZW50YXRpb24oKTtcbiAgcGxhY2VTaGlwcyhnYW1lT25lLnBsYXllcjEpO1xuICBjb25zb2xlLmxvZyhnYW1lT25lLnBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkKTtcbn07XG5nYW1lRW5naW5lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=