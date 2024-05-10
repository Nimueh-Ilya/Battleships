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
        if (!tempArray) {
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
game.createBoard();
game.placeShip(shipTwo, 2, 4);
console.log(game.checkHorizontal(shipTwo, 2, 4));
game.placeShip(shipOne, 2, 4);
console.log(game.board);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7VUM3REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOd0M7QUFReEI7QUFDaEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxpREFBUyxFQUFFLENBQUM7QUFDN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSw0Q0FBUyxFQUFFLENBQUM7QUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSwwQ0FBTyxFQUFFLENBQUM7QUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxudHlwZSBnYW1lYm9hcmRncmlkID0gKG51bWJlciB8IHN0cmluZyB8IFNoaXApW11bXTtcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGJvYXJkOiBnYW1lYm9hcmRncmlkO1xuICBvcmllbnRhdGlvbjogXCJIb3Jpem9udGFsXCIgfCBcIlZlcnRpY2FsXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLm9yaWVudGF0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gIH1cbiAgY3JlYXRlQm9hcmQoKTogZ2FtZWJvYXJkZ3JpZCB7XG4gICAgaWYgKHRoaXMuYm9hcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbShBcnJheSgxMCksICgpID0+IG5ldyBBcnJheSgxMCkpO1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG4gIHNob3dCb2FyZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKTtcbiAgfVxuICBjaGVja1NoaXAoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIHhwb3MsIHlwb3MpKSB7XG4gICAgICByZXR1cm4gXCJzaGlwIFBsYWNlbWVudCBpc3N1ZVwiO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09IFwiVmVydGljYWxcIikge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tWZXJ0aWNhbChzaGlwLCB4cG9zLCB5cG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tIb3Jpem9udGFsKHNoaXAsIHhwb3MsIHlwb3MpO1xuICAgIH1cbiAgfVxuICBjaGVja0hvcml6b250YWwoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBjb25zdCB0ZW1wQXJyYXkgPSB0aGlzLmJvYXJkW3hwb3NdLnNsaWNlKHlwb3MsIHlwb3MgKyBzaGlwLmxlbmd0aCk7XG4gICAgaWYgKHRlbXBBcnJheVswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBjaGVja1ZlcnRpY2FsKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgY29uc3QgdGVtcEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggPSB4cG9zOyBpbmRleCA8IHRoaXMuYm9hcmQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0ZW1wQXJyYXkucHVzaCh0aGlzLmJvYXJkW3hwb3NdW3lwb3NdKTtcbiAgICB9XG4gICAgaWYgKCF0ZW1wQXJyYXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGNoZWNrU2hpcFBsYWNlbWVudChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBcIkhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXAubGVuZ3RoICsgeHBvcyA+IDkpIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChzaGlwLmxlbmd0aCArIHlwb3MgPiA5KSByZXR1cm4gZmFsc2U7XG4gICAgICBlbHNlIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICBwbGFjZVNoaXAoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tTaGlwKHNoaXAsIHhwb3MsIHlwb3MpKSB7XG4gICAgICByZXR1cm4gXCJUaGVyZSBpcyBhIHNoaXAgZG9ja2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXAueGNvb3JkID0geHBvcztcbiAgICAgIHNoaXAueWNvb3JkID0geXBvcztcblxuICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJIb3Jpem9udGFsXCIpIHtcbiAgICAgICAgdGhpcy5ib2FyZFt4cG9zXS5maWxsKHNoaXAsIHlwb3MsIHlwb3MgKyBzaGlwLmxlbmd0aCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gXCJWZXJ0aWNhbFwiKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdW3lwb3NdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRzOiBudW1iZXI7XG4gIHN1bms6IGJvb2xlYW47XG4gIHhjb29yZDogbnVtYmVyO1xuICB5Y29vcmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgeGNvb3JkOiBudW1iZXIgPSAwLFxuICAgIHljb29yZDogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy54Y29vcmQgPSB4Y29vcmQ7XG4gICAgdGhpcy55Y29vcmQgPSB5Y29vcmQ7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdHMgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbmsoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHNpbmsoKSB7XG4gICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENhcnJpZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJDYXJyaWVyXCIsIDUpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmF0dGxlc2hpcCBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJhdHRsZXNoaXBcIiwgNCk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJEZXN0cm95ZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTdWJtYXJpbmVcIiwgMyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBwYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiUGF0cm9sIEJvYXRcIiwgMik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBTaGlwLFxuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IHNoaXBPbmUgPSBuZXcgRGVzdHJveWVyKCk7XG5jb25zdCBzaGlwVHdvID0gbmV3IENhcnJpZXIoKTtcbmdhbWUuY3JlYXRlQm9hcmQoKTtcbmdhbWUucGxhY2VTaGlwKHNoaXBUd28sIDIsIDQpO1xuY29uc29sZS5sb2coZ2FtZS5jaGVja0hvcml6b250YWwoc2hpcFR3bywgMiwgNCkpO1xuZ2FtZS5wbGFjZVNoaXAoc2hpcE9uZSwgMiwgNCk7XG5jb25zb2xlLmxvZyhnYW1lLmJvYXJkKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==