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
                "Horizontal";
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
            return "There is a ship docked";
        }
        else {
            ship.xcoord = xpos;
            ship.ycoord = ypos;
            if (this.orientation == "Horizontal") {
                this.board[xpos].fill(ship, ypos, ypos + ship.length);
            }
            else if (this.orientation == "Vertical") {
                for (let index = xpos; index <= ship.length; index++) {
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.ts");


const game = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
const shipOne = new _ship__WEBPACK_IMPORTED_MODULE_1__.Destroyer();
const shipTwo = new _ship__WEBPACK_IMPORTED_MODULE_1__.Carrier();
const shipThree = new _ship__WEBPACK_IMPORTED_MODULE_1__.Submarine();
game.createBoard();
game.placeShip(shipTwo, 2, 4);
game.placeShip(shipOne, 4, 6);
game.switchOrientation();
game.placeShip(shipThree, 1, 3);
game.showBoard();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztBQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFaEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG50eXBlIGdhbWVib2FyZGdyaWQgPSAobnVtYmVyIHwgc3RyaW5nIHwgU2hpcClbXVtdO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgYm9hcmQ6IGdhbWVib2FyZGdyaWQ7XG4gIG9yaWVudGF0aW9uOiBcIkhvcml6b250YWxcIiB8IFwiVmVydGljYWxcIjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gdGhpcy5jcmVhdGVCb2FyZCgpO1xuICAgIHRoaXMub3JpZW50YXRpb24gPSBcIkhvcml6b250YWxcIjtcbiAgfVxuICBjcmVhdGVCb2FyZCgpOiBnYW1lYm9hcmRncmlkIHtcbiAgICBpZiAodGhpcy5ib2FyZCkge1xuICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gICAgfVxuICAgIHRoaXMuYm9hcmQgPSBBcnJheS5mcm9tKEFycmF5KDEwKSwgKCkgPT4gbmV3IEFycmF5KDEwKSk7XG4gICAgcmV0dXJuIHRoaXMuYm9hcmQ7XG4gIH1cbiAgc2hvd0JvYXJkKCkge1xuICAgIGNvbnNvbGUudGFibGUodGhpcy5ib2FyZCk7XG4gIH1cbiAgc3dpdGNoT3JpZW50YXRpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLm9yaWVudGF0aW9uKSB7XG4gICAgICBjYXNlIFwiVmVydGljYWxcIjpcbiAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9IFwiSG9yaXpvbnRhbFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJIb3Jpem9udGFsXCI6XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBcIlZlcnRpY2FsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgXCJIb3Jpem9udGFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjaGVja1NoaXAoc2hpcDogU2hpcCwgeHBvczogbnVtYmVyLCB5cG9zOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuY2hlY2tTaGlwUGxhY2VtZW50KHNoaXAsIHhwb3MsIHlwb3MpKSB7XG4gICAgICBjb25zb2xlLmxvZyhcInNoaXAgUGxhY2VtZW50IGlzc3VlXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrVmVydGljYWwoc2hpcCwgeHBvcywgeXBvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrSG9yaXpvbnRhbChzaGlwLCB4cG9zLCB5cG9zKTtcbiAgICB9XG4gIH1cbiAgY2hlY2tIb3Jpem9udGFsKHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgY29uc3QgdGVtcEFycmF5ID0gdGhpcy5ib2FyZFt4cG9zXS5zbGljZSh5cG9zLCB5cG9zICsgc2hpcC5sZW5ndGgpO1xuICAgIGlmICh0ZW1wQXJyYXlbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY2hlY2tWZXJ0aWNhbChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGNvbnN0IHRlbXBBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGluZGV4ID0geHBvczsgaW5kZXggPCB0aGlzLmJvYXJkLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGVtcEFycmF5LnB1c2godGhpcy5ib2FyZFt4cG9zXVt5cG9zXSk7XG4gICAgfVxuICAgIGlmICh0ZW1wQXJyYXlbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgY2hlY2tTaGlwUGxhY2VtZW50KHNoaXA6IFNoaXAsIHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT09IFwiSG9yaXpvbnRhbFwiKSB7XG4gICAgICBpZiAoc2hpcC5sZW5ndGggKyB5cG9zID4gOSkgcmV0dXJuIGZhbHNlO1xuICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3JpZW50YXRpb24gPT09IFwiVmVydGljYWxcIikge1xuICAgICAgaWYgKHNoaXAubGVuZ3RoICsgeHBvcyA+IDkpIHJldHVybiBmYWxzZTtcbiAgICAgIGVsc2UgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHBsYWNlU2hpcChzaGlwOiBTaGlwLCB4cG9zOiBudW1iZXIsIHlwb3M6IG51bWJlcikge1xuICAgIGlmICghdGhpcy5jaGVja1NoaXAoc2hpcCwgeHBvcywgeXBvcykpIHtcbiAgICAgIHJldHVybiBcIlRoZXJlIGlzIGEgc2hpcCBkb2NrZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpcC54Y29vcmQgPSB4cG9zO1xuICAgICAgc2hpcC55Y29vcmQgPSB5cG9zO1xuXG4gICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcIkhvcml6b250YWxcIikge1xuICAgICAgICB0aGlzLmJvYXJkW3hwb3NdLmZpbGwoc2hpcCwgeXBvcywgeXBvcyArIHNoaXAubGVuZ3RoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSBcIlZlcnRpY2FsXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSB4cG9zOyBpbmRleCA8PSBzaGlwLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgIHRoaXMuYm9hcmRbaW5kZXhdW3lwb3NdID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZWNlaXZlQXR0YWNrKHhwb3M6IG51bWJlciwgeXBvczogbnVtYmVyKSB7fVxufVxuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBoaXRzOiBudW1iZXI7XG4gIHN1bms6IGJvb2xlYW47XG4gIHhjb29yZDogbnVtYmVyO1xuICB5Y29vcmQ6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgbGVuZ3RoOiBudW1iZXIsXG4gICAgeGNvb3JkOiBudW1iZXIgPSAwLFxuICAgIHljb29yZDogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy54Y29vcmQgPSB4Y29vcmQ7XG4gICAgdGhpcy55Y29vcmQgPSB5Y29vcmQ7XG4gIH1cbiAgaGl0KCkge1xuICAgIGlmICh0aGlzLmhpdHMgPCB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5oaXRzKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNpbmsoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHNpbmsoKSB7XG4gICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuZXhwb3J0IGNsYXNzIENhcnJpZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJDYXJyaWVyXCIsIDUpO1xuICB9XG59XG5leHBvcnQgY2xhc3MgQmF0dGxlc2hpcCBleHRlbmRzIFNoaXAge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcihcIkJhdHRsZXNoaXBcIiwgNCk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBEZXN0cm95ZXIgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJEZXN0cm95ZXJcIiwgNSk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBTdWJtYXJpbmUgZXh0ZW5kcyBTaGlwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoXCJTdWJtYXJpbmVcIiwgMyk7XG4gIH1cbn1cbmV4cG9ydCBjbGFzcyBwYXRyb2xCb2F0IGV4dGVuZHMgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKFwiUGF0cm9sIEJvYXRcIiwgMik7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQge1xuICBTaGlwLFxuICBCYXR0bGVzaGlwLFxuICBDYXJyaWVyLFxuICBEZXN0cm95ZXIsXG4gIFN1Ym1hcmluZSxcbiAgcGF0cm9sQm9hdCxcbn0gZnJvbSBcIi4vc2hpcFwiO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IHNoaXBPbmUgPSBuZXcgRGVzdHJveWVyKCk7XG5jb25zdCBzaGlwVHdvID0gbmV3IENhcnJpZXIoKTtcbmNvbnN0IHNoaXBUaHJlZSA9IG5ldyBTdWJtYXJpbmUoKTtcbmdhbWUuY3JlYXRlQm9hcmQoKTtcbmdhbWUucGxhY2VTaGlwKHNoaXBUd28sIDIsIDQpO1xuZ2FtZS5wbGFjZVNoaXAoc2hpcE9uZSwgNCwgNik7XG5nYW1lLnN3aXRjaE9yaWVudGF0aW9uKCk7XG5nYW1lLnBsYWNlU2hpcChzaGlwVGhyZWUsIDEsIDMpO1xuXG5nYW1lLnNob3dCb2FyZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9