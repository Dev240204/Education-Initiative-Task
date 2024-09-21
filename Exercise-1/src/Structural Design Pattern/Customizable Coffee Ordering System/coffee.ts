export interface Coffee {
    getDescription(): string;
    getCost(): number;
  }
  
  export class SimpleCoffee implements Coffee {
    getDescription(): string {
      return "Simple Coffee";
    }
  
    getCost(): number {
      return 2.0;
    }
  }