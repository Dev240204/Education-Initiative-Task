import { LegacyThermostat } from './smart-home-interfaces';

export class OldThermostat implements LegacyThermostat {
  private active: boolean = false;
  private temperature: number = 20;

  activate(): void {
    this.active = true;
    console.log('Legacy thermostat activated');
  }

  deactivate(): void {
    this.active = false;
    console.log('Legacy thermostat deactivated');
  }

  getCurrentTemperature(): number {
    return this.temperature;
  }

  setTemperature(temp: number): void {
    this.temperature = temp;
    console.log(`Temperature set to ${temp}°C`);
  }
}