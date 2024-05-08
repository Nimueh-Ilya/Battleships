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
    constructor(name, length) {
        super((name = "Carrier"), (length = 5));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgZ2FtZWJvYXJkZ3JpZCA9IChudW1iZXIgfCBzdHJpbmcgfCBTaGlwKVtdW107XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICBib2FyZDogZ2FtZWJvYXJkZ3JpZDtcbiAgb3Jpb250YXRpb246IFwiSG9yaXpvbnRhbFwiIHwgXCJWZXJ0aWNhbFwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmNyZWF0ZUJvYXJkKCk7XG4gICAgdGhpcy5vcmlvbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICB9XG4gIGNyZWF0ZUJvYXJkKCk6IGdhbWVib2FyZGdyaWQge1xuICAgIGlmICh0aGlzLmJvYXJkKSB7XG4gICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoMTApLCAoKSA9PiBuZXcgQXJyYXkoMTApKTtcbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxuICBzaG93Qm9hcmQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5ib2FyZCk7XG4gIH1cbiAgcGxhY2VTaGlwKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tTaGlwKHhwb3MsIHlwb3MpKSB7XG4gICAgICByZXR1cm4gXCJUaGVyZSBpcyBhIHNoaXAgZG9ja2VkXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm9hcmRbeHBvc11beXBvc10gPSBzaGlwO1xuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7fVxuICBjaGVja1NoaXAoeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuYm9hcmRbeHBvc11beXBvc10pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGhpdHM6IG51bWJlcjtcbiAgc3VuazogYm9vbGVhbjtcbiAgeGNvb3JkOiBudW1iZXI7XG4gIHljb29yZDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBsZW5ndGg6IG51bWJlcixcbiAgICB4Y29vcmQ6IG51bWJlciA9IDAsXG4gICAgeWNvb3JkOiBudW1iZXIgPSAwXG4gICkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnhjb29yZCA9IHhjb29yZDtcbiAgICB0aGlzLnljb29yZCA9IHljb29yZDtcbiAgfVxuICBoaXQoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmhpdHMrKztcbiAgICB9XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2luaygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgc2luaygpIHtcbiAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQ2FycmllciBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyKSB7XG4gICAgc3VwZXIoKG5hbWUgPSBcIkNhcnJpZXJcIiksIChsZW5ndGggPSA1KSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBCYXR0bGVzaGlwIGV4dGVuZHMgU2hpcCB7XG4gIG5hbWU6IHN0cmluZyA9IFwiQmF0dGxlc2hpcFwiO1xuICBsZW5ndGg6IG51bWJlciA9IDQ7XG59XG5leHBvcnQgY2xhc3MgRGVzdHJveWVyIGV4dGVuZHMgU2hpcCB7XG4gIG5hbWU6IHN0cmluZyA9IFwiRGVzdHJveWVyXCI7XG4gIGxlbmd0aDogbnVtYmVyID0gMztcbn1cbmV4cG9ydCBjbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgbmFtZTogc3RyaW5nID0gXCJTdWJtYXJpbmVcIjtcbiAgbGVuZ3RoOiBudW1iZXIgPSAzO1xufVxuZXhwb3J0IGNsYXNzIHBhdHJvbEJvYXQgZXh0ZW5kcyBTaGlwIHtcbiAgbmFtZTogc3RyaW5nID0gXCJQYXRyb2wgQm9hdFwiO1xuICBsZW5ndGg6IG51bWJlciA9IDI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHtcbiAgU2hpcCxcbiAgQmF0dGxlc2hpcCxcbiAgQ2FycmllcixcbiAgRGVzdHJveWVyLFxuICBTdWJtYXJpbmUsXG4gIHBhdHJvbEJvYXQsXG59IGZyb20gXCIuL3NoaXBcIjtcbmNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZWJvYXJkKCk7XG5uZXdHYW1lLmNyZWF0ZUJvYXJkKCk7XG5uZXdHYW1lLnNob3dCb2FyZCgpO1xuY29uc29sZS5sb2cobmV3R2FtZS5jaGVja1NoaXAoMCwgMCkpO1xubmV3R2FtZS5wbGFjZVNoaXAobmV3IENhcnJpZXIoKSwgMCwgMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=