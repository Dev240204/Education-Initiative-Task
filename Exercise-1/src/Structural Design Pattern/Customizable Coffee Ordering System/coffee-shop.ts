import { Coffee } from './coffee';

export class CoffeeShop {
  private orders: Coffee[] = [];

  addOrder(coffee: Coffee): void {
    this.orders.push(coffee);
  }

  processOrders(): void {
    this.orders.forEach((coffee, index) => {
      console.log(`Order #${index + 1}: ${coffee.getDescription()} - $${coffee.getCost().toFixed(2)}`);
    });
    console.log(`Total Revenue: $${this.getTotalRevenue().toFixed(2)}`);
    this.orders = [];
  }

  private getTotalRevenue(): number {
    return this.orders.reduce((total, coffee) => total + coffee.getCost(), 0);
  }
}