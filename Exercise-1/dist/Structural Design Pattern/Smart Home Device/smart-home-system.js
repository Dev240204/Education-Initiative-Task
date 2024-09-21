"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartHomeSystem = void 0;
class SmartHomeSystem {
    constructor() {
        this.devices = new Map();
    }
    addDevice(name, device) {
        this.devices.set(name, device);
    }
    turnOnDevice(name) {
        const device = this.devices.get(name);
        if (device) {
            device.turnOn();
        }
        else {
            console.log(`Device ${name} not found`);
        }
    }
    turnOffDevice(name) {
        const device = this.devices.get(name);
        if (device) {
            device.turnOff();
        }
        else {
            console.log(`Device ${name} not found`);
        }
    }
    getDeviceStatus(name) {
        const device = this.devices.get(name);
        if (device) {
            return device.getStatus();
        }
        else {
            return `Device ${name} not found`;
        }
    }
}
exports.SmartHomeSystem = SmartHomeSystem;
