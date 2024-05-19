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
                        player.gameboard.placeShip(player.ships[shipName], x, y);
                    }
                    else {
                        console.log(`Invalid placement for ${shipName}. Please enter new coordinates.`);
                    }
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUM7QUFDRixVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IEJhdHRsZXNoaXAsIENhcnJpZXIsIERlc3Ryb3llciwgU3VibWFyaW5lLCBwYXRyb2xCb2F0IH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIGdhbWVib2FyZDogR2FtZWJvYXJkO1xuICBwbGF5ZXIxOiBQbGF5ZXI7XG4gIHBsYXllcjI6IFBsYXllcjtcbiAgLy8gcGxheWVyMURlc3Ryb3llcjogRGVzdHJveWVyO1xuICAvLyBwbGF5ZXIxQ2FycmllcjogQ2FycmllcjtcbiAgLy8gcGxheWVyMUJhdHRsZXNoaXA6IEJhdHRsZXNoaXA7XG4gIC8vIHBsYXllcjFTdWJtYXJpbmU6IFN1Ym1hcmluZTtcbiAgLy8gcGxheWVyMVBhdHJvbEJvYXQ6IHBhdHJvbEJvYXQ7XG4gIC8vIHBsYXllcjJEZXN0cm95ZXI6IERlc3Ryb3llcjtcbiAgLy8gcGxheWVyMkNhcnJpZXI6IENhcnJpZXI7XG4gIC8vIHBsYXllcjJCYXR0bGVzaGlwOiBCYXR0bGVzaGlwO1xuICAvLyBwbGF5ZXIyU3VibWFyaW5lOiBTdWJtYXJpbmU7XG4gIC8vIHBsYXllcjJQYXRyb2xCb2F0OiBwYXRyb2xCb2F0O1xuICBnYW1lVHVybjogXCJQbGF5ZXIgMVwiIHwgXCJQbGF5ZXIgMlwiIHwgXCJcIjtcbiAgZ2FtZVN0YXR1czogXCJQTEFZRVIxIFdJTlwiIHwgXCJQTEFZRVIyIFdJTlwiIHwgXCJcIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVTdGF0dXMgPSBcIlwiO1xuICAgIHRoaXMuZ2FtZVR1cm4gPSBcIlwiO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIC8vIHRoaXMucGxheWVyMURlc3Ryb3llciA9IG5ldyBEZXN0cm95ZXIoKTtcbiAgICAvLyB0aGlzLnBsYXllcjFDYXJyaWVyID0gbmV3IENhcnJpZXIoKTtcbiAgICAvLyB0aGlzLnBsYXllcjFCYXR0bGVzaGlwID0gbmV3IEJhdHRsZXNoaXAoKTtcbiAgICAvLyB0aGlzLnBsYXllcjFTdWJtYXJpbmUgPSBuZXcgU3VibWFyaW5lKCk7XG4gICAgLy8gdGhpcy5wbGF5ZXIxUGF0cm9sQm9hdCA9IG5ldyBwYXRyb2xCb2F0KCk7XG4gICAgLy8gdGhpcy5wbGF5ZXIyRGVzdHJveWVyID0gbmV3IERlc3Ryb3llcigpO1xuICAgIC8vIHRoaXMucGxheWVyMkNhcnJpZXIgPSBuZXcgQ2FycmllcigpO1xuICAgIC8vIHRoaXMucGxheWVyMkJhdHRsZXNoaXAgPSBuZXcgQmF0dGxlc2hpcCgpO1xuICAgIC8vIHRoaXMucGxheWVyMlN1Ym1hcmluZSA9IG5ldyBTdWJtYXJpbmUoKTtcbiAgICAvLyB0aGlzLnBsYXllcjJQYXRyb2xCb2F0ID0gbmV3IHBhdHJvbEJvYXQoKTtcblxuICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAvLyB0aGlzLnBsYXllcjFEZXN0cm95ZXIsXG4gICAgLy8gdGhpcy5wbGF5ZXIxQ2FycmllcixcbiAgICAvLyB0aGlzLnBsYXllcjFCYXR0bGVzaGlwLFxuICAgIC8vIHRoaXMucGxheWVyMVN1Ym1hcmluZSxcbiAgICAvLyB0aGlzLnBsYXllcjFQYXRyb2xCb2F0XG4gICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcigpO1xuICAgIC8vIHRoaXMucGxheWVyMkRlc3Ryb3llcixcbiAgICAvLyB0aGlzLnBsYXllcjJDYXJyaWVyLFxuICAgIC8vIHRoaXMucGxheWVyMkJhdHRsZXNoaXAsXG4gICAgLy8gdGhpcy5wbGF5ZXIyU3VibWFyaW5lLFxuICAgIC8vIHRoaXMucGxheWVyMlBhdHJvbEJvYXRcbiAgfVxuXG4gIGNoZWNrV2luKHBsYXllcjogUGxheWVyKSB7XG4gICAgaWYgKHBsYXllci5zdW5rZW5TaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAgIGlmIChwbGF5ZXIgPT09IHRoaXMucGxheWVyMSkge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBcIlBMQVlFUjEgV0lOXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IFwiUExBWUVSMiBXSU5cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVR1cm4oKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVR1cm4gIT09IFwiUGxheWVyIDJcIikge1xuICAgICAgdGhpcy5nYW1lVHVybiA9IFwiUGxheWVyIDJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYW1lVHVybiA9IFwiUGxheWVyIDFcIjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgZ2FtZWJvYXJkZ3JpZCA9IFNoaXBbXVtdO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgYm9hcmQ6IGdhbWVib2FyZGdyaWQ7XG4gIG9yaWVudGF0aW9uOiBcIkhvcml6b250YWxcIiB8IFwiVmVydGljYWxcIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIjtcbiAgfVxuICBjcmVhdGVCb2FyZCgpOiBnYW1lYm9hcmRncmlkIHtcbiAgICBpZiAodGhpcy5ib2FyZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gbmV3IEFycmF5KDEwKSk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgc2hvd0JvYXJkKCkge1xuICAgIGNvbnNvbGUudGFibGUodGhpcy5ib2FyZCk7XG4gIH1cbiAgc3dpdGNoT3JpZW50YXRpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLm9yaWVudGF0aW9uKSB7XG4gICAgICBjYXNlIFwiVmVydGljYWxcIjpcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb3Jpem9udGFsXCI6XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBcIlZlcnRpY2FsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY2hlY2tTaGlwKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCB4cG9zLCB5cG9zKSkge1xuICAgICAgY29uc29sZS5sb2coXCJzaGlwIFBsYWNlbWVudCBpc3N1ZVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja1ZlcnRpY2FsKHNoaXAsIHhwb3MsIHlwb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja0hvcml6b250YWwoc2hpcCwgeHBvcywgeXBvcyk7XG4gICAgfVxuICB9XG4gIGNoZWNrSG9yaXpvbnRhbChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGZvciAobGV0IGluZGV4ID0geXBvczsgaW5kZXggPCB5cG9zICsgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hwb3NdW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2hlY2tWZXJ0aWNhbChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCB4cG9zICsgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XVt5cG9zXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwLmxlbmd0aCArIHlwb3MgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcC5sZW5ndGggKyB4cG9zID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrU2hpcChzaGlwLCB4cG9zLCB5cG9zKSkge1xuICAgICAgY29uc29sZS5sb2coYFRoZXJlIGlzIGEgc2hpcCBvciBub3QgZW5vdWdoIHNwYWNlIGZvciAke3NoaXAubmFtZX1gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcC54Y29vcmQgPSB4cG9zO1xuICAgICAgc2hpcC55Y29vcmQgPSB5cG9zO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcIkhvcml6b250YWxcIikge1xuICAgICAgICB0aGlzLmJvYXJkW3hwb3NdLmZpbGwoc2hpcCwgeXBvcywgeXBvcyArIHNoaXAubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSB4cG9zOyBpbmRleCA8IHhwb3MgKyBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdW3lwb3NdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2soeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5ib2FyZFt4cG9zXVt5cG9zXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJvYXJkW3hwb3NdW3lwb3NdLmhpdCgpO1xuICAgICAgcmV0dXJuIFwiSElUXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIkRVRFwiO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbiAgU2hpcCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQ7XG4gIC8vIHNoaXBEZXN0cm95ZXI6IERlc3Ryb3llcjtcbiAgLy8gc2hpcENhcnJpZXI6IENhcnJpZXI7XG4gIC8vIHNoaXBCYXR0bGVzaGlwOiBCYXR0bGVzaGlwO1xuICAvLyBzaGlwU3VibWFyaW5lOiBTdWJtYXJpbmU7XG4gIC8vIHNoaXBQYXRyb2xCb2F0OiBwYXRyb2xCb2F0O1xuICBzdW5rZW5TaGlwczogU2hpcFtdO1xuICBzaGlwczogeyBba2V5OiBzdHJpbmddOiBTaGlwIH07XG5cbiAgY29uc3RydWN0b3IoKSAvLyBzaGlwRGVzdHJveWVyOiBEZXN0cm95ZXIsXG4gIC8vIHNoaXBDYXJyaWVyOiBDYXJyaWVyLFxuICAvLyBzaGlwQmF0dGxlc2hpcDogQmF0dGxlc2hpcCxcbiAgLy8gc2hpcFN1Ym1hcmluZTogU3VibWFyaW5lLFxuICAvLyBzaGlwUGF0cm9sQm9hdDogcGF0cm9sQm9hdFxuICB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgLy8gdGhpcy5zaGlwRGVzdHJveWVyID0gc2hpcERlc3Ryb3llcjtcbiAgICAvLyB0aGlzLnNoaXBDYXJyaWVyID0gc2hpcENhcnJpZXI7XG4gICAgLy8gdGhpcy5zaGlwQmF0dGxlc2hpcCA9IHNoaXBCYXR0bGVzaGlwO1xuICAgIC8vIHRoaXMuc2hpcFN1Ym1hcmluZSA9IHNoaXBTdWJtYXJpbmU7XG4gICAgLy8gdGhpcy5zaGlwUGF0cm9sQm9hdCA9IHNoaXBQYXRyb2xCb2F0O1xuICAgIHRoaXMuc2hpcHMgPSB7XG4gICAgICBkZXN0cm95ZXI6IG5ldyBEZXN0cm95ZXIoKSxcbiAgICAgIGNhcnJpZXI6IG5ldyBDYXJyaWVyKCksXG4gICAgICBiYXR0bGVzaGlwOiBuZXcgQmF0dGxlc2hpcCgpLFxuICAgICAgc3VibWFyaW5lOiBuZXcgU3VibWFyaW5lKCksXG4gICAgICBwYXRyb2xCb2F0OiBuZXcgcGF0cm9sQm9hdCgpLFxuICAgIH07XG4gICAgdGhpcy5zdW5rZW5TaGlwcyA9IFtdO1xuICB9XG4gIGNoZWNrU2h1bmtTaGlwKHNoaXA6IFNoaXApIHtcbiAgICBpZiAodGhpcy5zdW5rZW5TaGlwcy5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1bmtlblNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGhpdHM6IG51bWJlcjtcbiAgc3VuazogYm9vbGVhbjtcbiAgeGNvb3JkOiBudW1iZXI7XG4gIHljb29yZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICB4Y29vcmQ6IG51bWJlciA9IDAsXG4gICAgeWNvb3JkOiBudW1iZXIgPSAwXG4gICkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnhjb29yZCA9IHhjb29yZDtcbiAgICB0aGlzLnljb29yZCA9IHljb29yZDtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmhpdHMrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2luaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc2luaygpIHtcbiAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ2FycmllciBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkNhcnJpZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXR0bGVzaGlwIGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQmF0dGxlc2hpcFwiLCA0KTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERlc3Ryb3llciBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkRlc3Ryb3llclwiLCA1KTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN1Ym1hcmluZSBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlN1Ym1hcmluZVwiLCAzKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIHBhdHJvbEJvYXQgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJQYXRyb2wgQm9hdFwiLCAyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7XG4gIFNoaXAsXG4gIEJhdHRsZXNoaXAsXG4gIENhcnJpZXIsXG4gIERlc3Ryb3llcixcbiAgU3VibWFyaW5lLFxuICBwYXRyb2xCb2F0LFxufSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5jb25zdCBnYW1lRW5naW5lID0gKCkgPT4ge1xuICBjb25zdCBnYW1lT25lID0gbmV3IEdhbWUoKTtcbiAgZnVuY3Rpb24gcGxhY2VTaGlwcyhwbGF5ZXI6IFBsYXllcikge1xuICAgIGNvbnN0IHNoaXBDb29yZHM6IHsgW2tleTogc3RyaW5nXTogW251bWJlciwgbnVtYmVyXSB9ID0ge307XG5cbiAgICBmb3IgKGNvbnN0IHNoaXBOYW1lIGluIHBsYXllci5zaGlwcykge1xuICAgICAgaWYgKHBsYXllci5zaGlwcy5oYXNPd25Qcm9wZXJ0eShzaGlwTmFtZSkpIHtcbiAgICAgICAgbGV0IHZhbGlkUGxhY2VtZW50ID0gZmFsc2U7XG4gICAgICAgIGxldCB4OiBudW1iZXIgPSAtMSxcbiAgICAgICAgICB5OiBudW1iZXIgPSAtMTtcblxuICAgICAgICB3aGlsZSAoIXZhbGlkUGxhY2VtZW50KSB7XG4gICAgICAgICAgeCA9IHByb21wdEZvckNvb3JkaW5hdGVzKGBYIGNvb3JkcyBmb3IgJHtzaGlwTmFtZX1gKSBhcyBudW1iZXI7XG4gICAgICAgICAgeSA9IHByb21wdEZvckNvb3JkaW5hdGVzKGBZIGNvb3JkcyBmb3IgJHtzaGlwTmFtZX1gKSBhcyBudW1iZXI7XG4gICAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQuY2hlY2tTaGlwKHBsYXllci5zaGlwc1tzaGlwTmFtZV0sIHgsIHkpKSB7XG4gICAgICAgICAgICB2YWxpZFBsYWNlbWVudCA9IHRydWU7XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcChwbGF5ZXIuc2hpcHNbc2hpcE5hbWVdLCB4LCB5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGBJbnZhbGlkIHBsYWNlbWVudCBmb3IgJHtzaGlwTmFtZX0uIFBsZWFzZSBlbnRlciBuZXcgY29vcmRpbmF0ZXMuYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcm9tcHRGb3JDb29yZGluYXRlcyhtZXNzYWdlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGxldCBpbnB1dDogc3RyaW5nIHwgbnVsbDtcbiAgICBsZXQgdmFsdWU6IG51bWJlcjtcblxuICAgIGRvIHtcbiAgICAgIGlucHV0ID0gcHJvbXB0KG1lc3NhZ2UpO1xuICAgICAgdmFsdWUgPSBpbnB1dCAhPT0gbnVsbCA/IHBhcnNlSW50KGlucHV0LCAxMCkgOiBOYU47XG4gICAgfSB3aGlsZSAoaXNOYU4odmFsdWUpKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIGdhbWVPbmUucGxheWVyMS5nYW1lYm9hcmQuc3dpdGNoT3JpZW50YXRpb24oKTtcbiAgcGxhY2VTaGlwcyhnYW1lT25lLnBsYXllcjEpO1xuICBjb25zb2xlLmxvZyhnYW1lT25lLnBsYXllcjEuZ2FtZWJvYXJkLmJvYXJkKTtcbn07XG5nYW1lRW5naW5lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=