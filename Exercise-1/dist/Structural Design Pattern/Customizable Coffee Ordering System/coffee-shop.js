"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeShop = void 0;
class CoffeeShop {
    constructor() {
        this.orders = [];
    }
    addOrder(coffee) {
        this.orders.push(coffee);
    }
    processOrders() {
        this.orders.forEach((coffee, index) => {
            console.log(`Order #${index + 1}: ${coffee.getDescription()} - $${coffee.getCost().toFixed(2)}`);
        });
        console.log(`Total Revenue: $${this.getTotalRevenue().toFixed(2)}`);
        this.orders = [];
    }
    getTotalRevenue() {
        return this.orders.reduce((total, coffee) => total + coffee.getCost(), 0);
    }
}
exports.CoffeeShop = CoffeeShop;
