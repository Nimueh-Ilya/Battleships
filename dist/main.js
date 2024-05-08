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
        this.oriontation = "Horizontal";
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
    placeShip(ship, xpos, ypos) {
        if (this.checkShip(xpos, ypos)) {
            return "There is a ship docked";
        }
        else {
            this.board[xpos][ypos] = ship;
        }
    }
    receiveAttack(xpos, ypos) { }
    checkShip(xpos, ypos) {
        if (!this.board[xpos][ypos]) {
            return false;
        }
        else {
            return true;
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
        super(...arguments);
        this.name = "Battleship";
        this.length = 4;
    }
}
class Destroyer extends Ship {
    constructor() {
        super(...arguments);
        this.name = "Destroyer";
        this.length = 3;
    }
}
class Submarine extends Ship {
    constructor() {
        super(...arguments);
        this.name = "Submarine";
        this.length = 3;
    }
}
class patrolBoat extends Ship {
    constructor() {
        super(...arguments);
        this.name = "Patrol Boat";
        this.length = 2;
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
console.log(newGame.checkShip(0, 0));
newGame.placeShip(new _ship__WEBPACK_IMPORTED_MODULE_1__.Carrier(), 0, 0);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxHQUFXLFdBQVcsQ0FBQztRQUMzQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Q0FBQTtBQUNNLE1BQU0sU0FBVSxTQUFRLElBQUk7SUFBbkM7O1FBQ0UsU0FBSSxHQUFXLFdBQVcsQ0FBQztRQUMzQixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Q0FBQTtBQUNNLE1BQU0sVUFBVyxTQUFRLElBQUk7SUFBcEM7O1FBQ0UsU0FBSSxHQUFXLGFBQWEsQ0FBQztRQUM3QixXQUFNLEdBQVcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Q0FBQTs7Ozs7OztVQ3pERDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQVF4QjtBQUNoQixNQUFNLE9BQU8sR0FBRyxJQUFJLGlEQUFTLEVBQUUsQ0FBQztBQUNoQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDdEIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksMENBQU8sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxudHlwZSBnYW1lYm9hcmRncmlkID0gKG51bWJlciB8IHN0cmluZyB8IFNoaXApW11bXTtcblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGJvYXJkOiBnYW1lYm9hcmRncmlkO1xuICBvcmlvbnRhdGlvbjogXCJIb3Jpem9udGFsXCIgfCBcIlZlcnRpY2FsXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgICB0aGlzLm9yaW9udGF0aW9uID0gXCJIb3Jpem9udGFsXCI7XG4gIH1cbiAgY3JlYXRlQm9hcmQoKTogZ2FtZWJvYXJkZ3JpZCB7XG4gICAgaWYgKHRoaXMuYm9hcmQpIHtcbiAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgIH1cbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbShBcnJheSgxMCksICgpID0+IG5ldyBBcnJheSgxMCkpO1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG4gIHNob3dCb2FyZCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkKTtcbiAgfVxuICBwbGFjZVNoaXAoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5jaGVja1NoaXAoeHBvcywgeXBvcykpIHtcbiAgICAgIHJldHVybiBcIlRoZXJlIGlzIGEgc2hpcCBkb2NrZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ib2FyZFt4cG9zXVt5cG9zXSA9IHNoaXA7XG4gICAgfVxuICB9XG4gIHJlY2VpdmVBdHRhY2soeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHt9XG4gIGNoZWNrU2hpcCh4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5ib2FyZFt4cG9zXVt5cG9zXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgaGl0czogbnVtYmVyO1xuICBzdW5rOiBib29sZWFuO1xuICB4Y29vcmQ6IG51bWJlcjtcbiAgeWNvb3JkOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGxlbmd0aDogbnVtYmVyLFxuICAgIHhjb29yZDogbnVtYmVyID0gMCxcbiAgICB5Y29vcmQ6IG51bWJlciA9IDBcbiAgKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMueGNvb3JkID0geGNvb3JkO1xuICAgIHRoaXMueWNvb3JkID0geWNvb3JkO1xuICB9XG4gIGhpdCgpIHtcbiAgICBpZiAodGhpcy5oaXRzIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaGl0cysrO1xuICAgIH1cbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zaW5rKCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBzaW5rKCkge1xuICAgIHRoaXMuc3VuayA9IHRydWU7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBDYXJyaWVyIGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiQ2FycmllclwiLCA1KTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEJhdHRsZXNoaXAgZXh0ZW5kcyBTaGlwIHtcbiAgbmFtZTogc3RyaW5nID0gXCJCYXR0bGVzaGlwXCI7XG4gIGxlbmd0aDogbnVtYmVyID0gNDtcbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgbmFtZTogc3RyaW5nID0gXCJEZXN0cm95ZXJcIjtcbiAgbGVuZ3RoOiBudW1iZXIgPSAzO1xufVxuZXhwb3J0IGNsYXNzIFN1Ym1hcmluZSBleHRlbmRzIFNoaXAge1xuICBuYW1lOiBzdHJpbmcgPSBcIlN1Ym1hcmluZVwiO1xuICBsZW5ndGg6IG51bWJlciA9IDM7XG59XG5leHBvcnQgY2xhc3MgcGF0cm9sQm9hdCBleHRlbmRzIFNoaXAge1xuICBuYW1lOiBzdHJpbmcgPSBcIlBhdHJvbCBCb2F0XCI7XG4gIGxlbmd0aDogbnVtYmVyID0gMjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBTaGlwLFxuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuY29uc3QgbmV3R2FtZSA9IG5ldyBHYW1lYm9hcmQoKTtcbm5ld0dhbWUuY3JlYXRlQm9hcmQoKTtcbm5ld0dhbWUuc2hvd0JvYXJkKCk7XG5jb25zb2xlLmxvZyhuZXdHYW1lLmNoZWNrU2hpcCgwLCAwKSk7XG5uZXdHYW1lLnBsYWNlU2hpcChuZXcgQ2FycmllcigpLCAwLCAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==