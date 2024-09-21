"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
const coffee_decorator_1 = require("./coffee-decorator");
class MilkDecorator extends coffee_decorator_1.CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, Milk`;
    }
    getCost() {
        return this.coffee.getCost() + 0.5;
    }
}
exports.MilkDecorator = MilkDecorator;
