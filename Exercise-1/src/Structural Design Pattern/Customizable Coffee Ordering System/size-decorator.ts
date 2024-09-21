import { CoffeeDecorator } from './coffee-decorator';
import { Coffee } from './coffee';

export class SizeDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee, private size: 'Small' | 'Medium' | 'Large') {
    super(coffee);
  }

  getDescription(): string {
    return `${this.size} ${this.coffee.getDescription()}`;
  }

  getCost(): number {
    const sizeFactor = this.size === 'Small' ? 1 : this.size === 'Medium' ? 1.2 : 1.4;
    return this.coffee.getCost() * sizeFactor;
  }
}