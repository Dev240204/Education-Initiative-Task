"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoProcessorFactory = exports.PayPalProcessorFactory = exports.CreditCardProcessorFactory = exports.PaymentProcessorFactory = void 0;
const Processors_1 = require("./Processors");
class PaymentProcessorFactory {
    processPayment(amount) {
        const processor = this.createProcessor();
        processor.processPayment(amount);
    }
}
exports.PaymentProcessorFactory = PaymentProcessorFactory;
class CreditCardProcessorFactory extends PaymentProcessorFactory {
    createProcessor() {
        return new Processors_1.CreditCardProcessor();
    }
}
exports.CreditCardProcessorFactory = CreditCardProcessorFactory;
class PayPalProcessorFactory extends PaymentProcessorFactory {
    createProcessor() {
        return new Processors_1.PayPalProcessor();
    }
}
exports.PayPalProcessorFactory = PayPalProcessorFactory;
class CryptoProcessorFactory extends PaymentProcessorFactory {
    createProcessor() {
        return new Processors_1.CryptoProcessor();
    }
}
exports.CryptoProcessorFactory = CryptoProcessorFactory;
