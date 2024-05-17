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
    const shipList = [
        "Destroyer",
        "Carrier",
        "Battleship",
        "Submarine",
        "Patrol Boat",
    ];
    const shipCoords = shipList.map((ship) => {
        return [prompt(`X coords for ${ship}`), prompt(`Y coords for ${ship}`)];
    });
    console.log(shipCoords);
    // gameOne.player1.shipDestroyer;
    // while (gameOne.gameStatus === "") {}
};
gameEngine();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNOO0FBQzZDO0FBRXhFLE1BQU0sSUFBSTtJQWdCZjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxpREFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksNENBQVMsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwwQ0FBTyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksNkNBQVUsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDRDQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSw2Q0FBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksNENBQVMsRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwwQ0FBTyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksNkNBQVUsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLDRDQUFTLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSw2Q0FBVSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDJDQUFNLENBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLGNBQWMsRUFDbkIsSUFBSSxDQUFDLGlCQUFpQixFQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSwyQ0FBTSxDQUN2QixJQUFJLENBQUMsZ0JBQWdCLEVBQ3JCLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxpQkFBaUIsRUFDdEIsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBQ0QsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNwQyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO2dCQUNoQyxPQUFPO1lBQ1QsQ0FBQztpQkFBTSxDQUFDO2dCQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO2dCQUNoQyxPQUFPO1lBQ1QsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0QsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxVQUFVLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUM3QixDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7OztBQy9ETSxNQUFNLFNBQVM7SUFJcEI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxTQUFTO1FBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELGlCQUFpQjtRQUNmLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pCLEtBQUssVUFBVTtnQkFDYixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztnQkFDaEMsTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsTUFBTTtZQUNSO2dCQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDO2dCQUNoQyxNQUFNO1FBQ1YsQ0FBQztJQUNILENBQUM7SUFDRCxTQUFTLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxJQUFZO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxFQUFFLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUNELGVBQWUsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDcEQsS0FBSyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsS0FBSyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDM0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLFNBQVMsRUFBRSxDQUFDO2dCQUMxQyxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsYUFBYSxDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUNsRCxLQUFLLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUMzRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxJQUFVLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDdkQsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFlBQVksRUFBRSxDQUFDO1lBQ3RDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQztnQkFBRSxPQUFPLEtBQUssQ0FBQzs7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFDO1FBQ25CLENBQUM7YUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDM0MsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDO2dCQUFFLE9BQU8sS0FBSyxDQUFDOztnQkFDcEMsT0FBTyxJQUFJLENBQUM7UUFDbkIsQ0FBQztJQUNILENBQUM7SUFDRCxTQUFTLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxJQUFZO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLFlBQVksRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsQ0FBQztpQkFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQzFDLEtBQUssSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO29CQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDakMsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUNELGFBQWEsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUN0QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM3QixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7YUFBTSxDQUFDO1lBQ04sT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0lBQ0gsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEd1QztBQVVqQyxNQUFNLE1BQU07SUFTakIsWUFDRSxhQUF3QixFQUN4QixXQUFvQixFQUNwQixjQUEwQixFQUMxQixhQUF3QixFQUN4QixjQUEwQjtRQUUxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaURBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxjQUFjLENBQUMsSUFBVTtRQUN2QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDcEMsT0FBTztRQUNULENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsQ0FBQztJQUNILENBQUM7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q00sTUFBTSxJQUFJO0lBUWYsWUFDRSxJQUFZLEVBQ1osTUFBYyxFQUNkLFNBQWlCLENBQUMsRUFDbEIsU0FBaUIsQ0FBQztRQUVsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxHQUFHO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPO0lBQ1QsQ0FBQztJQUNELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUFDTSxNQUFNLE9BQVEsU0FBUSxJQUFJO0lBQy9CO1FBQ0UsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Y7QUFDTSxNQUFNLFVBQVcsU0FBUSxJQUFJO0lBQ2xDO1FBQ0UsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0Y7QUFDTSxNQUFNLFNBQVUsU0FBUSxJQUFJO0lBQ2pDO1FBQ0UsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFDTSxNQUFNLFNBQVUsU0FBUSxJQUFJO0lBQ2pDO1FBQ0UsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0Y7QUFDTSxNQUFNLFVBQVcsU0FBUSxJQUFJO0lBQ2xDO1FBQ0UsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7Ozs7Ozs7VUMvREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ0c4QjtBQUU5QixNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUU7SUFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSx1Q0FBSSxFQUFFLENBQUM7SUFDM0IsTUFBTSxRQUFRLEdBQUc7UUFDZixXQUFXO1FBQ1gsU0FBUztRQUNULFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtLQUNkLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDdkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFeEIsaUNBQWlDO0lBQ2pDLHVDQUF1QztBQUN6QyxDQUFDLENBQUM7QUFDRixVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IEJhdHRsZXNoaXAsIENhcnJpZXIsIERlc3Ryb3llciwgU3VibWFyaW5lLCBwYXRyb2xCb2F0IH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgZ2FtZSB7XG4gIGdhbWVib2FyZDogR2FtZWJvYXJkO1xuICBwbGF5ZXIxOiBQbGF5ZXI7XG4gIHBsYXllcjI6IFBsYXllcjtcbiAgcGxheWVyMURlc3Ryb3llcjogRGVzdHJveWVyO1xuICBwbGF5ZXIxQ2FycmllcjogQ2FycmllcjtcbiAgcGxheWVyMUJhdHRsZXNoaXA6IEJhdHRsZXNoaXA7XG4gIHBsYXllcjFTdWJtYXJpbmU6IFN1Ym1hcmluZTtcbiAgcGxheWVyMVBhdHJvbEJvYXQ6IHBhdHJvbEJvYXQ7XG4gIHBsYXllcjJEZXN0cm95ZXI6IERlc3Ryb3llcjtcbiAgcGxheWVyMkNhcnJpZXI6IENhcnJpZXI7XG4gIHBsYXllcjJCYXR0bGVzaGlwOiBCYXR0bGVzaGlwO1xuICBwbGF5ZXIyU3VibWFyaW5lOiBTdWJtYXJpbmU7XG4gIHBsYXllcjJQYXRyb2xCb2F0OiBwYXRyb2xCb2F0O1xuICBnYW1lVHVybjogXCJQbGF5ZXIgMVwiIHwgXCJQbGF5ZXIgMlwiIHwgXCJcIjtcbiAgZ2FtZVN0YXR1czogXCJQTEFZRVIxIFdJTlwiIHwgXCJQTEFZRVIyIFdJTlwiIHwgXCJcIjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYW1lU3RhdHVzID0gXCJcIjtcbiAgICB0aGlzLmdhbWVUdXJuID0gXCJcIjtcbiAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICB0aGlzLnBsYXllcjFEZXN0cm95ZXIgPSBuZXcgRGVzdHJveWVyKCk7XG4gICAgdGhpcy5wbGF5ZXIxQ2FycmllciA9IG5ldyBDYXJyaWVyKCk7XG4gICAgdGhpcy5wbGF5ZXIxQmF0dGxlc2hpcCA9IG5ldyBCYXR0bGVzaGlwKCk7XG4gICAgdGhpcy5wbGF5ZXIxU3VibWFyaW5lID0gbmV3IFN1Ym1hcmluZSgpO1xuICAgIHRoaXMucGxheWVyMVBhdHJvbEJvYXQgPSBuZXcgcGF0cm9sQm9hdCgpO1xuICAgIHRoaXMucGxheWVyMkRlc3Ryb3llciA9IG5ldyBEZXN0cm95ZXIoKTtcbiAgICB0aGlzLnBsYXllcjJDYXJyaWVyID0gbmV3IENhcnJpZXIoKTtcbiAgICB0aGlzLnBsYXllcjJCYXR0bGVzaGlwID0gbmV3IEJhdHRsZXNoaXAoKTtcbiAgICB0aGlzLnBsYXllcjJTdWJtYXJpbmUgPSBuZXcgU3VibWFyaW5lKCk7XG4gICAgdGhpcy5wbGF5ZXIyUGF0cm9sQm9hdCA9IG5ldyBwYXRyb2xCb2F0KCk7XG4gICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcihcbiAgICAgIHRoaXMucGxheWVyMURlc3Ryb3llcixcbiAgICAgIHRoaXMucGxheWVyMUNhcnJpZXIsXG4gICAgICB0aGlzLnBsYXllcjFCYXR0bGVzaGlwLFxuICAgICAgdGhpcy5wbGF5ZXIxU3VibWFyaW5lLFxuICAgICAgdGhpcy5wbGF5ZXIxUGF0cm9sQm9hdFxuICAgICk7XG4gICAgdGhpcy5wbGF5ZXIyID0gbmV3IFBsYXllcihcbiAgICAgIHRoaXMucGxheWVyMURlc3Ryb3llcixcbiAgICAgIHRoaXMucGxheWVyMUNhcnJpZXIsXG4gICAgICB0aGlzLnBsYXllcjFCYXR0bGVzaGlwLFxuICAgICAgdGhpcy5wbGF5ZXIxU3VibWFyaW5lLFxuICAgICAgdGhpcy5wbGF5ZXIxUGF0cm9sQm9hdFxuICAgICk7XG4gIH1cbiAgY2hlY2tXaW4ocGxheWVyOiBQbGF5ZXIpIHtcbiAgICBpZiAocGxheWVyLnN1bmtlblNoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgaWYgKHBsYXllciA9PT0gdGhpcy5wbGF5ZXIxKSB7XG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IFwiUExBWUVSMSBXSU5cIjtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5nYW1lU3RhdHVzID0gXCJQTEFZRVIyIFdJTlwiO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNoYW5nZVR1cm4oKSB7XG4gICAgaWYgKHRoaXMuZ2FtZVR1cm4gIT09IFwiUGxheWVyIDJcIikge1xuICAgICAgdGhpcy5nYW1lVHVybiA9IFwiUGxheWVyIDJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYW1lVHVybiA9IFwiUGxheWVyIDFcIjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgZ2FtZWJvYXJkZ3JpZCA9IFNoaXBbXVtdO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgYm9hcmQ6IGdhbWVib2FyZGdyaWQ7XG4gIG9yaWVudGF0aW9uOiBcIkhvcml6b250YWxcIiB8IFwiVmVydGljYWxcIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIjtcbiAgfVxuICBjcmVhdGVCb2FyZCgpOiBnYW1lYm9hcmRncmlkIHtcbiAgICBpZiAodGhpcy5ib2FyZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gbmV3IEFycmF5KDEwKSk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgc2hvd0JvYXJkKCkge1xuICAgIGNvbnNvbGUudGFibGUodGhpcy5ib2FyZCk7XG4gIH1cbiAgc3dpdGNoT3JpZW50YXRpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLm9yaWVudGF0aW9uKSB7XG4gICAgICBjYXNlIFwiVmVydGljYWxcIjpcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb3Jpem9udGFsXCI6XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBcIlZlcnRpY2FsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgY2hlY2tTaGlwKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrU2hpcFBsYWNlbWVudChzaGlwLCB4cG9zLCB5cG9zKSkge1xuICAgICAgY29uc29sZS5sb2coXCJzaGlwIFBsYWNlbWVudCBpc3N1ZVwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja1ZlcnRpY2FsKHNoaXAsIHhwb3MsIHlwb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja0hvcml6b250YWwoc2hpcCwgeHBvcywgeXBvcyk7XG4gICAgfVxuICB9XG4gIGNoZWNrSG9yaXpvbnRhbChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGZvciAobGV0IGluZGV4ID0geXBvczsgaW5kZXggPCB5cG9zICsgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW3hwb3NdW2luZGV4XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgY2hlY2tWZXJ0aWNhbChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCB4cG9zICsgc2hpcC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh0aGlzLmJvYXJkW2luZGV4XVt5cG9zXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjaGVja1NoaXBQbGFjZW1lbnQoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChzaGlwLmxlbmd0aCArIHlwb3MgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcC5sZW5ndGggKyB4cG9zID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcGxhY2VTaGlwKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLmNoZWNrU2hpcChzaGlwLCB4cG9zLCB5cG9zKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwLnhjb29yZCA9IHhwb3M7XG4gICAgICBzaGlwLnljb29yZCA9IHlwb3M7XG5cbiAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbeHBvc10uZmlsbChzaGlwLCB5cG9zLCB5cG9zICsgc2hpcC5sZW5ndGgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiVmVydGljYWxcIikge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IHhwb3M7IGluZGV4IDwgeHBvcyArIHNoaXAubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgdGhpcy5ib2FyZFtpbmRleF1beXBvc10gPSBzaGlwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2soeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5ib2FyZFt4cG9zXVt5cG9zXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmJvYXJkW3hwb3NdW3lwb3NdLmhpdCgpO1xuICAgICAgcmV0dXJuIFwiSElUXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIkRVRFwiO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbiAgU2hpcCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgZ2FtZWJvYXJkOiBHYW1lYm9hcmQ7XG4gIHNoaXBEZXN0cm95ZXI6IERlc3Ryb3llcjtcbiAgc2hpcENhcnJpZXI6IENhcnJpZXI7XG4gIHNoaXBCYXR0bGVzaGlwOiBCYXR0bGVzaGlwO1xuICBzaGlwU3VibWFyaW5lOiBTdWJtYXJpbmU7XG4gIHNoaXBQYXRyb2xCb2F0OiBwYXRyb2xCb2F0O1xuICBzdW5rZW5TaGlwczogU2hpcFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHNoaXBEZXN0cm95ZXI6IERlc3Ryb3llcixcbiAgICBzaGlwQ2FycmllcjogQ2FycmllcixcbiAgICBzaGlwQmF0dGxlc2hpcDogQmF0dGxlc2hpcCxcbiAgICBzaGlwU3VibWFyaW5lOiBTdWJtYXJpbmUsXG4gICAgc2hpcFBhdHJvbEJvYXQ6IHBhdHJvbEJvYXRcbiAgKSB7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgdGhpcy5zaGlwRGVzdHJveWVyID0gc2hpcERlc3Ryb3llcjtcbiAgICB0aGlzLnNoaXBDYXJyaWVyID0gc2hpcENhcnJpZXI7XG4gICAgdGhpcy5zaGlwQmF0dGxlc2hpcCA9IHNoaXBCYXR0bGVzaGlwO1xuICAgIHRoaXMuc2hpcFN1Ym1hcmluZSA9IHNoaXBTdWJtYXJpbmU7XG4gICAgdGhpcy5zaGlwUGF0cm9sQm9hdCA9IHNoaXBQYXRyb2xCb2F0O1xuICAgIHRoaXMuc3Vua2VuU2hpcHMgPSBbXTtcbiAgfVxuICBjaGVja1NodW5rU2hpcChzaGlwOiBTaGlwKSB7XG4gICAgaWYgKHRoaXMuc3Vua2VuU2hpcHMuaW5jbHVkZXMoc2hpcCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdW5rZW5TaGlwcy5wdXNoKHNoaXApO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRzOiBudW1iZXI7XG4gIHN1bms6IGJvb2xlYW47XG4gIHhjb29yZDogbnVtYmVyO1xuICB5Y29vcmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgeGNvb3JkOiBudW1iZXIgPSAwLFxuICAgIHljb29yZDogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy54Y29vcmQgPSB4Y29vcmQ7XG4gICAgdGhpcy55Y29vcmQgPSB5Y29vcmQ7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdHMgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaXRzKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbmsoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHNpbmsoKSB7XG4gICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENhcnJpZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJDYXJyaWVyXCIsIDUpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmF0dGxlc2hpcCBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJhdHRsZXNoaXBcIiwgNCk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJEZXN0cm95ZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTdWJtYXJpbmVcIiwgMyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBwYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiUGF0cm9sIEJvYXRcIiwgMik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBTaGlwLFxuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgZ2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuY29uc3QgZ2FtZUVuZ2luZSA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZU9uZSA9IG5ldyBnYW1lKCk7XG4gIGNvbnN0IHNoaXBMaXN0ID0gW1xuICAgIFwiRGVzdHJveWVyXCIsXG4gICAgXCJDYXJyaWVyXCIsXG4gICAgXCJCYXR0bGVzaGlwXCIsXG4gICAgXCJTdWJtYXJpbmVcIixcbiAgICBcIlBhdHJvbCBCb2F0XCIsXG4gIF07XG5cbiAgY29uc3Qgc2hpcENvb3JkcyA9IHNoaXBMaXN0Lm1hcCgoc2hpcCkgPT4ge1xuICAgIHJldHVybiBbcHJvbXB0KGBYIGNvb3JkcyBmb3IgJHtzaGlwfWApLCBwcm9tcHQoYFkgY29vcmRzIGZvciAke3NoaXB9YCldO1xuICB9KTtcbiAgY29uc29sZS5sb2coc2hpcENvb3Jkcyk7XG5cbiAgLy8gZ2FtZU9uZS5wbGF5ZXIxLnNoaXBEZXN0cm95ZXI7XG4gIC8vIHdoaWxlIChnYW1lT25lLmdhbWVTdGF0dXMgPT09IFwiXCIpIHt9XG59O1xuZ2FtZUVuZ2luZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9