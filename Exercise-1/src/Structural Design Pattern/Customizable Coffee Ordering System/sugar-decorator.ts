import { CoffeeDecorator } from './coffee-decorator';

export class SugarDecorator extends CoffeeDecorator {
  getDescription(): string {
    return `${this.coffee.getDescription()}, Sugar`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.2;
  }
}