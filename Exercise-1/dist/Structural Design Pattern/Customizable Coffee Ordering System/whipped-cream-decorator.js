"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhippedCreamDecorator = void 0;
const coffee_decorator_1 = require("./coffee-decorator");
class WhippedCreamDecorator extends coffee_decorator_1.CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, Whipped Cream`;
    }
    getCost() {
        return this.coffee.getCost() + 0.7;
    }
}
exports.WhippedCreamDecorator = WhippedCreamDecorator;
