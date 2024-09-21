"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyrupDecorator = void 0;
const coffee_decorator_1 = require("./coffee-decorator");
class SyrupDecorator extends coffee_decorator_1.CoffeeDecorator {
    constructor(coffee, syrupType) {
        super(coffee);
        this.syrupType = syrupType;
    }
    getDescription() {
        return `${this.coffee.getDescription()}, ${this.syrupType} Syrup`;
    }
    getCost() {
        return this.coffee.getCost() + 0.6;
    }
}
exports.SyrupDecorator = SyrupDecorator;
