import { SimpleCoffee } from './coffee';
import { MilkDecorator } from './milk-decorator';
import { SugarDecorator } from './sugar-decorator';
import { WhippedCreamDecorator } from './whipped-cream-decorator';
import { SyrupDecorator } from './syrup-decorator';
import { SizeDecorator } from './size-decorator';
import { CoffeeShop } from './coffee-shop';

const coffeeShop = new CoffeeShop();

// Order 1: Large Latte with Vanilla Syrup
let coffee1 = new SimpleCoffee();
coffee1 = new MilkDecorator(coffee1);
coffee1 = new SyrupDecorator(coffee1, 'Vanilla');
coffee1 = new SizeDecorator(coffee1, 'Large');
coffeeShop.addOrder(coffee1);

// Order 2: Medium Mocha with Whipped Cream
let coffee2 = new SimpleCoffee();
coffee2 = new MilkDecorator(coffee2);
coffee2 = new SyrupDecorator(coffee2, 'Chocolate');
coffee2 = new WhippedCreamDecorator(coffee2);
coffee2 = new SizeDecorator(coffee2, 'Medium');
coffeeShop.addOrder(coffee2);

// Order 3: Small Black Coffee with Sugar
let coffee3 = new SimpleCoffee();
coffee3 = new SugarDecorator(coffee3);
coffee3 = new SizeDecorator(coffee3, 'Small');
coffeeShop.addOrder(coffee3);

coffeeShop.processOrders();