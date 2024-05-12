/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        console.log(this.board);
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
                "Horizontal";
                break;
        }
    }
    checkShip(ship, xpos, ypos) {
        if (!this.checkShipPlacement(ship, xpos, ypos)) {
            return "ship Placement issue";
        }
        if (this.orientation == "Vertical") {
            return this.checkVertical(ship, xpos, ypos);
        }
        else {
            return this.checkHorizontal(ship, xpos, ypos);
        }
    }
    checkHorizontal(ship, xpos, ypos) {
        const tempArray = this.board[xpos].slice(ypos, ypos + ship.length);
        if (tempArray[0] === undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    checkVertical(ship, xpos, ypos) {
        const tempArray = [];
        for (let index = xpos; index < this.board.length; index++) {
            tempArray.push(this.board[xpos][ypos]);
        }
        if (tempArray[0] === undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    checkShipPlacement(ship, xpos, ypos) {
        if (this.orientation === "Horizontal") {
            if (ship.length + xpos > 9)
                return false;
            else
                return true;
        }
        else if (this.orientation === "Vertical") {
            if (ship.length + ypos > 9)
                return false;
            else
                return true;
        }
    }
    placeShip(ship, xpos, ypos) {
        if (!this.checkShip(ship, xpos, ypos)) {
            return "There is a ship docked";
        }
        else {
            ship.xcoord = xpos;
            ship.ycoord = ypos;
            if (this.orientation == "Horizontal") {
                this.board[xpos].fill(ship, ypos, ypos + ship.length);
            }
            else if (this.orientation == "Vertical") {
                for (let index = xpos; index < ship.length; index++) {
                    this.board[index][ypos] = ship;
                }
            }
        }
    }
    receiveAttack(xpos, ypos) { }
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.ts");


const game = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
const shipOne = new _ship__WEBPACK_IMPORTED_MODULE_1__.Destroyer();
const shipTwo = new _ship__WEBPACK_IMPORTED_MODULE_1__.Carrier();
const shipThree = new _ship__WEBPACK_IMPORTED_MODULE_1__.Submarine();
game.createBoard();
game.placeShip(shipTwo, 2, 4);
game.placeShip(shipOne, 4, 4);
game.switchOrientation();
game.placeShip(shipThree, 1, 3);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxudHlwZSBnYW1lYm9hcmRncmlkID0gKG51bWJlciB8IHN0cmluZyB8IFNoaXApW11bXTtcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGJvYXJkOiBnYW1lYm9hcmRncmlkO1xuICBvcmllbnRhdGlvbjogXCJIb3Jpem9udGFsXCIgfCBcIlZlcnRpY2FsXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gIH1cbiAgY3JlYXRlQm9hcmQoKTogZ2FtZWJvYXJkZ3JpZCB7XG4gICAgaWYgKHRoaXMuYm9hcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbShBcnJheSgxMCksICgpID0+IG5ldyBBcnJheSgxMCkpO1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG4gIHNob3dCb2FyZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKTtcbiAgfVxuICBzd2l0Y2hPcmllbnRhdGlvbigpIHtcbiAgICBzd2l0Y2ggKHRoaXMub3JpZW50YXRpb24pIHtcbiAgICAgIGNhc2UgXCJWZXJ0aWNhbFwiOlxuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkhvcml6b250YWxcIjpcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiVmVydGljYWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBcIkhvcml6b250YWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNoZWNrU2hpcChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jaGVja1NoaXBQbGFjZW1lbnQoc2hpcCwgeHBvcywgeXBvcykpIHtcbiAgICAgIHJldHVybiBcInNoaXAgUGxhY2VtZW50IGlzc3VlXCI7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja1ZlcnRpY2FsKHNoaXAsIHhwb3MsIHlwb3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja0hvcml6b250YWwoc2hpcCwgeHBvcywgeXBvcyk7XG4gICAgfVxuICB9XG4gIGNoZWNrSG9yaXpvbnRhbChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGNvbnN0IHRlbXBBcnJheSA9IHRoaXMuYm9hcmRbeHBvc10uc2xpY2UoeXBvcywgeXBvcyArIHNoaXAubGVuZ3RoKTtcbiAgICBpZiAodGVtcEFycmF5WzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNoZWNrVmVydGljYWwoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBjb25zdCB0ZW1wQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IHhwb3M7IGluZGV4IDwgdGhpcy5ib2FyZC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRlbXBBcnJheS5wdXNoKHRoaXMuYm9hcmRbeHBvc11beXBvc10pO1xuICAgIH1cbiAgICBpZiAodGVtcEFycmF5WzBdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXAubGVuZ3RoICsgeHBvcyA+IDkpIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwLmxlbmd0aCArIHlwb3MgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBwbGFjZVNoaXAoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tTaGlwKHNoaXAsIHhwb3MsIHlwb3MpKSB7XG4gICAgICByZXR1cm4gXCJUaGVyZSBpcyBhIHNoaXAgZG9ja2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAueGNvb3JkID0geHBvcztcbiAgICAgIHNoaXAueWNvb3JkID0geXBvcztcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4cG9zXS5maWxsKHNoaXAsIHlwb3MsIHlwb3MgKyBzaGlwLmxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdW3lwb3NdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRzOiBudW1iZXI7XG4gIHN1bms6IGJvb2xlYW47XG4gIHhjb29yZDogbnVtYmVyO1xuICB5Y29vcmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgeGNvb3JkOiBudW1iZXIgPSAwLFxuICAgIHljb29yZDogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy54Y29vcmQgPSB4Y29vcmQ7XG4gICAgdGhpcy55Y29vcmQgPSB5Y29vcmQ7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdHMgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbmsoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHNpbmsoKSB7XG4gICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENhcnJpZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJDYXJyaWVyXCIsIDUpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmF0dGxlc2hpcCBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJhdHRsZXNoaXBcIiwgNCk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJEZXN0cm95ZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTdWJtYXJpbmVcIiwgMyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBwYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiUGF0cm9sIEJvYXRcIiwgMik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBTaGlwLFxuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IHNoaXBPbmUgPSBuZXcgRGVzdHJveWVyKCk7XG5jb25zdCBzaGlwVHdvID0gbmV3IENhcnJpZXIoKTtcbmNvbnN0IHNoaXBUaHJlZSA9IG5ldyBTdWJtYXJpbmUoKTtcbmdhbWUuY3JlYXRlQm9hcmQoKTtcbmdhbWUucGxhY2VTaGlwKHNoaXBUd28sIDIsIDQpO1xuZ2FtZS5wbGFjZVNoaXAoc2hpcE9uZSwgNCwgNCk7XG5nYW1lLnN3aXRjaE9yaWVudGF0aW9uKCk7XG5nYW1lLnBsYWNlU2hpcChzaGlwVGhyZWUsIDEsIDMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9