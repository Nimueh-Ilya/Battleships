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
    checkShip(xpos, ypos) {
        if (!this.board[xpos][ypos]) {
            return false;
        }
        else {
            return true;
        }
    }
    checkHorizontal(xpos, ypos, ship) {
        const tempArray = this.board[xpos].slice(ypos, ship.length);
        if (!tempArray) {
            return true;
        }
        else
            return false;
    }
    checkVertical(xpos, ypos, ship) {
        const tempArray = [];
        for (let index = xpos; index < this.board.length; index++) {
            tempArray.push(this.board[xpos][ypos]);
        }
        if (!tempArray) {
            return true;
        }
        else
            return false;
    }
    placeShip(ship, xpos, ypos) {
        if (this.checkShip(xpos, ypos)) {
            return "There is a ship docked";
        }
        else {
            ship.xcoord = xpos;
            ship.ycoord = ypos;
            this.board[xpos][ypos] = ship;
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


const newGame = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
newGame.createBoard();
newGame.showBoard();
console.log(newGame.checkShip(2, 4));
newGame.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__.Carrier(), 2, 4);
console.log(newGame.checkShip(2, 4));
newGame.showBoard();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQVF4QjtBQUNoQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlEQUFTLEVBQUUsQ0FBQztBQUNoQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdEIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksMENBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG50eXBlIGdhbWVib2FyZGdyaWQgPSAobnVtYmVyIHwgc3RyaW5nIHwgU2hpcClbXVtdO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgYm9hcmQ6IGdhbWVib2FyZGdyaWQ7XG4gIG9yaWVudGF0aW9uOiBcIkhvcml6b250YWxcIiB8IFwiVmVydGljYWxcIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIjtcbiAgfVxuICBjcmVhdGVCb2FyZCgpOiBnYW1lYm9hcmRncmlkIHtcbiAgICBpZiAodGhpcy5ib2FyZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gbmV3IEFycmF5KDEwKSk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgc2hvd0JvYXJkKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYm9hcmQpO1xuICB9XG4gIGNoZWNrU2hpcCh4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5ib2FyZFt4cG9zXVt5cG9zXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgY2hlY2tIb3Jpem9udGFsKHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyLCBzaGlwOiBTaGlwKSB7XG4gICAgY29uc3QgdGVtcEFycmF5ID0gdGhpcy5ib2FyZFt4cG9zXS5zbGljZSh5cG9zLCBzaGlwLmxlbmd0aCk7XG4gICAgaWYgKCF0ZW1wQXJyYXkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY2hlY2tWZXJ0aWNhbCh4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlciwgc2hpcDogU2hpcCkge1xuICAgIGNvbnN0IHRlbXBBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCB0aGlzLmJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGVtcEFycmF5LnB1c2godGhpcy5ib2FyZFt4cG9zXVt5cG9zXSk7XG4gICAgfVxuICAgIGlmICghdGVtcEFycmF5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHBsYWNlU2hpcChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNoZWNrU2hpcCh4cG9zLCB5cG9zKSkge1xuICAgICAgcmV0dXJuIFwiVGhlcmUgaXMgYSBzaGlwIGRvY2tlZFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaGlwLnhjb29yZCA9IHhwb3M7XG4gICAgICBzaGlwLnljb29yZCA9IHlwb3M7XG5cbiAgICAgIHRoaXMuYm9hcmRbeHBvc11beXBvc10gPSBzaGlwO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRzOiBudW1iZXI7XG4gIHN1bms6IGJvb2xlYW47XG4gIHhjb29yZDogbnVtYmVyO1xuICB5Y29vcmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgeGNvb3JkOiBudW1iZXIgPSAwLFxuICAgIHljb29yZDogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy54Y29vcmQgPSB4Y29vcmQ7XG4gICAgdGhpcy55Y29vcmQgPSB5Y29vcmQ7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdHMgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaXRzKys7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbmsoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHNpbmsoKSB7XG4gICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENhcnJpZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJDYXJyaWVyXCIsIDUpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmF0dGxlc2hpcCBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJhdHRsZXNoaXBcIiwgNCk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJEZXN0cm95ZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTdWJtYXJpbmVcIiwgMyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBwYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiUGF0cm9sIEJvYXRcIiwgMik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBTaGlwLFxuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lYm9hcmQoKTtcbm5ld0dhbWUuY3JlYXRlQm9hcmQoKTtcbm5ld0dhbWUuc2hvd0JvYXJkKCk7XG5jb25zb2xlLmxvZyhuZXdHYW1lLmNoZWNrU2hpcCgyLCA0KSk7XG5uZXdHYW1lLnBsYWNlU2hpcChuZXcgQ2FycmllcigpLCAyLCA0KTtcbmNvbnNvbGUubG9nKG5ld0dhbWUuY2hlY2tTaGlwKDIsIDQpKTtcbm5ld0dhbWUuc2hvd0JvYXJkKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=