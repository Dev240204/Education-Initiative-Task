import { PaymentProcessor } from './PaymentProcessor';

export class CreditCardProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    // Implement credit card payment logic
  }
}

export class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    // Implement PayPal payment logic
  }
}

export class CryptoProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cryptocurrency payment of $${amount}`);
    // Implement cryptocurrency payment logic
  }
}