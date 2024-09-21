import { SmartHomeDevice, LegacyThermostat } from './smart-home-interfaces';

export class ThermostatAdapter implements SmartHomeDevice {
  constructor(private thermostat: LegacyThermostat) {}

  turnOn(): void {
    this.thermostat.activate();
  }

  turnOff(): void {
    this.thermostat.deactivate();
  }

  getStatus(): string {
    return `Current temperature: ${this.thermostat.getCurrentTemperature()}°C`;
  }
}