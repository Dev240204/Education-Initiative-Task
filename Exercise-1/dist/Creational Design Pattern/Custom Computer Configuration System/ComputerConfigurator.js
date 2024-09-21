"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerConfigurator = void 0;
class ComputerConfigurator {
    constructor(builder) {
        this.builder = builder;
    }
    createGamingPC() {
        return this.builder
            .setCPU('Intel i9')
            .setRAM('32GB')
            .setStorage('1TB NVMe SSD')
            .setGPU('NVIDIA RTX 3080')
            .addPeripheral('Gaming Mouse')
            .addPeripheral('Mechanical Keyboard')
            .build();
    }
    createWorkstation() {
        return this.builder
            .setCPU('AMD Threadripper')
            .setRAM('64GB')
            .setStorage('2TB NVMe SSD')
            .setGPU('NVIDIA Quadro')
            .addPeripheral('Dual Monitors')
            .build();
    }
}
exports.ComputerConfigurator = ComputerConfigurator;
