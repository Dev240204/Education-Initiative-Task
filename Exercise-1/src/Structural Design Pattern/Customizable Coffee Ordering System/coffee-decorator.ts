import { Coffee } from './coffee';

export abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract getDescription(): string;
  abstract getCost(): number;
}