"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
class Computer {
    constructor(cpu, ram, storage, gpu, peripherals) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.gpu = gpu;
        this.peripherals = peripherals;
    }
    describe() {
        return `Computer with ${this.cpu} CPU, ${this.ram} RAM, ${this.storage} storage, ${this.gpu} GPU, and peripherals: ${this.peripherals.join(', ')}`;
    }
}
exports.Computer = Computer;
