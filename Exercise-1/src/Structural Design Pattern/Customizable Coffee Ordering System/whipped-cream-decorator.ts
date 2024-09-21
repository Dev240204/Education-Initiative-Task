import { CoffeeDecorator } from './coffee-decorator';

export class WhippedCreamDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Whipped Cream`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.7;
  }
}