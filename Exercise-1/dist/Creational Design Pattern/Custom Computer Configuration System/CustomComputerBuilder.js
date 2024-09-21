"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomComputerBuilder = void 0;
const Computer_1 = require("./Computer");
class CustomComputerBuilder {
    constructor() {
        this.cpu = 'Default CPU';
        this.ram = '8GB';
        this.storage = '256GB SSD';
        this.gpu = 'Integrated Graphics';
        this.peripherals = [];
    }
    setCPU(cpu) {
        this.cpu = cpu;
        return this;
    }
    setRAM(ram) {
        this.ram = ram;
        return this;
    }
    setStorage(storage) {
        this.storage = storage;
        return this;
    }
    setGPU(gpu) {
        this.gpu = gpu;
        return this;
    }
    addPeripheral(peripheral) {
        this.peripherals.push(peripheral);
        return this;
    }
    build() {
        return new Computer_1.Computer(this.cpu, this.ram, this.storage, this.gpu, this.peripherals);
    }
}
exports.CustomComputerBuilder = CustomComputerBuilder;
