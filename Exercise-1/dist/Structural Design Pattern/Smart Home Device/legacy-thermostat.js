"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OldThermostat = void 0;
class OldThermostat {
    constructor() {
        this.active = false;
        this.temperature = 20;
    }
    activate() {
        this.active = true;
        console.log('Legacy thermostat activated');
    }
    deactivate() {
        this.active = false;
        console.log('Legacy thermostat deactivated');
    }
    getCurrentTemperature() {
        return this.temperature;
    }
    setTemperature(temp) {
        this.temperature = temp;
        console.log(`Temperature set to ${temp}°C`);
    }
}
exports.OldThermostat = OldThermostat;
