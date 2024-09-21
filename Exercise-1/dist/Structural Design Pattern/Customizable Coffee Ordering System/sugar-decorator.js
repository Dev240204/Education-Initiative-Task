"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SugarDecorator = void 0;
const coffee_decorator_1 = require("./coffee-decorator");
class SugarDecorator extends coffee_decorator_1.CoffeeDecorator {
    getDescription() {
        return `${this.coffee.getDescription()}, Sugar`;
    }
    getCost() {
        return this.coffee.getCost() + 0.2;
    }
}
exports.SugarDecorator = SugarDecorator;
