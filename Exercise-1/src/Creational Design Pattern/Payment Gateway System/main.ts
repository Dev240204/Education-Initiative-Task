import { PaymentProcessorFactory, CreditCardProcessorFactory, PayPalProcessorFactory, CryptoProcessorFactory } from './PaymentProcessorFactory';

function creditCardclientCode(factory: PaymentProcessorFactory) {
  factory.processPayment(100);
}
function payPalclientCode(factory: PaymentProcessorFactory) {
  factory.processPayment(2000);
}
function cryptoCurrencyclientCode(factory: PaymentProcessorFactory) {
  factory.processPayment(10);
}

console.log('Processing with Credit Card:');
creditCardclientCode(new CreditCardProcessorFactory());

console.log('Processing with PayPal:');
payPalclientCode(new PayPalProcessorFactory());

console.log('Processing with Cryptocurrency:');
cryptoCurrencyclientCode(new CryptoProcessorFactory());