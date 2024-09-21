"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoProcessor = exports.PayPalProcessor = exports.CreditCardProcessor = void 0;
class CreditCardProcessor {
    processPayment(amount) {
        console.log(`Processing credit card payment of $${amount}`);
        // Implement credit card payment logic
    }
}
exports.CreditCardProcessor = CreditCardProcessor;
class PayPalProcessor {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
        // Implement PayPal payment logic
    }
}
exports.PayPalProcessor = PayPalProcessor;
class CryptoProcessor {
    processPayment(amount) {
        console.log(`Processing cryptocurrency payment of $${amount}`);
        // Implement cryptocurrency payment logic
    }
}
exports.CryptoProcessor = CryptoProcessor;
