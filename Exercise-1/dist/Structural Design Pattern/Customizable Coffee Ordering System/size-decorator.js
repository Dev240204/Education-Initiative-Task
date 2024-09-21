"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeDecorator = void 0;
const coffee_decorator_1 = require("./coffee-decorator");
class SizeDecorator extends coffee_decorator_1.CoffeeDecorator {
    constructor(coffee, size) {
        super(coffee);
        this.size = size;
    }
    getDescription() {
        return `${this.size} ${this.coffee.getDescription()}`;
    }
    getCost() {
        const sizeFactor = this.size === 'Small' ? 1 : this.size === 'Medium' ? 1.2 : 1.4;
        return this.coffee.getCost() * sizeFactor;
    }
}
exports.SizeDecorator = SizeDecorator;
