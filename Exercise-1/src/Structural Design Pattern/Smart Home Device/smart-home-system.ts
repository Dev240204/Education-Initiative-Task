import { SmartHomeDevice } from './smart-home-interfaces';

export class SmartHomeSystem {
  private devices: Map<string, SmartHomeDevice> = new Map();

  addDevice(name: string, device: SmartHomeDevice): void {
    this.devices.set(name, device);
  }

  turnOnDevice(name: string): void {
    const device = this.devices.get(name);
    if (device) {
      device.turnOn();
    } else {
      console.log(`Device ${name} not found`);
    }
  }

  turnOffDevice(name: string): void {
    const device = this.devices.get(name);
    if (device) {
      device.turnOff();
    } else {
      console.log(`Device ${name} not found`);
    }
  }

  getDeviceStatus(name: string): string {
    const device = this.devices.get(name);
    if (device) {
      return device.getStatus();
    } else {
      return `Device ${name} not found`;
    }
  }
}