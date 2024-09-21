"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThermostatAdapter = void 0;
class ThermostatAdapter {
    constructor(thermostat) {
        this.thermostat = thermostat;
    }
    turnOn() {
        this.thermostat.activate();
    }
    turnOff() {
        this.thermostat.deactivate();
    }
    getStatus() {
        return `Current temperature: ${this.thermostat.getCurrentTemperature()}°C`;
    }
}
exports.ThermostatAdapter = ThermostatAdapter;
