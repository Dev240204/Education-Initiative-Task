"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coffee_1 = require("./coffee");
const milk_decorator_1 = require("./milk-decorator");
const sugar_decorator_1 = require("./sugar-decorator");
const whipped_cream_decorator_1 = require("./whipped-cream-decorator");
const syrup_decorator_1 = require("./syrup-decorator");
const size_decorator_1 = require("./size-decorator");
const coffee_shop_1 = require("./coffee-shop");
const coffeeShop = new coffee_shop_1.CoffeeShop();
// Order 1: Large Latte with Vanilla Syrup
let coffee1 = new coffee_1.SimpleCoffee();
coffee1 = new milk_decorator_1.MilkDecorator(coffee1);
coffee1 = new syrup_decorator_1.SyrupDecorator(coffee1, 'Vanilla');
coffee1 = new size_decorator_1.SizeDecorator(coffee1, 'Large');
coffeeShop.addOrder(coffee1);
// Order 2: Medium Mocha with Whipped Cream
let coffee2 = new coffee_1.SimpleCoffee();
coffee2 = new milk_decorator_1.MilkDecorator(coffee2);
coffee2 = new syrup_decorator_1.SyrupDecorator(coffee2, 'Chocolate');
coffee2 = new whipped_cream_decorator_1.WhippedCreamDecorator(coffee2);
coffee2 = new size_decorator_1.SizeDecorator(coffee2, 'Medium');
coffeeShop.addOrder(coffee2);
// Order 3: Small Black Coffee with Sugar
let coffee3 = new coffee_1.SimpleCoffee();
coffee3 = new sugar_decorator_1.SugarDecorator(coffee3);
coffee3 = new size_decorator_1.SizeDecorator(coffee3, 'Small');
coffeeShop.addOrder(coffee3);
coffeeShop.processOrders();
