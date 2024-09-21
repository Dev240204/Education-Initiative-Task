import { PaymentProcessor } from './PaymentProcessor';
import { CreditCardProcessor, PayPalProcessor, CryptoProcessor } from './Processors';

export abstract class PaymentProcessorFactory {
  abstract createProcessor(): PaymentProcessor;

  processPayment(amount: number): void {
    const processor = this.createProcessor();
    processor.processPayment(amount);
  }
}

export class CreditCardProcessorFactory extends PaymentProcessorFactory {
  createProcessor(): PaymentProcessor {
    return new CreditCardProcessor();
  }
}

export class PayPalProcessorFactory extends PaymentProcessorFactory {
  createProcessor(): PaymentProcessor {
    return new PayPalProcessor();
  }
}

export class CryptoProcessorFactory extends PaymentProcessorFactory {
  createProcessor(): PaymentProcessor {
    return new CryptoProcessor();
  }
}
