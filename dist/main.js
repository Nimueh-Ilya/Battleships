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
/* harmony export */   game: () => (/* binding */ game)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.ts");



class game {
    constructor() {
        this.gameStatus = "";
        this.gameTurn = "";
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
        this.player1Destroyer = new _ship__WEBPACK_IMPORTED_MODULE_2__.Destroyer();
        this.player1Carrier = new _ship__WEBPACK_IMPORTED_MODULE_2__.Carrier();
        this.player1Battleship = new _ship__WEBPACK_IMPORTED_MODULE_2__.Battleship();
        this.player1Submarine = new _ship__WEBPACK_IMPORTED_MODULE_2__.Submarine();
        this.player1PatrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_2__.patrolBoat();
        this.player2Destroyer = new _ship__WEBPACK_IMPORTED_MODULE_2__.Destroyer();
        this.player2Carrier = new _ship__WEBPACK_IMPORTED_MODULE_2__.Carrier();
        this.player2Battleship = new _ship__WEBPACK_IMPORTED_MODULE_2__.Battleship();
        this.player2Submarine = new _ship__WEBPACK_IMPORTED_MODULE_2__.Submarine();
        this.player2PatrolBoat = new _ship__WEBPACK_IMPORTED_MODULE_2__.patrolBoat();
        this.player1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(this.player1Destroyer, this.player1Carrier, this.player1Battleship, this.player1Submarine, this.player1PatrolBoat);
        this.player2 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(this.player1Destroyer, this.player1Carrier, this.player1Battleship, this.player1Submarine, this.player1PatrolBoat);
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

class Player {
    constructor(shipDestroyer, shipCarrier, shipBattleship, shipSubmarine, shipPatrolBoat) {
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
        this.shipDestroyer = shipDestroyer;
        this.shipCarrier = shipCarrier;
        this.shipBattleship = shipBattleship;
        this.shipSubmarine = shipSubmarine;
        this.shipPatrolBoat = shipPatrolBoat;
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
    const gameOne = new _game__WEBPACK_IMPORTED_MODULE_0__.game();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0c4QjtBQUM5QixNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7SUFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1Q0FBSSxFQUFFLENBQUM7QUFDN0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvcGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgQmF0dGxlc2hpcCwgQ2FycmllciwgRGVzdHJveWVyLCBTdWJtYXJpbmUsIHBhdHJvbEJvYXQgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBnYW1lIHtcbiAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQ7XG4gIHBsYXllcjE6IFBsYXllcjtcbiAgcGxheWVyMjogUGxheWVyO1xuICBwbGF5ZXIxRGVzdHJveWVyOiBEZXN0cm95ZXI7XG4gIHBsYXllcjFDYXJyaWVyOiBDYXJyaWVyO1xuICBwbGF5ZXIxQmF0dGxlc2hpcDogQmF0dGxlc2hpcDtcbiAgcGxheWVyMVN1Ym1hcmluZTogU3VibWFyaW5lO1xuICBwbGF5ZXIxUGF0cm9sQm9hdDogcGF0cm9sQm9hdDtcbiAgcGxheWVyMkRlc3Ryb3llcjogRGVzdHJveWVyO1xuICBwbGF5ZXIyQ2FycmllcjogQ2FycmllcjtcbiAgcGxheWVyMkJhdHRsZXNoaXA6IEJhdHRsZXNoaXA7XG4gIHBsYXllcjJTdWJtYXJpbmU6IFN1Ym1hcmluZTtcbiAgcGxheWVyMlBhdHJvbEJvYXQ6IHBhdHJvbEJvYXQ7XG4gIGdhbWVUdXJuOiBcIlBsYXllciAxXCIgfCBcIlBsYXllciAyXCIgfCBcIlwiO1xuICBnYW1lU3RhdHVzOiBcIlBMQVlFUjEgV0lOXCIgfCBcIlBMQVlFUjIgV0lOXCIgfCBcIlwiO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWVTdGF0dXMgPSBcIlwiO1xuICAgIHRoaXMuZ2FtZVR1cm4gPSBcIlwiO1xuICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgIHRoaXMucGxheWVyMURlc3Ryb3llciA9IG5ldyBEZXN0cm95ZXIoKTtcbiAgICB0aGlzLnBsYXllcjFDYXJyaWVyID0gbmV3IENhcnJpZXIoKTtcbiAgICB0aGlzLnBsYXllcjFCYXR0bGVzaGlwID0gbmV3IEJhdHRsZXNoaXAoKTtcbiAgICB0aGlzLnBsYXllcjFTdWJtYXJpbmUgPSBuZXcgU3VibWFyaW5lKCk7XG4gICAgdGhpcy5wbGF5ZXIxUGF0cm9sQm9hdCA9IG5ldyBwYXRyb2xCb2F0KCk7XG4gICAgdGhpcy5wbGF5ZXIyRGVzdHJveWVyID0gbmV3IERlc3Ryb3llcigpO1xuICAgIHRoaXMucGxheWVyMkNhcnJpZXIgPSBuZXcgQ2FycmllcigpO1xuICAgIHRoaXMucGxheWVyMkJhdHRsZXNoaXAgPSBuZXcgQmF0dGxlc2hpcCgpO1xuICAgIHRoaXMucGxheWVyMlN1Ym1hcmluZSA9IG5ldyBTdWJtYXJpbmUoKTtcbiAgICB0aGlzLnBsYXllcjJQYXRyb2xCb2F0ID0gbmV3IHBhdHJvbEJvYXQoKTtcbiAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKFxuICAgICAgdGhpcy5wbGF5ZXIxRGVzdHJveWVyLFxuICAgICAgdGhpcy5wbGF5ZXIxQ2FycmllcixcbiAgICAgIHRoaXMucGxheWVyMUJhdHRsZXNoaXAsXG4gICAgICB0aGlzLnBsYXllcjFTdWJtYXJpbmUsXG4gICAgICB0aGlzLnBsYXllcjFQYXRyb2xCb2F0XG4gICAgKTtcbiAgICB0aGlzLnBsYXllcjIgPSBuZXcgUGxheWVyKFxuICAgICAgdGhpcy5wbGF5ZXIxRGVzdHJveWVyLFxuICAgICAgdGhpcy5wbGF5ZXIxQ2FycmllcixcbiAgICAgIHRoaXMucGxheWVyMUJhdHRsZXNoaXAsXG4gICAgICB0aGlzLnBsYXllcjFTdWJtYXJpbmUsXG4gICAgICB0aGlzLnBsYXllcjFQYXRyb2xCb2F0XG4gICAgKTtcbiAgfVxuICBjaGVja1dpbihwbGF5ZXI6IFBsYXllcikge1xuICAgIGlmIChwbGF5ZXIuc3Vua2VuU2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgICBpZiAocGxheWVyID09PSB0aGlzLnBsYXllcjEpIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gXCJQTEFZRVIxIFdJTlwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBcIlBMQVlFUjIgV0lOXCI7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY2hhbmdlVHVybigpIHtcbiAgICBpZiAodGhpcy5nYW1lVHVybiAhPT0gXCJQbGF5ZXIgMlwiKSB7XG4gICAgICB0aGlzLmdhbWVUdXJuID0gXCJQbGF5ZXIgMlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdhbWVUdXJuID0gXCJQbGF5ZXIgMVwiO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxudHlwZSBnYW1lYm9hcmRncmlkID0gU2hpcFtdW107XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICBib2FyZDogZ2FtZWJvYXJkZ3JpZDtcbiAgb3JpZW50YXRpb246IFwiSG9yaXpvbnRhbFwiIHwgXCJWZXJ0aWNhbFwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICB9XG4gIGNyZWF0ZUJvYXJkKCk6IGdhbWVib2FyZGdyaWQge1xuICAgIGlmICh0aGlzLmJvYXJkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBuZXcgQXJyYXkoMTApKTtcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxuICBzaG93Qm9hcmQoKSB7XG4gICAgY29uc29sZS50YWJsZSh0aGlzLmJvYXJkKTtcbiAgfVxuICBzd2l0Y2hPcmllbnRhdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMub3JpZW50YXRpb24pIHtcbiAgICAgIGNhc2UgXCJWZXJ0aWNhbFwiOlxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkhvcml6b250YWxcIjpcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiVmVydGljYWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjaGVja1NoaXAoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIHhwb3MsIHlwb3MpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNoaXAgUGxhY2VtZW50IGlzc3VlXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrVmVydGljYWwoc2hpcCwgeHBvcywgeXBvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrSG9yaXpvbnRhbChzaGlwLCB4cG9zLCB5cG9zKTtcbiAgICB9XG4gIH1cbiAgY2hlY2tIb3Jpem9udGFsKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSB5cG9zOyBpbmRleCA8IHlwb3MgKyBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeHBvc11baW5kZXhdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBjaGVja1ZlcnRpY2FsKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSB4cG9zOyBpbmRleCA8IHhwb3MgKyBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKHRoaXMuYm9hcmRbaW5kZXhdW3lwb3NdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXAubGVuZ3RoICsgeXBvcyA+IDkpIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwLmxlbmd0aCArIHhwb3MgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBwbGFjZVNoaXAoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tTaGlwKHNoaXAsIHhwb3MsIHlwb3MpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAueGNvb3JkID0geHBvcztcbiAgICAgIHNoaXAueWNvb3JkID0geXBvcztcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4cG9zXS5maWxsKHNoaXAsIHlwb3MsIHlwb3MgKyBzaGlwLmxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCB4cG9zICsgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICB0aGlzLmJvYXJkW2luZGV4XVt5cG9zXSA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVjZWl2ZUF0dGFjayh4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmJvYXJkW3hwb3NdW3lwb3NdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuYm9hcmRbeHBvc11beXBvc10uaGl0KCk7XG4gICAgICByZXR1cm4gXCJISVRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiRFVEXCI7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7XG4gIEJhdHRsZXNoaXAsXG4gIENhcnJpZXIsXG4gIERlc3Ryb3llcixcbiAgU3VibWFyaW5lLFxuICBwYXRyb2xCb2F0LFxuICBTaGlwLFxufSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBnYW1lYm9hcmQ6IEdhbWVib2FyZDtcbiAgc2hpcERlc3Ryb3llcjogRGVzdHJveWVyO1xuICBzaGlwQ2FycmllcjogQ2FycmllcjtcbiAgc2hpcEJhdHRsZXNoaXA6IEJhdHRsZXNoaXA7XG4gIHNoaXBTdWJtYXJpbmU6IFN1Ym1hcmluZTtcbiAgc2hpcFBhdHJvbEJvYXQ6IHBhdHJvbEJvYXQ7XG4gIHN1bmtlblNoaXBzOiBTaGlwW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc2hpcERlc3Ryb3llcjogRGVzdHJveWVyLFxuICAgIHNoaXBDYXJyaWVyOiBDYXJyaWVyLFxuICAgIHNoaXBCYXR0bGVzaGlwOiBCYXR0bGVzaGlwLFxuICAgIHNoaXBTdWJtYXJpbmU6IFN1Ym1hcmluZSxcbiAgICBzaGlwUGF0cm9sQm9hdDogcGF0cm9sQm9hdFxuICApIHtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLnNoaXBEZXN0cm95ZXIgPSBzaGlwRGVzdHJveWVyO1xuICAgIHRoaXMuc2hpcENhcnJpZXIgPSBzaGlwQ2FycmllcjtcbiAgICB0aGlzLnNoaXBCYXR0bGVzaGlwID0gc2hpcEJhdHRsZXNoaXA7XG4gICAgdGhpcy5zaGlwU3VibWFyaW5lID0gc2hpcFN1Ym1hcmluZTtcbiAgICB0aGlzLnNoaXBQYXRyb2xCb2F0ID0gc2hpcFBhdHJvbEJvYXQ7XG4gICAgdGhpcy5zdW5rZW5TaGlwcyA9IFtdO1xuICB9XG4gIGNoZWNrU2h1bmtTaGlwKHNoaXA6IFNoaXApIHtcbiAgICBpZiAodGhpcy5zdW5rZW5TaGlwcy5pbmNsdWRlcyhzaGlwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1bmtlblNoaXBzLnB1c2goc2hpcCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGhpdHM6IG51bWJlcjtcbiAgc3VuazogYm9vbGVhbjtcbiAgeGNvb3JkOiBudW1iZXI7XG4gIHljb29yZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICB4Y29vcmQ6IG51bWJlciA9IDAsXG4gICAgeWNvb3JkOiBudW1iZXIgPSAwXG4gICkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnhjb29yZCA9IHhjb29yZDtcbiAgICB0aGlzLnljb29yZCA9IHljb29yZDtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmhpdHMrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2luaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc2luaygpIHtcbiAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ2FycmllciBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkNhcnJpZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXR0bGVzaGlwIGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQmF0dGxlc2hpcFwiLCA0KTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIERlc3Ryb3llciBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkRlc3Ryb3llclwiLCA1KTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIFN1Ym1hcmluZSBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIlN1Ym1hcmluZVwiLCAzKTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIHBhdHJvbEJvYXQgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJQYXRyb2wgQm9hdFwiLCAyKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7XG4gIFNoaXAsXG4gIEJhdHRsZXNoaXAsXG4gIENhcnJpZXIsXG4gIERlc3Ryb3llcixcbiAgU3VibWFyaW5lLFxuICBwYXRyb2xCb2F0LFxufSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBnYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuY29uc3QgZ2FtZUVuZ2luZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZU9uZSA9IG5ldyBnYW1lKCk7XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9