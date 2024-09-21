import { CoffeeDecorator } from './coffee-decorator';
import { Coffee } from './coffee';

export class SyrupDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee, private syrupType: string) {
    super(coffee);
  }

  getDescription(): string {
    return `${this.coffee.getDescription()}, ${this.syrupType} Syrup`;
  }

  getCost(): number {
    return this.coffee.getCost() + 0.6;
  }
}