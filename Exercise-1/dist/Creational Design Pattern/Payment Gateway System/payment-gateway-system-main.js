"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentProcessorFactory_1 = require("./PaymentProcessorFactory");
function creditCardclientCode(factory) {
    factory.processPayment(100);
}
function payPalclientCode(factory) {
    factory.processPayment(2000);
}
function cryptoCurrencyclientCode(factory) {
    factory.processPayment(10);
}
console.log('Processing with Credit Card:');
creditCardclientCode(new PaymentProcessorFactory_1.CreditCardProcessorFactory());
console.log('Processing with PayPal:');
payPalclientCode(new PaymentProcessorFactory_1.PayPalProcessorFactory());
console.log('Processing with Cryptocurrency:');
cryptoCurrencyclientCode(new PaymentProcessorFactory_1.CryptoProcessorFactory());
